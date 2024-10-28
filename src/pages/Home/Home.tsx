import { Link, useLocation } from "react-router-dom";
import Timer from "../../components/Timer/Timer";

const Home = () => {
  const location = useLocation();
  const ids = "123456789";
  return (
    <>
      {ids.split("").map((id) => (
        <Link to={"/question/" + id} state={{ background: location }}>
          {`Q${id}`}
        </Link>
      ))}
      <Timer limit={120} />
    </>
  );
};

export default Home;
