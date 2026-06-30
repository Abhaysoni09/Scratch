import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Nav = () => {
  const navigate = useNavigate();

  const login = () => {
    navigate("/login");
  };

  const register = () => {
    navigate("/register");
  };

  return (
    <>
      <nav className="bg-black min-h-[10vh] flex flex-col md:flex-row justify-between items-center px-4 py-3">
        {/* Logo */}
        <div>
          <h1 className="text-white font-bold text-3xl md:text-5xl uppercase">
            scratch
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-4 md:mt-0">
          <a
            href=""
            className="text-white uppercase text-sm md:text-lg hover:text-blue-400"
          >
            Home
          </a>

          <a
            href=""
            className="text-white uppercase text-sm md:text-lg hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href=""
            className="text-white uppercase text-sm md:text-lg hover:text-blue-400"
          >
            Teachers
          </a>

          <a
            href=""
            className="text-white uppercase text-sm md:text-lg hover:text-blue-400"
          >
            About
          </a>

          <div className="flex gap-2 mt-2 md:mt-0">
            <button
              onClick={login}
              className="bg-blue-600 text-white uppercase text-sm md:text-lg px-4 py-2 rounded-2xl hover:text-blue-400"
            >
              Login
            </button>

            <button
              onClick={register}
              className="bg-blue-600 text-white uppercase text-sm md:text-lg px-4 py-2 rounded-2xl hover:text-blue-400"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      <Home />
    </>
  );
};

export default Nav;