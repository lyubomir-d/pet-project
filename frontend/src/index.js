import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import "regenerator-runtime";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./components/App/App";

const appRoot = document.getElementById("react-root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    appRoot
);
