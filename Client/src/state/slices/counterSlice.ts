import { createSlice } from "@reduxjs/toolkit"

interface CounterState{
    value: number;
}

const initialState: CounterState = {
    value: 0,
}

// when we are using createSlice, we are not actually mutating state,
// it is doing it all behind the state for us which is really nice
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    }
})

export const { increment } = counterSlice.actions

export default counterSlice.reducer