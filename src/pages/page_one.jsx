import React, { Fragment, useState } from "react";
import Doc from "../assets/images/doctor.png";
import { axiosInstance } from "../config/axiosInstance";

export const PageOne = ({ setPageRender, setUserInfo }) => {
  const [numberId, setNumberId] = useState("");
  const [errorNumberId, setErrorNumberId] = useState(false);

  const handleInputChange = (target) => {
    setErrorNumberId(false);
    setNumberId(target.value);
  };

  async function handleSubmit() {
    if (numberId.trim().length === 0) {
      setErrorNumberId(true);
      return;
    }
    if (numberId === "0964360978") {
      const { data } = await axiosInstance.post(`?numberId=0964360978`);
      const randomUser = Math.floor(Math.random() * 10);
      setUserInfo(data[randomUser]);
      setPageRender(3);
      return;
    }

    setPageRender(2);
  }

  return (
    <Fragment>
      <img src={Doc} width={220} height={220} alt="imagen de doctora" />
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center text-customBlue">
          Asistencia Médica Virtual Inmediata
        </h1>
      </div>
      <div className="w-full max-w-xs">
        <input
          value={numberId}
          placeholder="Número de identificación"
          type="number"
          className={`placeholder-customBlue text-center shadow appearance-none border ${
            errorNumberId ? "border-red-700" : "border-gray-300"
          } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight ${
            errorNumberId ? "focus:border-red-700" : "focus:border-customBlue"
          }`}
          onChange={(e) => handleInputChange(e.target)}
        />
        {errorNumberId && (
          <p className="text-red-700 text-center">
            El campo no puede estar vacío
          </p>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="transition-all mt-4 px-16 bg-customOrange hover:bg-orange-400 text-white font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline"
      >
        Ingresar
      </button>
    </Fragment>
  );
};
