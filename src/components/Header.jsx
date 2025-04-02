import '../styles/Header.scss'

function Header() {

    return (
        <>
            <div className={'header'}>
                <img src={'./src/assets/react.svg'} alt="react logo"/>
                <h2>This is a custom header</h2>
            </div>
            <nav className={'nav'}>
                <ul className={'nav-list'}>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}

export default Header
