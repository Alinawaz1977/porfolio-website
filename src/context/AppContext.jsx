import { createContext } from "react";
import { useState } from "react";

export const AppContext = createContext({})
export const AppContextProvider = (props) => {
    const [testing, settesging] = useState("jsut testing")
    const handleScroll = (id) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({behavior:"smooth"})
        }
    }
    const value = {
        handleScroll
    }
    return (
        <AppContext.Provider value={value} >
            {props.children}
        </AppContext.Provider>
    )
}