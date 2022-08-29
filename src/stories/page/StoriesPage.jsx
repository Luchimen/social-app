import ModalBienvenido from "../../helpers/Modal/ModalBievenido";
import StoriesContainer from "../components/StoriesContainer";

const StoriesPage = () => {
  return (
    <>
      <ModalBienvenido />
      <div className="storiespage mx-auto px-4 mt-6">
        <StoriesContainer />
      </div>
    </>
  );
};

export default StoriesPage;
