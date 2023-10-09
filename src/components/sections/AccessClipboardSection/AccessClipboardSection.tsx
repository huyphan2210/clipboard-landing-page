import { FC } from "react";
import "./AccessClipboardSection.scss";
import devicesImg from "../../../assets/images/image-devices.png";

const AccessClipboardSection: FC = () => {
  return (
    <section className="access-clipboard-section">
      <hgroup>
        <h2>Access Clipboard anywhere</h2>
        <p>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
      </hgroup>
      <div className="access-clipboard-section__content">
        <img src={devicesImg} alt="Devices" loading="lazy"></img>
      </div>
    </section>
  );
};

export default AccessClipboardSection;
