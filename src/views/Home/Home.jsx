import React from "react";

function Home() {
  return (
    <div className="flex justify-around flex-wrap mt-20">
      <div>
        <h1 className="text-3xl font-bold font-sans md:font-serif text-black">
          Tic Tac Toe
        </h1>
      </div>

      <div className="w-fit p-4 bg-amber-800 mt-14">
        <div className="box flex align-center justify-center ">
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
        </div>
        <div className="box flex align-center justify-center">
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
        </div>
        <div className="box flex align-center justify-center">
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
          <div className="box bg-gray-100 w-28 h-28 border border-amber-700 hover:shadow-3xl hover:z-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
