import { useEffect, useState } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = ()=>{
    setThemeMode("light");
  }
  const darkTheme = ()=>{
    setThemeMode("dark");
  }

  useEffect(()=>{
    const htmlElem = document.querySelector("html");
    htmlElem.classList.remove("light","dark");
    htmlElem.classList.add(themeMode);
  },[themeMode])

  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
        </div>
        <div className="w-full max-w-sm mx-auto">
          <Card />
        </div>
      </div>
    </div>
    </ThemeProvider>
    
  );
}
