import React, { Fragment } from "react";
import { useForm } from "../hooks/useForm";
import { validate } from "../helpers/validation";
import AlertIcon from "../components/icons/icon_alert";

export const PageTwo = ({ setPageRender, setUserInfo }) => {
  const [formValues, errors, cambioForm, reset, validateForm] = useForm(
    {
      phone: "",
      name: "",
      lastname: "",
      email: "",
      agreeToTerms: false,
    },
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setUserInfo({
      name: formValues.name,
      surname: formValues.lastname,
      phone: formValues.phone,
      email: formValues.email,
      numberId: Math.floor(Math.random() * (1 + 100000) + 1),
      company: 130,
      country: "BR",
      pat_tipobase: "",
      created: new Date(),
      meetings: [],
    });
    setPageRender(3);
    reset();
  };

  return (
    <Fragment>
      <h1 className="text-2xl font-bold text-center text-customBlue">
        Asistencia Médica Virtual Inmediata
      </h1>
      <br />
      <form
        onSubmit={handleSubmit}
        className="mx-4 sm:mx-8 md:mx-16 lg:mx-32 px-4 sm:px-8 md:px-16 lg:px-30 flex flex-col gap-4"
        style={{ width: "100%" }}
      >
        <div className="flex flex-col bg-yellow-50 rounded-xl h-auto">
          <div className="h-2 w-full bg-yellow-400 rounded-t-xl"></div>
          <div className="flex justify-center gap-2 py-2">
            <AlertIcon color="#e3a008" />
            <p className="text-center text-gray-400">
              Usuario no encontrado, registrese
            </p>
          </div>
        </div>
        <div>
          <input
            placeholder="Celular:"
            name="phone"
            type="number"
            className={`placeholder-customBlue text-start shadow appearance-none border ${
              errors.phone ? "border-red-700" : "border-gray-300"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.phone ? "focus:border-red-700" : "focus:border-customBlue"
            }`}
            onChange={cambioForm}
            value={formValues.phone}
          />
          {errors.phone && <p className="text-red-500">{errors.phone}</p>}
        </div>
        <div>
          <input
            placeholder="Nombres:"
            type="text"
            name="name"
            className={`placeholder-customBlue text-start shadow appearance-none border ${
              errors.name ? "border-red-700" : "border-gray-300"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.name ? "focus:border-red-700" : "focus:border-customBlue"
            }`}
            onChange={cambioForm}
            value={formValues.name}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <input
            placeholder="Apellidos:"
            type="text"
            name="lastname"
            className={`placeholder-customBlue text-start shadow appearance-none border ${
              errors.lastname ? "border-red-700" : "border-gray-300"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.lastname
                ? "focus:border-red-700"
                : "focus:border-customBlue"
            }`}
            onChange={cambioForm}
            value={formValues.lastname}
          />
          {errors.lastname && <p className="text-red-500">{errors.lastname}</p>}
        </div>

        <div>
          <input
            placeholder="Correo electronico:"
            type="email"
            name="email"
            className={`placeholder-customBlue text-start shadow appearance-none border ${
              errors.email ? "border-red-700" : "border-gray-300"
            } rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
              errors.email ? "focus:border-red-700" : "focus:border-customBlue"
            }`}
            onChange={cambioForm}
            value={formValues.email}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mt-5 flex flex-col justify-center items-center gap-2">
          <label className="inline-flex items-center">
            <input
              className="transition-all text-customBlue focus:ring-customBlue border-gray-300 peer rounded-md w-6 h-6"
              onChange={cambioForm}
              name="agreeToTerms"
              type="checkbox"
              checked={formValues.agreeToTerms || false}
            />
            <span className="ml-2 text-customBlue">
              <u>Términos y condiciones</u>
            </span>
          </label>
          {errors.agreeToTerms && (
            <p className="text-red-500">{errors.agreeToTerms}</p>
          )}

          <button
            type="submit"
            className="transition-all mt-4 px-4 sm:px-8 md:px-16 bg-customOrange hover:bg-orange-400 text-white font-bold py-2 rounded-lg focus:outline-none focus:shadow-outline"
          >
            Conectar
          </button>
        </div>
      </form>
    </Fragment>
  );
};
