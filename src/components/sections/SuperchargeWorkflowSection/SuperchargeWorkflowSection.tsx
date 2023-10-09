import { FC } from "react";
import "./SuperchargeWorkflowSection.scss";
import blackListImg from "../../../assets/images/icon-blacklist.svg";
import plainTextImg from "../../../assets/images/icon-text.svg";
import previewImg from "../../../assets/images/icon-preview.svg";

const SuperchargeWorkflowSection: FC = () => {
  return (
    <section className="supercharge-workflow-section">
      <hgroup>
        <h2>Supercharge your workflow</h2>
        <p>We’ve got the tools to boost your productivity</p>
      </hgroup>
      <div className="supercharge-workflow-section__content">
        <div className="supercharge-workflow-section__content__features">
          <div className="supercharge-workflow-section__content__features__item">
            <img src={blackListImg} alt="Devices" loading="lazy" />
            <h3>Create blacklists</h3>
            <p>
              Ensure sensitive information never makes its way to your clipboard
              by excluding certain sources.
            </p>
          </div>
          <div className="supercharge-workflow-section__content__features__item">
            <img src={plainTextImg} alt="Devices" loading="lazy" />
            <h3>Plain text snippets</h3>
            <p>
              Remove unwanted formatting from copied text for a consistent look.
            </p>
          </div>
          <div className="supercharge-workflow-section__content__features__item">
            <img src={previewImg} alt="Devices" loading="lazy" />
            <h3>Sneak preview</h3>
            <p>
              Quick preview of all snippets on your Clipboard for easy access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuperchargeWorkflowSection;
