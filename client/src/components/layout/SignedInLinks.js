import React from "react";

function SignedInLinks({ role }) {
    return (
        <div className="nav-links">
            {role === "host" ? (
                <>
                    <div>Create new event</div>
                    <div>Your events</div>
                </>
            ) : (
                <>
                    <div>Play games</div>
                </>
            )}
            {/* <div className="initials">
                <img
                    src="https://babylonbee.com/img/articles/article-906.jpg"
                    alt="no avatar display"
                />
            </div> */}
            <div className="buttons"></div>
        </div>
    );
}

export default SignedInLinks;
