import React from "react"
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import Data from "./data.js"

export default function App() {
    const places = Data.map( (item) => {
        return (
            <Body 
                key={item.id}
                item={item} 
            />
        )
    } )
    return (
        <>
            <Navbar />
            <section className="places">
                {places}
            </section>
        </>
    )
}