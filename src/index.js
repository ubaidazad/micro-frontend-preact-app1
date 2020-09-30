import "./style/index.css";
import App from "./components/app.tsx";

import { render } from 'preact';
import { eventsToDispatch } from "./utils/events";


window.renderBPAY = (containerId, history) => {
    return render(<App history={history} />, document.getElementById(containerId));
}

window.unmountBPAY = (containerId) => {
    console.log('unmount: ', containerId)
}

window.subscribeBPAY = (eventName, eventHandler) => {
    window.addEventListener(eventName, eventHandler);
}

window.unsubscribeBPAY = (eventName, eventHandler) => {
    window.removeEventListener(eventName, eventHandler, false);
}

window.customEventsBPAY = eventsToDispatch;