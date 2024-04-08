import React from "react";
import Copyright from "@components/Copyright";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import { ToastContainer } from "react-toastify";
import dynamic from "next/dynamic";
interface MainProps {
  childrenElement: React.ReactNode;
}
const ProviderSSR = dynamic(() => import("@components/Provider"), {
  ssr: false,
});
const Main = ({ childrenElement }: MainProps) => {
  return (
    <>
      <ToastContainer />
      <ProviderSSR>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app min-h-[calc(100vh-300px)] ">
          <Navbar />
          {childrenElement}
        </main>
        <footer>
          <Footer />
          <Copyright />
        </footer>
      </ProviderSSR>
    </>
  );
};

export default Main;
