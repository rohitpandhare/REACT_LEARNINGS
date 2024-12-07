import { useState, useCallback, useEffect , useRef} from 'react'
// const cachedFn = useCallback(fn, dependencies) -- memorize and return function
// useEffect(setup, dependencies?)
// const ref = useRef(initialValue)

function App() {

  const [length,setLength] = useState(8);
  const [numInsert, setNumber] = useState(false);
  const [charInsert, setChar] = useState(false);
  const [password, setPassword] = useState("");

  //generating password
  const passwordGenerator = useCallback(() =>{
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

      if(numInsert){str = str + "0123456789";}
      if(charInsert){str = str + "!@#$%^&*()_+-=[]{}`~"}

      for (let i = 1; i <= length; i++)
      {
        let c = Math.floor(Math.random() * str.length + 1)
        pass = pass + str.charAt(c)
      }
      setPassword(pass);
  },[length,numInsert,charInsert,setPassword]); //setPassword is optional

  //below func is responsible for inserting chars and nums 
  useEffect(() => {
      passwordGenerator()
},[length,numInsert,charInsert,passwordGenerator]) //re-run purpose


  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordInClipboard = useCallback(() =>{
    //to highlight text while copying
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,4); ///select a perticular range 
    window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800' id='main-container'>
      
      <h1 className='text-white text-center my-3'>
          Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4' id='top-row'>

          <input
          type='text' 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}>
          </input>
          
          <button
          onClick={copyPasswordInClipboard}
          className='outline-double bg-cyan-300 text-white px-3 py-0.5 shrink-0'>
            COPY
          </button>

        </div>

      <div className='flex text-sm  gap-x-2' id='bottom-row'>

          <div className='flex items-center gap-x-1'>
            <input
            type='range'
            min={6}
            max={100}
            value={length}
              className='cursor-pointer '
              onChange={(e) =>{
                ///passes the changed length
                        setLength(e.target.value)
              }}>
            </input>
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={numInsert}
              id='numberInput'
              onChange={() => {
                setNumber( (prev) => !prev); //reverse the previous value
              }}></input>

              <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
              <input
              type='checkbox'
              defaultChecked={charInsert}
              id='charInput'
              onChange={() => {
                setChar( (prev) => !prev); //reverse the previous value
              }}></input>

              <label htmlFor="charInput">Characters</label>
          </div>

        </div>

    </div>
  )
}

export default App
