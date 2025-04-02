import '/src/styles/AppHeader.scss'

export default function AppHeader() {
    return (
        <header className="app-header">
            <nav className={"nav"}>
                <img className="header-logo" src={"./src/assets/react.svg"} alt="React logo"/>
                <span className="header-span">ReactFacts</span>
            </nav>
        </header>
    )
}