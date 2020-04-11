import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div>Hi, you're on homepage</div>
            <a href="/game.html">Play game</a>
        </div>
    );
}

export default Home;
