import React from "react";
import FriendForm from "../../components/FriendForm/FriendForm";

export function FriendAdd() {
    return (
        <div className={"page"}>
            <div className="container">
                <h1>Add new friend</h1>

                <FriendForm />
            </div>
        </div>
    );
}
