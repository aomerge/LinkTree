import React from "react";
import "./elements.scss";
import { NavPoint } from "../../../../public/svg/nav.tsx";

const About = ({
  title,
  text,
  img,
}: {
  title?: string;
  text?: string;
  img?: any;
}) => {
  return (
    <section className="About">
      <div className="About_img">
        <img src={img} alt="" />
      </div>
      <div className="About_text">
        <h1>{
          title === undefined ? "About" : title
          }</h1>
        <p>
          {
            text === undefined ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque." : text
          }
        </p>
      </div>
    </section>
  );
};

export default About;
