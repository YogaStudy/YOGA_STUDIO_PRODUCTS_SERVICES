import React from "react";
import PrivacyTerms from "@components/privacy/PrivacyTerms";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Privacy Policy",
};
const Page = () => {
  return <PrivacyTerms />;
};

export default Page;
