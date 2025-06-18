import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice"
import stringReducer from "./slices/stringSlice"

// here is a base store
export const store = configureStore({
    reducer : {
        counter: counterReducer,
        string: stringReducer
    },
})

// below we are able to define the state, getting the return
// type of that function.
export type RootState = ReturnType<typeof store.getState>;

// useful when using async actions
export type AppDispatch = typeof store.dispatch;