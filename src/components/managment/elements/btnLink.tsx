import React from "react";
import './elements.scss'; 
import { NavPoint } from "../../../../public/svg/nav.tsx";

const BtnLink = ({ text, img }: {text:string, img?:any}) => {
  return (
    <section className="btnLink">
      <img src={img} alt="" />
      <p>{text}</p>
      <button>
        <NavPoint />
      </button>
    </section>
  );
};

export default BtnLink;
