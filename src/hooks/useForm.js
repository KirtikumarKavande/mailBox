import React, { useState } from "react";

const useForm = (values) => {
  const [form, setForm] = useState(values);

  const onChangeHandler = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const resetData = () => {
    setForm(values);
  };

  return {
    form,
    onChangeHandler,
    resetData,
  };
};

export default useForm;
