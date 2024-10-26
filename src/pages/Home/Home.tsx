import Keyboard from "../../components/Keyboard/Keyboard";
import Timer from "../../components/Timer/Timer";

const Home = () => {
  return (
    <>
      <Keyboard />
      <Timer limit={120} />
    </>
  );
};

export default Home;
