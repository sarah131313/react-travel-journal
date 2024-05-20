import React from "react"
import dataCards from "../data"


export default function Card(props){
    
    return (
      
           <div className="card--info">
              <img src={props.imageUrl} className="image" alt={`${props.title}image`}/>
              <div className="travel--info">
                <div className="map">
                    <img src="./images/location-map-icon.png" alt="location icon" />
                    <p>{props.location}</p>
                    <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <span>{`${props.startDate} - ${props.endDate}`}</span>
                <p className="desc">{props.description}</p>
                
              </div>
              
           </div>

             
     
      
     
        
    )
}