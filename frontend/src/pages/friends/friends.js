import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import PetCard from "../../components/PetCard/PetCard";

import "./friends.scss";
import addIcon from "../../../assets/icons/add.svg";

function Friends({ getPetCollection, petCollection }) {
    useEffect(() => {
         getPetCollection();
    },[getPetCollection]);

    return (
        <>
            <Link to="/friends/add"  className={"all-friends__add"}>
                <img src={addIcon} alt="Add friend"/>
            </Link>
            <div className={"all-friends__title  island"}>
                <h1>All Friends</h1>
            </div>

            <div className={"friend-list"}>
                { petCollection && petCollection.map((pet, idx) => (
                    <PetCard pet={pet} key={idx+1} />
                )) }
            </div>
        </>
    );
}

export default Friends;
