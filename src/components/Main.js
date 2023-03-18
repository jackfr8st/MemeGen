import React from "react";

const Main = function(){
    return(
        <div className="main-container">
            <div >
                <input type="text" name="text1" id="txt1" className="input"/>
                <input type="text" name="text2" id="txt2" className="input"/>
            </div>
            <input type="button" value={`Get a new meme image 🖼️`} id="button" className="karla_bold" />
            <div className="frame">
                <div style={{backgroundColor: "#C37CDC",height: 400,marginTop: 50, borderRadius: 7}}></div>
            </div>
        
        
        </div>
    )
}

export default Main;