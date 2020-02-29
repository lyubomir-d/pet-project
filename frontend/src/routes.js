import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as Pages from "./pages";

export default function Routes() {
    return (
        <Switch>
            <Route path="/sign-up">
                <Pages.signUp />
            </Route>

            <Route path="/sign-in">
                <Pages.signIn />
            </Route>

            <Route path="/sign-out">
                <Pages.signIn />
            </Route>

            <Route path="/about">
                <Pages.About />
            </Route>

            <Route path="/friends">
                <Switch>
                    <Route path="/friends/add">
                        <Pages.FriendAdd />
                    </Route>
                    <Route path="/friends/">
                        <Pages.Friends />
                    </Route>
                    <Route>
                        <Redirect to="/friends/" />
                    </Route>
                </Switch>
            </Route>

            <Route path="/contacts">
                <Pages.Contacts />
            </Route>

            <Route path="/">
                <Pages.Main />
            </Route>
        </Switch>
    );
}
