import React from "react";
import { CloseModalButton } from "./CloseModalButton";

export const Login = () => {
  return (
    <div>
      <div className="bg-white shadow-xl rounded w-[500px] p-2">
        <div className="flex justify-between p-2 items-center gap-4">
          <h1>
            <b>Giriş yap</b>
          </h1>
          <CloseModalButton />,
        </div>

        <form className="flex flex-col p-2 gap-5 mt-2">
          <div className="bg-blue-100 text-blue-500 p-2">
            Kaydolmak için tıkla!
          </div>
          <input
            className="border-b py-1.5 px-2 outline-none"
            type="text"
            placeholder="E-posta"
          />
          <input
            className="border-b outline-none py-1 px-2"
            type="password"
            placeholder="Şifre"
          />
          <button className="bg-blue-500 px-5 py-1.5 text-white rounded-full">
            <b>Giriş</b>
          </button>
          <p>
            Hesabın yoksa
            <b> kaydol</b>
          </p>
        </form>
      </div>
    </div>
  );
};
