import { useState, useCallback } from "react";

function useForm(initialValues = {}) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  function handleChange(event) {
    const { name, value, validationMessage } = event.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validationMessage });
    setIsFormValid(event.target.closest("form").checkValidity());
  }

  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setIsFormValid(false);
  }, [initialValues]);

  return { values, errors, isFormValid, handleChange, resetForm };
}

export default useForm;
