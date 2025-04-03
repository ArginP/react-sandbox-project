import TravelEntry from "./TravelEntry.jsx";
import travelData from "./travelData.js";

export default function TravelMain() {

    const travelEntry = travelData.map((entry) => {
        return <TravelEntry
            key={entry.id}
            {...entry}
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
