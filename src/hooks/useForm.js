import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
    setSelectedFiles([]);
  };
  // const handleFileInput = (event) => {
  //   let files = event.target.files;
  //   let reader = new FileReader();
  //   reader.readAsDataURL(files[0]);
  //   reader.onload = (e) => {
  //     setFormState({
  //       ...formState,
  //       photo: e.target.result,
  //     });
  //   };
  // };
  const handleImageChange = (e) => {
    // console.log(e.target.files[])
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );

      // console.log("filesArray: ", filesArray);

      setSelectedFiles((prevImages) => prevImages.concat(filesArray));
      Array.from(e.target.files).map(
        (file) => URL.revokeObjectURL(file) // avoid memory leak
      );
    }
  };

  return {
    ...formState,
    formState,
    selectedFiles,
    onInputChange,
    onResetForm,
    handleImageChange,
  };
};
