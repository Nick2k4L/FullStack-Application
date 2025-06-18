import { useState } from 'react'
const PATH = "http://localhost:8000/api";

import './App.css'



function App() {
  //const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState<string>('')
  const [outputText, setOutputText] = useState<string>('')


  async function fetchSearched(){
      const response = await fetch(PATH.concat(`/${inputText}`))
      //const response = await fetch(PATH)
      console.log(`Here is the respone we got from our call ${response.status}`)
      if (response.ok && inputText){
        const msg = await response.json();
        const fullMsg = JSON.stringify(msg.text)
        console.log(fullMsg)
        setOutputText(fullMsg)
      }
      else if(response.ok && !inputText){
        const msg = await response.json()
        console.log(msg)
        //const jsonMsg = JSON.parse(msg)
        let fullMsg = ""

        msg.forEach((item: {id:number, text:string}) => {
          fullMsg += ` ${item.text}\n`
        });

        setOutputText(fullMsg)
      }
      else{
        setOutputText("Failed to recieve a response, check input")
      }
  }

  



  return (
    <>
        <input 
          placeholder="Type in a ID number"
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)}>
        </input>

        <button 
          onClick={() => fetchSearched()}>
          click me!
          
        </button>    
        <p>From Backend {outputText} </p>
    </>
  )
}

export default App
