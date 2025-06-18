import type { PayloadAction } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit"

interface StringState{
    value: string
}

const initialState: StringState = {
    value: "hello!",
}

const stringSlice = createSlice({
    name: "string",
    initialState,
    reducers: {
        setString: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    },
})

export const { setString } = stringSlice.actions
export default stringSlice.reducer