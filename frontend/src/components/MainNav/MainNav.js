import React from "react"
import { Link } from "react-router-dom";

import news from "../../../assets/icons/news.svg";
import about from "../../../assets/icons/pawprint.svg";
import friends from "../../../assets/icons/dog.svg";
import contacts from "../../../assets/icons/placeholder.svg";

import "./MainNav.scss";

export default function MainNav () {
    return (
    <nav className={"shadow main-nav"}>
        <ul className={"main-nav__list"}>
            <li className={"main-nav__item"}>
                <Link className={"main-nav__link"} to={"/"}>
                    <img src={news} alt={"News"} />
                    { document.body.clientWidth > 932 &&
                        "News"
                    }
                </Link>
            </li>
            <li className={"main-nav__item"}>
                <Link className={"main-nav__link"} to={"/about"}>
                    <img src={about} alt={"About"} />
                    { document.body.clientWidth > 932 &&
                        "About"
                    }
                </Link>
            </li>
            <li className={"main-nav__item"}>
                <Link className={"main-nav__link main-nav__link--main"} to={"/friends"}>
                    <img src={friends} alt={"Friends"} />
                    { document.body.clientWidth > 932 &&
                        "Friends"
                    }
                </Link>
            </li>
            <li className={"main-nav__item"}>
                <Link className={"main-nav__link"} to={"/contacts"}>
                    <img src={contacts} alt={"Contacts"} />
                    { document.body.clientWidth > 932 &&
                        "Contacts"
                    }
                </Link>
            </li>
            <li className={"main-nav__item"}>
                <Link className={"main-nav__link"} to={"/"}>
                    <img src={news} alt={"news"} />
                    { document.body.clientWidth > 932 &&
                        "News"
                    }
                </Link>
            </li>
        </ul>
    </nav>
    );
};
