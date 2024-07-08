import React from "react";
import "./input.css"

const InputBox = ({value,onChange}) => {
    

    const inputstyle = {
        border:"None",
        // height: "100px",
        padding:"20px 20px 100px 20px",
        // paddingBottom:"100px",
        // linehHeight: "10em",
        width:"400px",
        backgroundColor: "rgba(255, 255, 255, 0.54)",
        outline:"0",
        borderRadius:"20px"
        
    }
    return (
        
        <div>
            <textarea 
            value={value}
            onChange={onChange}
            style={inputstyle} className="inputBox" type="text" placeholder="Type your message here"/>
            
            {/* <h1>The floating label</h1>
<div class="user-input-wrp">
  <br/>
  <input type="text" class="inputText" required/>
  <span class="floating-label">Your email address</span>
</div> */}

        </div>
    )
}

export default InputBox;