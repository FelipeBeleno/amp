import React, { Fragment } from "react";
import Logo from "../assets/images/logo.png";
import ClosedIcon from "./icons/icon_closed";
export const HeaderModal = ({ direction }) => {
  return (
    <div className="w-full flex flex-col p-6">
      {direction === "horizontal" ? (
        <div>
          <div className="flex justify-end">
            <button className="text-customOrange text-2xl font-bold ">
              <ClosedIcon />
            </button>
          </div>

          <img src={Logo} alt="logo" width={200} height={200} />
        </div>
      ) : (
        <Fragment>
          <div className="flex flex-col justify-between items-end">
            <button className="text-customOrange text-2xl font-bold ">
              <ClosedIcon />
            </button>
          </div>
          <div className="flex flex-col justify-between items-center">
            <img src={Logo} alt="logo" width={300} height={300} />
          </div>
        </Fragment>
      )}
    </div>
  );
};
