import React from "react";
import UserMenu from "../UserMenu";

import "./Header.scss";

export default function Header() {
    return (
        <header className={"header shadow"}>
            <div className={"container header__inner"}>
                <div className={"header__logo"}>

                </div>

                <UserMenu />
            </div>
        </header>
    );
}
