import { configureStore } from '@reduxjs/toolkit'
import ingredientsReducer from "./slices/ingredientsSlice";

const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer
    },
})

export default store;

