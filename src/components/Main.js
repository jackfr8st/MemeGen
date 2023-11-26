import React from "react";
import MemeData from "../MemeData";
import imgnotavail from "../img/imgna.png";

const Main = function () {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: imgnotavail, //by default this will be the image that will be pasted
  });

  const [allMeme, setallMeme] = React.useState([]);

  console.log(meme);

  let url;

  function handleOnClick() {
    // const memeArr = allMeme.data.memes //this gives the array
    const randomNumber = Math.floor(Math.random() * allMeme.length); //Math.random gives a random number between 0(inclusive) and 1(exclusive)
    url = allMeme[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
      //now whenver we click on the button, a random url should be created which is the url of the new img
      //since, now we're using the object of the meme, we change the randomImage property by spreading the past properties
      //and adding the changed property to the end like above
    }));
  }

  function handleChange(event) {
    const { type, name, value } = event.target;

    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  React.useEffect(() => {
    // first approach
    /*
        return fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then( Data => setallMeme(Data.data.memes))

        */

    //second approach (using async)

    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setallMeme(data.data.memes);
    }

    getMemes();
  }, []);

  return (
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
        <input
          type="text"
          className="form-input karla_light"
          placeholder="Top text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />

        <input
          type="text"
          className="form-input karla_light"
          placeholder="Bottom text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button karla_bold" onClick={handleOnClick}>
          Get a new meme image 🖼️
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} alt="Meme--image" className="meme-image" />
        <h2 className="meme-text top">{meme.topText}</h2>
        <h2 className="meme-text bottom">{meme.bottomText}</h2>
      </div>
    </main>
    //the above lines of code doesnt refresh the page as the elements input and button are not in the form element
  );
};

export default Main;
