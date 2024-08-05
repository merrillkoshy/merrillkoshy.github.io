import { Outlet } from "react-router-dom";

const DeutscLernenLayout = () => {
  return (
    <div className="min-h-screen py-10 px-5 bg-deutsch-gold rounded w-screen">
      <div>
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

export default DeutscLernenLayout;
