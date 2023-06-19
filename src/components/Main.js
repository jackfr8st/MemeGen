import React from "react";
import MemeData from "../MemeData";
import imgnotavail from "../img/imgna.png"

const Main = function(){
    
    const [meme,setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: imgnotavail
        }
    ); 

    const [allMemeImages,setAllMemeImages] =React.useState(MemeData)

    let url

    function handleOnClick(){
        const memeArr = allMemeImages.data.memes //this gives the array
        const randomNumber = Math.floor(Math.random()*memeArr.length) //Math.random gives a random number between 0(inclusive) and 1(exclusive)
        url = memeArr[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
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

        // when you have a button inside a form element, it tends to submit the form and refresh the page unless stopped
        // so in case you if ur button as no role in submission of the inputs of the form you can simply use div instead
        <main>
            <div className="form">
                <input type={"text"} className="form-input karla_light" placeholder="Top text"/>
                <input type={"text"} className="form-input karla_light" placeholder="Bottom text"/>
                <button className="form-button karla_bold" onClick={handleOnClick}>Get a new meme image 🖼️</button>
            </div>
            <img src={meme.randomImage} alt="Meme" className="picture-frame"/>
        </main>
        //the above lines of code doesnt refresh the page as the elements input and button are not in the form element 
    )
}

export default Main;