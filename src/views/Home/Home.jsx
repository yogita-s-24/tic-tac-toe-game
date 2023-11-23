import React, { useState } from "react";

function Home() {
  const [player, setPlayer] = useState(1);

  const [board, setBoard] = useState({
    1 : "",
    2 : "",
    3 : "",
    4 : "",
    5 : "",
    6 : "",
    7 : "",
    8 : "",
    9 : ""
  })
  
  return (
    <div className="flex justify-around flex-wrap items-center">
      <div>
        <h1 className="text-4xl font-bold font-sans md:font-serif  px-20 py-3 rounded-sm bg-violet-500 text-white shadow-3xl" >
          Tic Tac Toe
        </h1>

        <div className="flex justify-around mt-14">
        <h1 className="text-xl font-black bg-violet-100 px-9 py-3 rounded-sm ring-2 ring-violet-500 shadow-md">Player 1 : ❌</h1>
        <h1 className="text-xl font-black bg-violet-100 px-9 py-3 ms-2 rounded-sm ring-2 ring-violet-500 shadow-md">Player 2 : ⭕ </h1>
        </div>

        <div>
          <p className="text-xl font-black bg-violet-100 px-9 py-3 rounded-sm mt-14 text-center ring-2 ring-violet-500 shadow-md">Currently Playing : {player === 1 ? "❌" : "⭕"}</p>
        </div>

      </div>

      <div className="">
        <div className="w-fit p-4 bg-violet-500 rounded-sm shadow-sm mt-20">
          <div className="box flex align-center justify-center ">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[1]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[2]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[3]}</div>
          </div>

          <div className="box flex align-center justify-center">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[4]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[5]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[6]}</div>
          </div>

          <div className="box flex align-center justify-center">
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[7]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[8]}</div>
            <div className="box bg-violet-100 w-28 h-28 border border-violet-700 hover:shadow-3xl hover:z-50 hover:bg-white flex justify-center items-center text-4xl">{board[9]}</div>
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
