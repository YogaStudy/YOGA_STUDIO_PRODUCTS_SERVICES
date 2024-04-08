"use client";
import React from "react";

const Copyright = () => {
  const [footer, setFooter] = React.useState<boolean>(true);
  const toggle = () => {
    setFooter(false);
  };
  React.useEffect(() => {
    setTimeout(() => {
      setFooter(false);
    }, 6000);
  }, []);
  return (
    <>
      {footer && (
        <div className="p-3 w-[100vw]  bg-gray-700 border border-white rounded-lg text-white flex flex-wrap justify-around items-center">
          <p>
            © Copyright [2024] [Yoga Studio]. Tutti i materiali presenti su
            questo sito Web sono protetti dalla legge sul copyright. L'uso non
            autorizzato dei contenuti di questo sito senza il permesso
            dell'autore è severamente vietato. Per ulteriori informazioni &nbsp;
            <span>
              <i className="text-white">
                <u>
                  <a href="./privacy" target="_blank">
                    click here.
                  </a>
                </u>
              </i>
            </span>
          </p>

          <button
            className="px-2 mt-1  bg-gray-200 text-black rounded-sm"
            onClick={toggle}
          >
            Ok
          </button>
        </div>
      )}
    </>
  );
};

export default Copyright;
