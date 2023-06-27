import React, { useState } from "react";

const useForm = (value) => {
  const [form, setForm] = useState(value);

  const onChangeHandler = (e) => {

    setForm((prev)=>({...prev,[e.target.name]:e.target.value}))
  };

  return {
    form,
    onChangeHandler,
  };
};

export default useForm;
