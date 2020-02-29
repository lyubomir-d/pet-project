import React from "react";
import "../../../assets/theme/global.scss";

import "./PetCard.scss"

export default function PetCard({ pet }) {
    return (
        <div className={"island pet-card"}>
            <h1 className={"pet-card__name"}>{ pet.name }</h1>
            <div className={"pet-card__desc"}>
                <p>{ pet.desc }</p>
            </div>
            <span className={"pet-card__birth"}>
                { pet.birthDate }
            </span>
        </div>
    );
}
