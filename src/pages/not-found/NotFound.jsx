import { useNavigate } from "react-router-dom";
import notFound from "../../assets/404.png";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <img src={notFound} alt="404" style={{ height: "40%" }} />

      <button className="btn mt-5" onClick={() => navigate("/")}>
        Redirect
      </button>
    </div>
  );
};

export default NotFound;
