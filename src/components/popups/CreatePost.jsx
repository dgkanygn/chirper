import React from "react";
import { CloseModalButton } from "./CloseModalButton";

export const CreatePost = () => {
  return (
    <div>
      <div className="bg-white shadow-xl rounded w-[500px] p-2">
        <div className="flex justify-between p-2 items-center gap-4">
          <h1>
            <b>Yeni gönderi</b>
          </h1>
          <CloseModalButton />
        </div>
        <div className="flex flex-col p-2 gap-5">
          <textarea
            rows={15}
            className="p-2 border-2 border-r-2 border-solid border-blue-500 outline-blue-500"
            placeholder="Bir şeyler yaz..."
          ></textarea>
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
    </div>
  );
};
