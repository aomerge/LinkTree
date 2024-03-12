import React from "react";
import "./elements.scss";
import { Facebook, Instagram, Twitter, Linkedin } from "../../../../public/svg/icons.tsx";

const SocialMedia = ({ text, img }: { text?: string; img?: any }) => {
  return (
    <section className="socialMedia">
      <nav>        
        <a href="">
          <Instagram />
        </a>
        <a href="">
          <Twitter />
        </a>
        <a href="">
          <Linkedin />
        </a>
      </nav>
    </section>
  );
};

export default SocialMedia;
