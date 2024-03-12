import React from "react";
import "./elements.scss";
import { NavPoint } from "../../../../public/svg/nav.tsx";

const Banner = ({ text, img }: { text?: string; img?: any }) => {
  return (
    <section className="Banner_Element">
        {
            img === undefined ? <p>{text}</p> : <img src={img} alt="" />
        }                
    </section>
  );
};

export default Banner;
