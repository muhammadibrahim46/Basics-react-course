
import { useContext } from 'react'
import { ThemeContext } from "../ThemeContext";

function Home() {
    const {dark, setDark}=useContext(ThemeContext)
  return (
    <div>
        <h1>theme is : {dark ? "Dark" : "Light"}</h1>
        <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default Home