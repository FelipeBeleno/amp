import React, { useEffect, useState } from "react";

import { HeaderModal } from "./header_modal";
export const Modal = ({ isOpen, children, direction }) => {
  const [showModal, setShowModal] = useState(false);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      setTimeout(() => setAnimation(true), 10);
    } else {
      setAnimation(false);
      setTimeout(() => setShowModal(false), 300);
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${
        animation ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-11/12 xs:w-full sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto bg-customGray rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 ${
          animation ? "scale-100" : "scale-95"
        }`}
      >
        <HeaderModal direction={direction} />
        <div className="flex flex-col items-center justify-center bg-gradient-to-tr from-white pb-20">
          {children}
        </div>
      </div>
    </div>
  );
};
