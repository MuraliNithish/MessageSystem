import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white p-4 shadow-md rounded-xl h-24 flex justify-around items-center z-50">
      <div className="flex items-center space-x-4">
        <img
          className="w-52 h-12 mr-60 bg-white"
          src={`/assets/Logo.svg`}
          alt="Logo"
        />
      </div>
      <div className="flex justify-between ml-96">
        <img
          className="w-8 h-8 ml-16"
          src={`/assets/Logo1.svg`}
          alt="Logo1"
        />
      </div>
      <div className="flex items-center border-2 rounded-md bg-gray-50 border-green-600 w-58 h-16 p-2">
        <div className="flex items-center ml-3   gap-2">
          <img
            className="w-12 h-10"
            src={`/assets/kr.svg`}
            alt="kr"
          />
          <div className="flex flex-col mr-2 text-sm">
            <div className="font-semibold">Kelvin Roadster</div>
            <div className="text-[#999999] font-sans ">Senior Manager</div>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-6 h-6"
          src={`/assets/Logo3.svg`}
          alt="Logo3"
        />
      </div>
    </div>
  );
};

export default Navbar;
