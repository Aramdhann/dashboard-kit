import React from "react";

const Card = ({ title, value }) => {
  return (
    <>
      <div className="flex flex-col w-full sm:w-64 text-center gap-3 border-2 border-gray-300 py-4 px-16 font-medium bg-white rounded-lg hover:border-blue-500 hover:border-1 hover:text-blue-500">
        <p className="text-gray-400">{title}</p>
        <p className="font-base text-4xl ">
          <span className="text-zinc-800">{value}</span>
        </p>
      </div>
    </>
  );
};

export default Card;
