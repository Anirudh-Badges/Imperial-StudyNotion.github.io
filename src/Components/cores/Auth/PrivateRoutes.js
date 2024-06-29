import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (token) {
    return children;
  } else {
    return navigate("/login") ;
  }
}

export default PrivateRoutes;
