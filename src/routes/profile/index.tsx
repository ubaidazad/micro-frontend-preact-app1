import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import * as style from "./style.css";
import dispatchEvent, { eventsToDispatch } from '../../utils/events';
interface Props {
    user: string;
}

const Profile: FunctionalComponent<Props> = (props: Props) => {
    const { user } = props;
    const [time, setTime] = useState<number>(Date.now());
    const [count, setCount] = useState<number>(0);
    const [color, setColor] = useState<string>('black');

    (window as any).subscribeHost('HOST_THEME_CHANGED', (e: any) => {setColor(e.detail.color)})

    // gets called when this route is navigated to
    useEffect(() => {
        const timer = window.setInterval(() => setTime(Date.now()), 1000);

        // gets called just before navigating away from the route
        return () => {
            clearInterval(timer);
        };
    }, []);

    // update the current time
    const increment = () => {
        const updatedCount = count + 1;
        setCount(updatedCount);
        dispatchEvent(eventsToDispatch.MF_APP1_PROFILE_TIMER_CLICKED, {count: updatedCount})
    };

    return (
        <div class={style.profile} style={`color: ${color}`}>
            <h1>Bpay Profile: {user}</h1>
            <p>This is the user profile for a user named {user}.</p>

            <div>Current time: {new Date(time).toLocaleString()}</div>

            <p>
                <button style={'background:#00B9F5; border: none'} onClick={increment}>Click Me</button> Clicked {count}{" "}
                times.
            </p>
        </div>
    );
};

export default Profile;
