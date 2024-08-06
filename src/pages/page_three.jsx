import React from "react";
import Doc from "../assets/images/doctor.png";
import Powered from "../assets/images/powered.png";

export const PageThree = ({ userInfo }) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <h1 className="text-2xl font-bold  text-customBlue">
        Hola {userInfo.name}!
      </h1>
      <img src={Doc} width={140} height={140} alt="imagen de doctora" />
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center  text-customBlue">
          Tu médico <br />
          te está esperando
        </h1>
      </div>

      <button className="transition-all  mt-4 px-16 bg-customOrange hover:bg-orange-400 text-white font-bold py-2  rounded-lg focus:outline-none focus:shadow-outline">
        Conectar
      </button>

      <img src={Powered} alt="powered by" width={180} height={180} />
    </div>
  );
};
