import React from "react"
import Head from "./components/Head"
import Card from "./components/Card"
import data from "./resources/data.js"
import "./resources/index.css"



function App() {
    const cards = data.map( item => {
        return (
            <Card key={item.id} {...item}/>
        )
    })

    return(
        <div className="app">
            <Head />
            <div className="cards">
                {cards}
            </div>
        </div>
    )
}

export default App