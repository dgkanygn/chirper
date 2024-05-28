import React from "react";
import { FaRegHeart } from "react-icons/fa";

export const Comments = () => {
  return (
    <div className="bg-white shadow-xl rounded w-[500px] p-2">
      <div className="flex justify-between p-2 items-center gap-4">
        <h1>
          <b>Yorumlar</b>
        </h1>
        <h1 className="text-white">
          <i class="fa-solid fa-xmark bg-blue-100 p-2 rounded text-blue-400 cursor-pointer  hover:bg-blue-200 transition duration-200 ease-in-out"></i>
        </h1>
      </div>
      <div className="flex flex-col p-2 gap-5 mt-2 h-96 overflow-y-scroll">
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>{" "}
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>{" "}
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>{" "}
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>{" "}
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>{" "}
        {/* yorum kart 1 */}
        <div className="flex items-center gap-4">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
            eos.
          </p>
          <div className="flex items-center gap-2 hover:bg-red-100 cursor-pointer py-1.5 px-3 rounded-full">
            <FaRegHeart />
            <h1>5</h1>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <img
            className="w-10 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt=""
          />
          <input
            type="text"
            className="border border-blue-400 w-full rounded-full p-2"
          />
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="bg-blue-200 py-1.5 px-5 rounded-full text-blue-500">
            <b> 0/100</b>
          </div>
          <button className="bg-blue-500 text-white rounded-full py-1.5 px-6">
            <b>Paylaş</b>
          </button>
        </div>
      </div>
    </div>
  );
};
