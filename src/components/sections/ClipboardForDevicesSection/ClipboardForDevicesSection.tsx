import { FC } from "react";
import "./ClipboardForDevicesSection.scss";

const ClipboardForDevicesSection: FC = () => {
  return (
    <section className="clipboard-for-devices-section">
      <hgroup>
        <h2>Clipboard for iOS and Mac OS</h2>
        <p>
          Available for free on the App Store. Download for Mac or iOS, sync
          with iCloud and you’re ready to start adding to your clipboard.
        </p>
      </hgroup>
      <button
        className="clipboard-for-devices-section_button ios"
        type="button"
      >
        Download for iOS
      </button>
      <button
        className="clipboard-for-devices-section_button mac"
        type="button"
      >
        Download for Mac
      </button>
    </section>
  );
};

export default ClipboardForDevicesSection;
