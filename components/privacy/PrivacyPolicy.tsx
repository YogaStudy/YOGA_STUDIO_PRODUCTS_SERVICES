import React from "react";
import AccordianContainer from "../sharedComponents/AccordianContainer";
import {
  paragraphs10,
  paragraphs11,
  paragraphs12,
  paragraphs13,
  paragraphs7,
  paragraphs8,
  paragraphs9,
} from "../constants/paragraphsContainer";
const PrivacyPolicy = () => {
  return (
    <section id="privacyPolicy">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-2xl text-center my-3">
        Privacy Statement
      </h1>
      <h2 className="text-center">
        At Yoga Studio, we are committed to protecting your privacy and the
        confidentiality of your personal information. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you use our website. By accessing or using Yoga Studio, you consent
        to the practices described in this Privacy Policy.
      </h2>
      <br />
      <ol type="1">
        <li>
          <AccordianContainer
            headText="Information We Collect"
            paragraphs={paragraphs7}
          />
        </li>
        <li>
          <AccordianContainer
            headText="Use of Information"
            paragraphs={paragraphs8}
          />
        </li>
        <li>
          <AccordianContainer
            headText="Disclosure of Information"
            paragraphs={paragraphs9}
          />
        </li>
        <li>
          <AccordianContainer headText="Cookies" paragraphs={paragraphs10} />
        </li>
        <li>
          <AccordianContainer headText="Security" paragraphs={paragraphs11} />
        </li>
        <li>
          <AccordianContainer
            headText="Children's Privacy"
            paragraphs={paragraphs12}
          />
        </li>
        <li>
          <AccordianContainer headText="Contact Us" paragraphs={paragraphs13} />
        </li>
      </ol>
    </section>
  );
};

export default PrivacyPolicy;
