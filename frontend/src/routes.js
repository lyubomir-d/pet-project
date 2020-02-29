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

            <Route exact path="/friends/">
                <Pages.Friends />
            </Route>

            <Route path="/friends/add">
                <Pages.FriendAdd />
            </Route>

            <Route path="/contacts">
                <Pages.Contacts />
            </Route>

            <Route exact path="/">
                <Pages.Main />
            </Route>
        </Switch>
    );
}
