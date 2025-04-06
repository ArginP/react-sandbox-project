import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/main.scss';
import TravelApp from "./components/TravelApp.jsx";
// import SoundPadsApp from './components/SoundPadsApp/SoundPadsApp.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <TravelApp/>
        {/*<SoundPadsApp />*/}
    </StrictMode>,
)
