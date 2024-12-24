import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  // useRef Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}`~";

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length);
    window.navigator.clipboard.writeText(password);

  },[password])

  useEffect(()=>{
    passwordGenerator();  
  },[length,charAllowed,numAllowed,passwordGenerator])

  return (
    <div className="bg-slate-700 w-full h-screen">
      <div className="bg-white text-center w-full">
        <h1 className=" text-3xl md:text-5xl py-2  text-slate-700 font-bold">
          Password Generator
        </h1>
      </div>
      <div className="w-full  max-w-md mx-auto shadow-md rounded-lg py-4 px-4 my-8 text-orange-500 bg-slate-950 md:max-w-xl md:px-8 md:py-8 ">
        <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
            className="bg-slate-700 p-2 text-white font-semibold uppercase hover:bg-slate-500"
            onClick={copyPasswordToClipboard}
            >
            Copy
          </button>
        </div>

        <div className="flex justify-evenly">
          <div className="flex justify-center place-items-end gap-x-1">
            <input
              type="range"
              min={1}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length({length})</label>
          </div>

          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numInput">Number</label>
          </div>

          <div className="flex gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Character</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
