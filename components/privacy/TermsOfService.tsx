import React from "react";
import AccordianContainer from "../sharedComponents/AccordianContainer";
import {
  paragraphs1,
  paragraphs2,
  paragraphs3,
  paragraphs4,
  paragraphs5,
  paragraphs6,
} from "../constants/paragraphsContainer";

const TermsOfService = () => {
  return (
    <section id="termsOfService">
      <h1 className="font-bold text-xl sm:text-2xl lg:text-2xl text-center my-3">
        Terms of Service
      </h1>
      <p className="text-center">
        By accessing and using our services, you agree to be bound by the
        following terms. Please read these terms carefully before using our
        website.
      </p>
      <br />
      <ol type="1">
        <li>
          <AccordianContainer
            headText="Acceptance of Terms"
            paragraphs={paragraphs1}
          />
        </li>
        <li>
          <AccordianContainer
            headText="Use of Content"
            paragraphs={paragraphs2}
          />
        </li>
        <li>
          <AccordianContainer
            headText="User Conduct"
            paragraphs={paragraphs3}
          />
        </li>

        <li>
          <AccordianContainer
            headText="Third-Party Links"
            paragraphs={paragraphs4}
          />
        </li>
        <li>
          <AccordianContainer
            headText="Modifications"
            paragraphs={paragraphs5}
          />
        </li>
        <li>
          <AccordianContainer headText="Termination" paragraphs={paragraphs6} />
        </li>
      </ol>
    </section>
  );
};

export default TermsOfService;
