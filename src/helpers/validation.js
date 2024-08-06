export const validate = (values) => {
  const errors = {};

  if (!values.phone) {
    errors.phone = "El número de celular es requerido";
  } else if (!/^\d{7,15}$/.test(values.phone)) {
    errors.phone = "El número de celular debe tener entre 7 y 15 dígitos";
  }

  if (!values.name) {
    errors.name = "El nombre es requerido";
  }

  if (!values.lastname) {
    errors.lastname = "El apellido es requerido";
  }

  if (!values.email) {
    errors.email = "El correo electrónico es requerido";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "El correo electrónico es inválido";
  }

  if (!values.agreeToTerms) {
    errors.agreeToTerms = "Debes aceptar los términos y condiciones";
  }

  return errors;
};
