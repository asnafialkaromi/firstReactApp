import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";

const AuthLayout = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  {
    console.log(isDarkMode);
  }
  return (
    <div
      className={`flex justify-center min-h-screen items-center ${
        isDarkMode && "bg-slate-900"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-3xl font-bold mb-2 text-blue-600">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <p className="text-slate-500 text-sm mt-5 text-center">
          {type === "login"
            ? "Don't Have an account "
            : "Already have an account "}

          {type === "login" && (
            <Link to="/register" className="text-blue-500 font-bold">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to="/login" className="text-blue-500 font-bold">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
