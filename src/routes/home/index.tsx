import { FunctionalComponent, h } from "preact";
import * as style from "./style.css";

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <h1>BPAY Home</h1>
            <p>This is the Home component of BPAY micro frontend.</p>
            <a href="/bpay/profile">profile</a>
        </div>
    );
};

export default Home;
