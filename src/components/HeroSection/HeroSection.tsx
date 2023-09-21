import { FC } from "react";
import "./HeroSection.scss";

const HeroSection: FC = () => {
  return (
    <section className="hero-section">
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you 
        copy. Instantly access your clipboard on all your devices.
      </p>
    </section>
  );
};

export default HeroSection;
