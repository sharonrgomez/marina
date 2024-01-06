import { useNavigate } from "react-router-dom";
import logOut from "../firebase/auth/logOut";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/welcome");
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    handleLogOut();
  }, []);

  return null;
};

export default Logout;
