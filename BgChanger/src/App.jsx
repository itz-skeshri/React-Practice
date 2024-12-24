import { useState } from "react";

function App() {
  const [color, setColor] = useState("#334155");

  return (
    <div
      className="w-full h-screen duration-200 flex justify-center"
      style={{ backgroundColor: color }}
    >
      <div className="bg-white flex flex-wrap justify-center fixed bottom-12 py-2 px-3 rounded-lg shadow-xl gap-3">

        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "green"}}onClick={()=>setColor("green")}>green</button>
        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "lavender"}}onClick={()=>setColor("lavender")}>Lavender</button>
        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "pink"}}onClick={()=>setColor("pink")}>Pink</button>
        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "black"}}onClick={()=>setColor("black")}>Black</button>
        <button className="px-2 py-2 rounded-xl text-white shadow-lg mx-2" style={{backgroundColor: "violet"}}onClick={()=>setColor("violet")}>Violet</button>
        
      </div>
    </div>
  );
}

export default App;
