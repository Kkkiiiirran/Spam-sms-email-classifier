import React from "react";
import "./input.css"

const CheckButton = ({ onClick, children }) => {
    // const style = {
    //     border: "None",
    //     padding: "20px 40px",
    //     backgroundImage: "linear-gradient(to right, #ffe1bc 0%, #ffcfd1  51%, #ff6e7f  100%)"
        


    // }
    return(
        <button
        onClick={onClick}
          className="btn-grad">Check</button>
    )
}

export default CheckButton;