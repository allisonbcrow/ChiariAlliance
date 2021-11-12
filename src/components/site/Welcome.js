import React from "react";
import {Row} from "reactstrap";

const Welcome = () => {
    const firstName = localStorage.getItem("firstName");
    return (
            <div>
                <h1>Welcome to Chiari Alliance {firstName}!</h1>
            </div>
    );
};

 export default Welcome;