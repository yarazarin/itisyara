import React from "react";
import "./Joinimg.css";
import leftImage from "../../img/left-.png";
import rightImage from "../../img/right-.png";

const Joinimg = () => {
    return (
        <div className="images-container">
            <img src={leftImage} alt="left" className="left-image" />
            <img src={rightImage} alt="right" className="right-image" />
        </div>
    );
};

export default Joinimg;
