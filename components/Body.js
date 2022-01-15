import React from "react"

export default function Body(props) {
    return(
        <section className="row">
            <section className="places">
            <img className="places--img" src={props.item.imageUrl} alt={`${props.item.title} Image`} />
            </section>
            <section className="places">
                <h5 className="places--location"><img src="../images/Fill219.png" alt="Path Symbol"/>{props.item.location}</h5>
                <h6 className="places--google"><a href={props.item.googleMapsUrl}>View on Google Maps</a></h6>
                <h1 className="places--title">{props.item.title}</h1>
                <p className="places--date"><b>{props.item.startDate} - {props.item.endDate}</b></p>
                <p className="places--description">{props.item.description}</p>
            </section>
        </section>
    )
}