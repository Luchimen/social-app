import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  const handleFileInput = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      setFormState({
        ...formState,
        photo: e.target.result,
      });
    };
  };

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    handleFileInput,
  };
};
