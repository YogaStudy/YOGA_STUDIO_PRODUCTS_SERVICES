import React from "react";
import Journal from "@components/Journal";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Rivista",
  description: "Scopri il nostro team e le nostre storie.",
};
const Page = () => {
  return <Journal />;
};

export default Page;
