import React from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";

const PrivacyTerms = () => {
  return (
    <>
      <div className="bg-black text-white w-full">
        <h1 className="text-3xl mt-10 text-center">Privacy Policy</h1>
        <div className="flex justify-around items-center text-lg my-5">
          <h2>
            <a href="#termsOfService">Terms of Service</a>
          </h2>
          <h2>
            <a href="#privacyPolicy">Privacy statement</a>
          </h2>
        </div>
      </div>
      <div className="my-8 w-[60%]">
        <p className="lg:text-lg">Last updated: 26/Jan/2024</p>
        <p className="lg:text-lg my-2">We respect your privacy.</p>
        <p className="lg:text-lg mb-2">
          Welcome to Yoga Studio! These Terms of Service govern your use of our
          website, located at www.learnitalian.com, and any related services
          provided by Yoga Studio. By accessing or using our website and
          services, you agree to be bound by these Terms of Service. Please read
          them carefully before using our website.
        </p>
        <p className="lg:text-lg">
          From time to time we may change our policy and practices. We will
          notify you of any material changes to this policy as required by law.
          We will also post an updated copy on our website. Please check our
          site periodically for updates.
        </p>
        <br />
        <TermsOfService />
        <br />
        <PrivacyPolicy />
        <br />
        <p className="text-center">
          By using Yoga Studio, you agree to the terms and practices described
          in these Terms of Service and Privacy Policy. If you do not agree with
          these terms, please refrain from using our website. Thank you for
          choosing Yoga Studio as your healthy-buddy. Happy practising!
        </p>
      </div>
    </>
  );
};

export default PrivacyTerms;
