import {Fragment} from "react";
import '../styles/OrderedList.scss';

const OrderedList = () => {
    return (
        <Fragment>
            <div className="container">
                <ol>
                    <li>I like React</li>
                    <li>React will be my main stack on my new job</li>
                    <li>I'm really exited for my new job!</li>
                    <li>It's going to be my first job in frontend</li>
                    <li>Let's go</li>
                </ol>
            </div>
        </Fragment>
    )
}

export default OrderedList;