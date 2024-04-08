import React from "react";
import Benefits from "@components/Benefits";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Benefici",
  description:
    "Scopri i benefici di una pratica regolare di yoga e meditazione.",
};
const Page = () => {
  return <Benefits />;
};

export default Page;
