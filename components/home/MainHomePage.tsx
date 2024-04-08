import React from "react";
import Feed from "@components/home/Feed";
import Hero from "@components/home/Hero";

const MainHomePage = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col">
      <Hero />
      <Feed />
    </section>
  );
};

export default MainHomePage;
