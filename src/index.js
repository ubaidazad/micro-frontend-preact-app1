import "./style/index.css";
import App from "./components/app.tsx";

import { render } from 'preact';


window.renderBPAY = (containerId, history) => {
    return render(<App history={history} />, document.getElementById(containerId));
}
// export default App;


window.unmountBPAY = (containerId) => {
    console.log('unmount: ', containerId)
}