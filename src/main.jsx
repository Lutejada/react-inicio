import React from "react";
import  ReactDOM  from "react-dom/client";

//importacion de componentes
import { FirstApp } from "./FirstApp";
import {HelloWordApp} from "./hellowordapp";
import { SecondApp } from "./SecondApp";
import {CounterApp} from "./CounterApp"

//importa el archivo de css como gloval
import "./styles.css";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWordApp />
        <FirstApp />
        <SecondApp  />
        <CounterApp value = {1233333333333} />
    </React.StrictMode>


)