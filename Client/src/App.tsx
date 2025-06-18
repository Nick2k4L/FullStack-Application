import { useState } from 'react'
const PATH = "http://localhost:8000/api";

import './App.css'
import Counter from './components/Counter';
import MyButton from './components/MyButton';
import { useSelector } from 'react-redux';
import type { RootState } from './state/store';
import { useDispatch } from 'react-redux';
import { setString } from './state/slices/stringSlice';


function App() {
  //const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState<string>('')
  //const [outputText, setOutputText] = useState<string>('')
  const output = useSelector((state: RootState) => state.string.value)
  const dispatch = useDispatch()

  async function fetchSearched(){
      const response = await fetch(PATH.concat(`/${inputText}`))
      //const response = await fetch(PATH)
      console.log(`Here is the respone we got from our call ${response.status}`)
      if (response.ok && inputText){
        const msg = await response.json();
        const fullMsg = JSON.stringify(msg.text)
        console.log(fullMsg)
        dispatch(setString(fullMsg))
      }
      else if(response.ok && !inputText){
        const msg = await response.json()
        console.log(msg)
        //const jsonMsg = JSON.parse(msg)
        let fullMsg = ""

        msg.forEach((item: {id:number, text:string}) => {
          fullMsg += ` ${item.text}\n`
        });
        dispatch(setString(fullMsg))

      }
      else{
        dispatch(setString("Failed to recieve a response, check input"))
      }
  }

  



  return (
    <>

        <Counter>
        </Counter>

        <input 
          placeholder="Type in a ID number"
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}>
        </input>


        <MyButton
          name="click me!"
          onClick={() => fetchSearched()}
        ></MyButton>
           
        <p>From Backend {output} </p>
    </>
  )
}

export default App
