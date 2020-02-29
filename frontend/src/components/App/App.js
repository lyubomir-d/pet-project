import React from "react";
import Routes from "../../routes";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import MainNav from "../MainNav";

import "./App.scss";

export default function App() {
    return (
        <>
            <Aside />
            <MainNav/>
            <div className={"content"}>
                <Header />
                <main className={"main"}>
                    <Routes />
                </main>
            </div>
        </>
    );
};
