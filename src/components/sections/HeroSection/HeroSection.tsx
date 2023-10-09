import { FC } from "react";
import "./HeroSection.scss";

import logo from "../../../assets/images/logo.svg";

const HeroSection: FC = () => {
  return (
    <section className="hero-section">
      <img src={logo} alt="Logo" />
      <hgroup className="hero-section_header">
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
      </hgroup>
      <button className="hero-section_button ios" type="button">
        Download for iOS
      </button>
      <button className="hero-section_button mac" type="button">
        Download for Mac
      </button>
    </section>
  );
};

export default HeroSection;
