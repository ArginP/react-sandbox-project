import Marker from "/src/assets/marker.svg"

export default function TravelEntry(props) {
    return (
        <>
            <article className="travel-entry">
                <div className="entry-image-container">
                    <img className="entry-image" src={props.img.src} alt={props.img.alt}/>
                </div>
                <div className="travel-entry-content">
                    <div className="travel-entry-location-container">
                        <img className="travel-entry-location-marker" src={Marker} alt="marker"/>
                        <span className="travel-entry-location-country">{props.country}</span>
                        <a href={props.googleMapsLink} className="travel-entry-location-link">View on Google Maps</a>
                    </div>
                    <h2 className="travel-entry-heading">
                        {props.heading}
                    </h2>
                    <span className="travel-entry-dates">
                    {props.dates}
                </span>
                    <p className="travel-entry-text">
                        {props.text}
                    </p>
                </div>
            </article>
        </>
    )
}
//googleMapsLink