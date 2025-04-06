export default function Pad(props) {
    return (
        <button
            style={{backgroundColor: props.color}}
            className={props.isOn ? "on" : undefined}
            onClick={props.handleClick}
        ></button>
    )
}