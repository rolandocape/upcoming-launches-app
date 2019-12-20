import React from "react";
import "./styles/style.scss";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import LaunchDetails from "./components/LaunchDetails/LaunchDetails";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/launches/:id" component={LaunchDetails}/>
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;
