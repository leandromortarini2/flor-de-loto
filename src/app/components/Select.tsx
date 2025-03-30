import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Ioption = {
  id: number;
  name: string;
};

type Props = {
  options: Ioption[];
  handle: (name: string) => void;
};

export const Select = ({ options, handle }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelected(option);
    handle(option);
    setIsOpen(false);
  };

  return (
    <div className=" w-full px-8 py-4 block lg:hidden  ">
      <div
        className="border relative flex justify-center border-gray-300 p-2 rounded-lg cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        {selected ? (
          <p className="w-full flex justify-between items-center">
            {selected}
            <IoIosArrowDown />
          </p>
        ) : (
          <p className="w-full flex justify-between items-center">
            Seleccione una categoria
            <IoIosArrowDown />
          </p>
        )}
        {isOpen && (
          <div className="absolute  w-full mt-8 border border-gray-300 rounded-lg bg-white z-10 ">
            {options.map((option) => (
              <div
                key={option.id}
                className="p-2 hover:bg-violetOscuro hover:text-white  cursor-pointer"
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
