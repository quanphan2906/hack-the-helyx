import React from "react";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

function Navbar() {
    return (
        <nav className="nav-wrapper">
            <div className="nav-container">
                <div className="brand-name">Trash Collecting</div>
                <SignedInLinks />
                <SignedOutLinks />
            </div>
        </nav>
    );
}

export default Navbar;
