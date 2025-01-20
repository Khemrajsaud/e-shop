import React from "react";
import img1 from "../assets/Images/Category man.png";
import img2 from "../assets/Images/Category women.png";
import img3 from "../assets/Images/kid.png";

const CategoriSection = () => {
  const Categoriess = [
    {
      img: img1,
      title: "Man",
    },
    {
      img: img2,
      title: "Women",
    },
    {
      img: img3,
      title: "Kids",
    },
  ];
  return (
    <div>
      <div className=" container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {Categoriess.map((item, index) => (
          <div
            className="transform transition-transform duration-300 hover:scale-105 cursor-pointer  relative h-64 "
            key={index}
          >
            <img
              className="w-full h-full object-cover rounded-lg shadow-md"
              src={item.img}
              alt=""
            />
            <div className=" absolute top-20 left-12">
              <p>{item.title}</p>
              <p>View All</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriSection;
