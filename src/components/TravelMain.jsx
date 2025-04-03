import TravelEntry from "./TravelEntry.jsx";
import Japan from "/src/assets/Japan.png"
import Australia from "/src/assets/Australia.png"
import Norway from "/src/assets/Norway.png"

export default function TravelMain() {
    return (
        <main>
            <div className="main-container">
                <TravelEntry
                    img={{
                        src: Japan,
                        alt: "Japan"
                    }}
                    country={"JAPAN"}
                    googleMapsLink={"https://maps.app.goo.gl/8pjNKZDCa7ZucWqZ7"}
                    heading="Mount Fuji"
                    dates={"12 Jan, 2023 - 24 Jan, 2023"}
                    text={"Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet)." +
                        " Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."}
                />
                <TravelEntry
                    img={{
                        src: Australia,
                        alt: "Australia"
                    }}
                    country={"AUSTRALIA"}
                    googleMapsLink={"https://maps.app.goo.gl/qAqNq3Gpr81zJ1Pi6"}
                    heading="Sydney Opera House"
                    dates={"27 May, 2023 - 8 Jun, 2023"}
                    text={"The Sydney Opera House is a multi-venue performing arts centre in Sydney. " +
                        "Located on the banks of the Sydney Harbour, it is often regarded as one of " +
                        "the 20th century's most famous and distinctive buildings."}
                />
                <TravelEntry
                    img={{
                        src: Norway,
                        alt: "Norway"
                    }}
                    country={"NORWAY"}
                    googleMapsLink={"https://maps.app.goo.gl/qjQ2m1PGZoRCisU67"}
                    heading="Geirangerfjord"
                    dates={"01 Oct, 2024 - 18 Nov, 2024"}
                    text={"The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. " +
                        "It is located entirely in the Stranda Municipality."}
                />
            </div>
        </main>
    )
}
