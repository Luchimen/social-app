import { useState } from "react";
import Error from "../../helpers/error/Error";
import { useForm } from "../../hooks/useForm";
import { useStories } from "../../hooks/useStories";
const FormStory = () => {
  const { saveStory } = useStories();
  const { onInputChange, onResetForm, comment, handleFileInput, formState } =
    useForm({
      comment: "",
      photo: "",
    });
  const [error, setError] = useState(false);

  const submitForm = () => {
    if (comment === "") {
      setError(true);
      return;
    }
    saveStory(formState);
    onResetForm();
    document.getElementById("input").value = "";
    setError(false);
  };

  return (
    <form className="form">
      <div className="form-story rounded-md shadow-md shadow-gray-300 p-5">
        <div className="flex mb-3">
          <textarea
            className="input-story rounded-md p-3 border-solid border-2 border-slate-200"
            rows="3"
            placeholder="Qué estas pensando?"
            value={comment}
            onChange={onInputChange}
            name="comment"
          ></textarea>
        </div>
        {error && <Error>Completar el campo del formulario</Error>}
        <div className="flex buttons">
          <div className="file-select">
            <input
              type="file"
              accept="image/*"
              name="photo"
              id="input"
              onChange={handleFileInput}
            />
          </div>
          <button
            onClick={() => {
              submitForm();
            }}
            type="button"
            className="ml-auto whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 mt-5"
          >
            Publicar
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormStory;
