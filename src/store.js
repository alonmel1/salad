import { configureStore } from '@reduxjs/toolkit'
import ingredientsReducer from "./reducers/ingredientsSlice";

const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer
    },
})

export default store;

