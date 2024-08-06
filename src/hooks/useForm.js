import { useState, useEffect } from "react";

export const useForm = (initialState = {}, validate) => {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  useEffect(() => {
    if (Object.keys(touchedFields).length > 0) {
      const validationErrors = validate(formValues);
      const filteredErrors = Object.keys(validationErrors)
        .filter((key) => touchedFields[key])
        .reduce((obj, key) => {
          obj[key] = validationErrors[key];
          return obj;
        }, {});
      setErrors(filteredErrors);
    }
  }, [formValues, touchedFields, validate]);

  const reset = () => {
    setFormValues(initialState);
    setErrors({});
    setTouchedFields({});
  };

  const cambioForm = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });

    setTouchedFields({
      ...touchedFields,
      [target.name]: true,
    });
  };

  const validateForm = () => {
    const validationErrors = validate(formValues);
    setErrors(validationErrors);
    setTouchedFields(
      Object.keys(formValues).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
    return Object.keys(validationErrors).length === 0;
  };

  return [formValues, errors, cambioForm, reset, validateForm];
};
