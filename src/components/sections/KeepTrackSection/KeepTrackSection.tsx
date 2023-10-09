import { FC } from "react";
import "./KeepTrackSection.scss";
import computerImg from "../../../assets/images/image-computer.png";

const KeepTrackSection: FC = () => {
  return (
    <section className="keep-track-section">
      <hgroup>
        <h2>Keep track of your snippets</h2>
        <p>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </hgroup>
      <div className="keep-track-section__content">
        <img src={computerImg} alt="Computer" loading="lazy"></img>
        <div className="keep-track-section__content__features">
          <div className="keep-track-section__content__features__item">
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="keep-track-section__content__features__item">
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </div>
          <div className="keep-track-section__content__features__item">
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepTrackSection;
