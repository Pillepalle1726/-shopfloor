import React from "react";
import './Navbar.css';
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
        <div className="navbar h-[80px] fixed w-full flex items-center shadow-lg">
            <div className="w-full max-w-[1800px] mx-auto flex justify-between px-12 ">
                <div className="flex items-center">
                    <div className="logo font-semibold flex center justify-center items-center rounded-xl bg mr-8">
                        Digital Shop Floor
                    </div>
                    <div className="flex justify-start w-48  px-8 py-4 rounded-xl">
                        <div className="cursor-pointer font-bold mr-12">About</div>
                        <div className="cursor-pointer font-bold">Problems</div>
                    </div>
                </div>

                <div className="flex items-center space-x-4 px-8 rounded-xl">
                    <div className="font-semibold  flex center justify-center items-center  py-4 rounded-xl">
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
