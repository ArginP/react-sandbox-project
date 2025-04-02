import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './styles/main.scss';
import Page from "./components/Page.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Page />
    </StrictMode>,
)
