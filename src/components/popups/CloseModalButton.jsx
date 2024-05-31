import React from "react";
import useModalStore from "../../store/useModalStore";

export const CloseModalButton = () => {
  const { closeModal } = useModalStore();

  return (
    <div onClick={closeModal} className="text-white">
      <i class="fa-solid fa-xmark bg-blue-100 p-2 rounded text-blue-400 cursor-pointer  hover:bg-blue-200 transition duration-200 ease-in-out"></i>
    </div>
  );
};
