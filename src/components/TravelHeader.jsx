import Globe from "/src/assets/globe.svg"

export default function TravelHeader() {
    return (
        <header className="travel-header">
            <nav className="travel-nav">
                <img className="header-logo" src={Globe} alt="globe logo"/>
                <span className="header-span">my travel journal.</span>
            </nav>
        </header>
    )
}