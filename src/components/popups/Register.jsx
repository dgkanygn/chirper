import React from "react";
import { CloseModalButton } from "./CloseModalButton";

export const Register = () => {
  return (
    <div>
      <div className="bg-white shadow-xl rounded w-[500px] p-2">
        <div className="flex justify-between p-2 items-center gap-4">
          <h1>
            <b>Kaydol</b>
          </h1>
          <CloseModalButton />
        </div>

        <form className="flex flex-col p-2 gap-5 mt-2">
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
          <input
            className="border-b py-1.5 px-2 outline-none"
            type="text"
            placeholder="Kullanıcı adı"
          />{" "}
          <input
            className="border-b py-1.5 px-2 outline-none"
            type="text"
            placeholder="Bio"
          />
          <div className="flex flex-col gap-2 bg-blue-100 p-2 rounded">
            <label>Profil fotoğrafı</label>
            <input type="file" />
          </div>
          <button className="bg-blue-500 px-5 py-1.5 text-white rounded-full">
            <b>Kaydol</b>
          </button>
          <p>
            Hesabın varsa
            <b> giriş yap</b>
          </p>
        </form>
      </div>
    </div>
  );
};
