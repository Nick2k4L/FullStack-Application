import type { PayloadAction } from "@reduxjs/toolkit"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
const PATH = "http://localhost:8000/api";

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
    extraReducers: (builder) => {

        // if it is okay / fulfilled then its okay. 
        // There is also a rejected case for when there is a rejection
        builder.addCase(stringAsync.fulfilled, (state, action: PayloadAction<string>) => {
            state.value = action.payload
        })
        
    },
})

export const stringAsync = createAsyncThunk(
    "string/stringAsync",
    async (inputText: string) => {
        const response = await fetch(PATH.concat(`/${inputText}`))
        console.log(`Here is the respone we got from our call ${response.status}`)

      if (response.ok && inputText){
        const msg = await response.json();
        const fullMsg = JSON.stringify(msg.text)
        console.log(fullMsg)
        return fullMsg
      }
      else if(response.ok && !inputText){
        const msg = await response.json()
        console.log(msg)
        //const jsonMsg = JSON.parse(msg)
        let fullMsg = ""

        msg.forEach((item: {id:number, text:string}) => {
          fullMsg += ` ${item.text}\n`
        });

        return fullMsg

      }
      else{
        return ("Failed to recieve a response, check input")
      }
    }
)

export const { setString } = stringSlice.actions
export default stringSlice.reducer