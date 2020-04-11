import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";

function App() {
    const reload = () => window.location.reload();
    return (
        <div className="app">
            <Navbar />
            <BrowserRouter>
                <Route path={["/", "/home"]} component={Home} />
                <Route path="/game.html" onEnter={reload} />
            </BrowserRouter>
        </div>
    );
}

export default App;
