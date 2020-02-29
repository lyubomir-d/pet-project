import React from "react";
import SignInForm from "../../components/SignInForm/SignInForm";


export function signIn() {
    return (
        <div className={"auth-wrapper"}>
            <h1>Auth</h1>

            <SignInForm />
        </div>
    );
}
