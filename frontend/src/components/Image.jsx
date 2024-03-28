import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Image = (props) => {
  const image = props.props;
  console.log(image);
  const navigate = useNavigate();

  const backtoHome = () => {
    navigate("/");
  };

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000`}
        style={{
          backgroundImage: `url(${image.photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-5xl font-serif  text-black mb-4">{image.text}</h1>
          <p className="text-xl text-gray-800 mb-8">{image.description}</p>
          <button
            onClick={backtoHome}
            className="inline-block bg-orange-500 text-white py-2 px-5 rounded-lg shadow-lg hover:bg-orange-600 flex items-center justify-center"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;
