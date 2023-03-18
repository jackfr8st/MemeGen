import React from "react";
import troll_icon from "../img/troll.png"

const Navbar = function(){
    return(
        <nav>
            <img src={troll_icon} alt="Troll face icon"/>
            <h1 className="karla_bold">Meme Generator</h1>
        </nav>
    )
}

export default Navbar;