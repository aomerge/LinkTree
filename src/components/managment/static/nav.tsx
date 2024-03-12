import React from "react";
import './static.scss';
import { NavPoint } from "../../../../public/svg/nav.tsx";


/**
 * @description - This component is a static navigation element that is used in the management section of the website. It is used to navigate to different sections of the website.
 * @param text - string
 * @param img - any
 * @returns - React.FC
 * @example
 * ```tsx
 * <NavStatic text="Our Team" img={team} />
 * ```
 * 
 */
const HeaderStatic = ({ text, img }: { text?: string; img?: any }) => {
  return (
    <section className="HeaderStatic">
      <div className="HeaderStatic_img">
        <img src={img} alt="" />
      </div>
      <div className="HeaderStatic_text">
        <p>{text == undefined ? "Linktree" : text}</p>
      </div>
      <div className="HeaderStatic_btn">
        <button>
          <NavPoint />
        </button>
      </div>
    </section>
  );
};

export default HeaderStatic;
