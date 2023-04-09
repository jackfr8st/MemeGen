import React from "react";
import MemeData from "../MemeData";

const Main = function(){
    let url

    function handleOnClick(){
        const randomMeme = MemeData.data.memes[Math.floor(Math.random()*(MemeData.data.memes.length))]
        url = randomMeme.url
        console.log(url)
    }
    return(
        
        // We didnt follow this bcoz we'll have to deal with the states which is simpler in the forms
        // <div className="main-container">
        //     <div >
        //         <input type="text" name="text1" id="txt1" className="input"/>
        //         <input type="text" name="text2" id="txt2" className="input"/>
        //     </div>
        //     <input type="button" value={`Get a new meme image 🖼️`} id="button" className="karla_bold" />
        //     <div className="frame">
        //         <div style={{backgroundColor: "#C37CDC",height: 400,marginTop: 50, borderRadius: 7}}></div>
        //     </div>
        // </div>

        <main>
            <div className="form">
                <input type={"text"} className="form-input karla_light" placeholder="Top text"/>
                <input type={"text"} className="form-input karla_light" placeholder="Bottom text"/>
                <button className="form-button karla_bold" onClick={handleOnClick}>Get a new meme image 🖼️</button>
            </div>
        </main>
    )
}

export default Main;