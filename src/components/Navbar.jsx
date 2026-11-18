import { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const { isOpen, setIsOpen } = useState(false);
  return (
    <div className="bg-transparent fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-20 py-5 ">
      <div className="flex items-center gap-10">
        <img src="/logo.svg" alt="logos" className="w-40 h-40" />
        <img
          src="/menu.svg"
          alt="menu"
          className="w-20 h-20"
          onClick={setIsOpen(!isOpen)}
        />
      </div>
      <div className="flex items-center gap-10">
        <p className="text-white">+86 852 346 000</p>
        <Button className="border  border-white">Reservation</Button>
      </div>

      {isOpen && (
        <div className="bg-(url('/navimg.png')) bg-no-repeat bg-cover bg-center fixed top-0 left-0 right-0 bottom-0 z-20 flex flex-col justify-center items-center gap-10"></div>
      )}
    </div>
  );
};

export default Navbar;
