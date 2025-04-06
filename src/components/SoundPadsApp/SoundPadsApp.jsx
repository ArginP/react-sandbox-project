import "/src/styles/sound-pads.css"
import padsData from "/src/components/SoundPadsApp/pads.js"
import Pad from "./Pad.jsx"
import { useState } from "react";

export default function SoundPadsApp() {
    const [pads, setPadList] = useState(padsData)

    function togglePad(id) {
        setPadList(prevPads => prevPads.map(

            // pad => {
            //     if (pad.id !== id) {
            //         return pad
            //     } else {
            //         return { ...pad, on: !pad.on }
            //     }
            // }

            prevPad => prevPad.id !== id ? prevPad : { ...prevPad, on: !prevPad.on }
        ))
    }

    const padElement = pads.map(pad => (
        <Pad
            key={pad.id}
            id={pad.id}
            color={pad.color}
            isOn={pad.on}
            handleClick={() => togglePad(pad.id)}
        />
    ))

    return (
        <>
            <main>
                <div className="pad-container">
                    {padElement}
                </div>
            </main>
        </>
    )
}