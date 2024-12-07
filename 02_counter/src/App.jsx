import { useState } from 'react'

function App() {

  //React hoooooookkks
//it should be 'let' not const
  let [counter, setCounter ]= useState(15) //[,function to update variable]

  // let counter = 15;
  const min = 0;
  const max = 20;

  const addVal = () =>{
    if(counter < max)
      {
      counter = counter + 1;
      setCounter(counter);
      console.log("Clicked",counter);
      }
  }

  const removeVal = () =>{
    if(counter > min)
    {
    counter = counter - 1;
    setCounter(counter)
    console.log("Counter Decereased",counter);
    }
   
  }
  return (
    <>
      <h1>hii</h1>
      <h2>Counter Value {counter}</h2>
      <br></br>

      <button onClick={addVal}>
      Increase
      </button> 

    <br></br> <br></br>

      <button onClick={removeVal}>
      Decrease 
      </button>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
