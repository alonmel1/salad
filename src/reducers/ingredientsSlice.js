import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    availableIngredients: null,
    totalPrice: 0.00,
    loading: false,
}

export const getIngredients = createAsyncThunk(
    'ingredients/getIngredients',
    async (dispatch, getState) => {
        return await fetch('__mocks__/ingredients.json').then(
            (res) => res.json()
        )
    }
)

const getTotalPrice = (availableIngredients) => availableIngredients.reduce((acc ,{price, quantity}) => {
    return acc + price * quantity;
}, 0);

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state, action) => {
            const ingredient = action.payload;
            const ingredientIndex = state.availableIngredients.findIndex(({name}) => name === ingredient)

            state.availableIngredients[ingredientIndex].quantity += 1;
            state.totalPrice = getTotalPrice(state.availableIngredients);
        },
        removeIngredient: (state, action) => {
            const ingredient = action.payload;
            const ingredientIndex = state.availableIngredients.findIndex(({name}) => name === ingredient)

            if (state.availableIngredients[ingredientIndex].quantity > 0) {
                state.availableIngredients[ingredientIndex].quantity -= 1;
                state.totalPrice = getTotalPrice(state.availableIngredients);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getIngredients.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getIngredients.fulfilled, (state, action) => {
                state.loading = false
                state.availableIngredients = action.payload.items.map(item => ({
                    ...item,
                    quantity: 0,
                }))
            })
            .addCase(getIngredients.rejected, (state, action) => {
                state.loading = false
            })
    }
})

// Action creators are generated for each case reducer function
export const { addIngredient, removeIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer
