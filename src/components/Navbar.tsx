import React from "react";

interface NavbarProps {
  maturityLevel: number;
}

const Navbar: React.FC<NavbarProps> = ({ maturityLevel }) => {

    // This function returns the correct color based on the index
    const getColor = (index: number) => {
        if (index < maturityLevel) {
            return 'bg-green-400';
        }
        return 'bg-red-400';
    };

    return (
        <div className="navbar bg-white border-b-2 border-gray-300 h-[80px] fixed w-full flex items-center px-12 ">
            <div className="w-full max-w-[1800px] mx-auto flex justify-between ">
            <div className="flex items-center">
                <div className="text-gray-800 font-semibold bg-blue-400 flex center justify-center items-center px-8 py-2 rounded-xl border-black border-2 hover:bg-blue-100">
                    Digital Shop Floor
                </div>
                <div className="text-gray-800 font-semibold bg-blue-200 flex center justify-center items-center px-8 py-2 rounded-xl ml-4 cursor-pointer border-black border-2 hover:bg-blue-100">
                    Start
                </div>
                <div className="text-gray-800 font-semibold bg-blue-200 flex center justify-center items-center px-8 py-2 rounded-xl ml-4 cursor-pointer border-black border-2 hover:bg-blue-100">
                    About
                </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-200 px-8 rounded-xl">
                <div className="text-gray-800 font-semibold  flex center justify-center items-center  py-2 rounded-xl">
                    Digital Shop Floor Maturity
                </div>
                <div className="flex justify-between items-center">
                    {Array.from({ length: 10 }, (_, index) => (
                        <span
                            key={index}
                            className={`${getColor(index)} rounded-full w-3 h-3 mx-0.5`}
                        ></span>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
