import { FC } from "react";
import "./CompanySection.scss";

import googleLogo from "../../../assets/images/logo-google.png";
import hpLogo from "../../../assets/images/logo-hp.png";
import ibmLogo from "../../../assets/images/logo-ibm.png";
import microsoftLogo from "../../../assets/images/logo-microsoft.png";
import vectorLogo from "../../../assets/images/logo-vector-graphics.png";

const CompanySection: FC = () => {
  return (
    <section className="company-section">
      <img src={googleLogo} alt="Google" loading="lazy"></img>
      <img src={ibmLogo} alt="IBM" loading="lazy"></img>
      <img src={microsoftLogo} alt="Microsoft" loading="lazy"></img>
      <img src={hpLogo} alt="HP" loading="lazy"></img>
      <img src={vectorLogo} alt="Vector Graphics" loading="lazy"></img>
    </section>
  );
};

export default CompanySection;
