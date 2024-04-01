import React from "react";

function SignInButton() {
    return (
        <button className="sign-in-button" onClick={() => window.location.href = '/sign-in'}>Sign In</button>
    );
}

export default SignInButton;