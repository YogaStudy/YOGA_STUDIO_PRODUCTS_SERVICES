import React from "react";
import { Metadata } from "next";
import Posts from "@components/posts/Posts";

export const metadata: Metadata = {
  title: "Posts",
  description: "I nostri Post recenti",
};
const Page = () => {
  return <Posts />;
};

export default Page;
