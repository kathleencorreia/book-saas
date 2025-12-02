import Image from "next/image";
import React from "react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 flex items-center justify-center  ">
      <div onClick={(e) => e.stopPropagation()} className="bg-white w-[500px] relative p-4 flex justify-between items-end rounded-2xl scroll">
        <div className="w-full flex items-center justify-center">{children}</div>
        <div></div>
        <Image
          src="../../closeIcon.svg"
          width={24}
          height={24}
          alt="icon close"
          onClick={onClose}
          className="absolute top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Modal;
