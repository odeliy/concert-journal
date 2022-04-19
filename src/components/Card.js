import React from "react"
import pin from "../resources/images/location-pin.png"

function Card(props) {
    return (
        <div className="card">
            <img className="card__img" src={props.imageUrl} />
            <div className="card__body">
                <div className="card__location">
                    <img className="card__location-pin" src={pin} alt=""/>
                    <span className="card__location-name">{props.location}</span>
                    <a className="card__location-link" href={props.googleMapsUrl} target="__blank">View Map</a>
                </div>
                <h2 className="card__title">{props.title}</h2>
                <h4 className="card__date">{props.date}</h4>
                <p className="card__description">{props.description}</p>
            </div>
        </div>
    )
}

export default Card