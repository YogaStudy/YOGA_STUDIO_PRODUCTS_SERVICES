"use client";
import React, { useEffect } from "react";
interface DeleteWindowProps {
  setOpenWindow: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: (e: any) => void;
  openWindow: boolean;
}
const DeleteWindow = ({
  setOpenWindow,
  deleteUser,
  openWindow,
}: DeleteWindowProps) => {
  useEffect(() => {
    // Add/remove a class to body based on modal state
    document.body.style.overflow = openWindow ? "hidden" : "auto";

    // Cleanup effect on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openWindow]);
  return (
    <>
      {openWindow && (
        <div className="modal-overlay">
          <div className={`${openWindow ? "sidebar" : ""} modal  `}>
            <div className=" flex justify-center items-center flex-col">
              <p className="my-2 md:text-lg">
                Are you sure you want to delete your profile?
              </p>
              <div className="flex justify-center items-center my-3">
                <button
                  className="black_btn  mx-5"
                  onClick={(e) => {
                    deleteUser(e);
                    setOpenWindow(false);
                  }}
                >
                  Delete
                </button>
                <button
                  className="black_btn  mx-5"
                  onClick={() => {
                    setOpenWindow(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteWindow;
