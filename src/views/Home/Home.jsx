import React from "react";

function Home() {
  return (
    <div className="flex justify-around flex-wrap mt-10">
      <div>
        <h1 className="text-4xl font-bold font-sans md:font-serif  px-20 py-3 rounded-sm bg-violet-500 text-white shadow-3xl" >
          Tic Tac Toe
        </h1>

        <div className="flex justify-around mt-14">
        <h1 className="text-xl font-black bg-violet-100 px-9 py-3 rounded-sm">Player 1 : ❌</h1>
        <h1 className="text-xl font-black bg-violet-100 px-9 py-3 ms-1 rounded-sm">Player 2 : ⭕ </h1>
        </div>

      </div>

      <div className="mt-20">
        <div className="w-fit p-4 bg-violet-500 rounded-sm shadow-sm">
          <div className="box flex align-center justify-center ">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
          </div>

          <div className="box flex align-center justify-center">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
          </div>

          <div className="box flex align-center justify-center">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white"></div>
          </div>
        </div>

        <div className="text-center mt-7">
          <button
            type="button"
            className="bg-violet-600 text-white px-14 py-2 rounded-sm shadow-3xl">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
