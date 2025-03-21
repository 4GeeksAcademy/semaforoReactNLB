import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./component/TrafficLight.jsx";
import "../styles/index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);