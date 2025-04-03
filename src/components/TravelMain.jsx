import TravelEntry from "./TravelEntry.jsx";
import travelData from "./travelData.js";

export default function TravelMain() {

    const travelEntry = travelData.map((entry) => {
        return <TravelEntry
            key={entry.id}
            img={entry.img}
            country={entry.country}
            googleMapsLink={entry.googleMapsLink}
            heading={entry.heading}
            dates={entry.dates}
            text={entry.text}
        />
    });

    return (
        <main>
            <div className="main-container">
                {travelEntry}
            </div>
        </main>
    )
}
