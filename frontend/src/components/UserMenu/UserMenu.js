import React, { useState } from "react";
import { Link } from "react-router-dom";
import { listItems } from "./index";

import "./UserMenu.scss";
import userLogo from "../../../assets/icons/user.svg";


function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={"user-menu"}>
            <button className={"btn user-menu__btn"} onClick={() => setIsOpen(!isOpen)}>
                <img src={userLogo} alt="user menu"/>
            </button>

            { isOpen &&
            <ul className={"shadow user-menu__list"}>
                { listItems.map((item, key) =>
                    <li className={"user-menu__item"} key={key}>
                        <Link className={"user-menu__link"} to={item.link}>
                            { item.icon !== "" ? (
                                <img className={"user-menu__icon"} src={item.icon} alt={item.name} />
                            ) : (
                                ""
                            )}
                            {item.name}
                        </Link>
                    </li>
                )}
            </ul>
            }
        </div>

    );
}

export default UserMenu;
