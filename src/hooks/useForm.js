import { useState } from "react";

function useForm() {
  const [form, setForm] = useState();

  function onChange(e) {
    setForm(e.target.value);
  }

  return {
    form,
    setForm,
    onChange,
  };
}

export default useForm;
