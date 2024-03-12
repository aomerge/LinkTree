import React from "react";
import { NavPoint } from "../../../../public/svg/nav.tsx";
const BtnLink = ( {text, img}: {text:any,img?: any}) => {    
  return (
    <div className="BtnLink">
      <img src={img} alt="" />
      <p>{text}</p>
      <button>
        <NavPoint />
      </button>
    </div>
  );
};

export default BtnLink;
