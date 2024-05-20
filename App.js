import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import dataCards from "./data"


export default function App(){
    const CardArray = dataCards.map(item =>{
        return <Card 
                 key = {item.id}
                 {...item}
               />
         
            
    })
    return(
        <div>
          <Header />
          <section className="cards-container">
            {CardArray}
          </section>
        </div>
    )
    
}