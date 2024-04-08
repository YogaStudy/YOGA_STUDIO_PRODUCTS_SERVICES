import React from "react";
import Contact from "@components/Contact";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contattaci",
  description: "Contattaci per qualsiasi informazione e dettagli",
};
const Page = () => {
  return <Contact />;
};

export default Page;
