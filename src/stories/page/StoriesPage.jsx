import Header from "../../ui/Header";
import StoriesContainer from "../components/StoriesContainer";

const StoriesPage = () => {
  return (
    <>
      <Header />
      <div className="storiespage mx-auto px-4 mt-6">
        <StoriesContainer />
      </div>
    </>
  );
};

export default StoriesPage;
