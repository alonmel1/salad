import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    availableIngredients: null,
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

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getIngredients.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getIngredients.fulfilled, (state, action) => {
                state.loading = false
                state.availableIngredients = action.payload.items
            })
            .addCase(getIngredients.rejected, (state, action) => {
                state.loading = false
            })
    }
})

// Action creators are generated for each case reducer function

export default ingredientsSlice.reducer
