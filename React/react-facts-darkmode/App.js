import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    const [darkMode, setDarkmode] = React.useState(true);

    function toggleDarkMode(){
        setDarkmode(prevMode => !prevMode)

    }

    return (
        <div className="container">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}