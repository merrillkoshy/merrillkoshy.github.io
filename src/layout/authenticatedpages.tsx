import { Outlet } from "react-router-dom";
import { deutsch } from "../api/api-deutsch";
import { useAppDispatch } from "../hooks";

const AuthenticatedPagesLayout = () => {
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(deutsch.util.resetApiState());
    window.location.href = "/deutsch";
  };
  return (
    <div className="min-h-screen py-10 px-5 bg-deutsch-gold rounded w-[1024px]">
      <div>
        <div className="flex justify-end w-full mb-1">
          <button
            className="bg-deutsch-rot text-white font-bold py-2 px-4 rounded-md hover:bg-red-800"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
        <div data-aos="fade-down" data-aos-duration="800">
          <h1 className="text-4xl font-bold text-center text-white bg-deutsch-rot rounded">
            Deutsch Lernen
          </h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedPagesLayout;
