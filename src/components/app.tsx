import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Home from "../routes/home";
import Profile from "../routes/profile";

export interface AppProps {
    history: any;
}



const App: FunctionalComponent<AppProps> = (props) => {
    let currentUrl: string;
    const handleRoute = (e: RouterOnChangeArgs) => {
        currentUrl = e.url;
    };

    return (
        <div id="bpay-app">
            <Router onChange={handleRoute}>
                <Route path="/bpay" component={Home} />
                <Route path="/bpay/profile" component={Profile} />
            </Router>
        </div>
    );
};

export default App;
