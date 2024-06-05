import React from "react";
import Button from "./Button";
// import Logo from "./../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { Problem } from '../problemInterface';
import { Dispatch, SetStateAction } from 'react';
// Define the interface for the props
interface NavbarProps {
    maturityLevel: number;
    problemArray: Problem[];
    setSelectedId: Dispatch<SetStateAction<number>>;
}


const Navbar: React.FC<NavbarProps> = ({ problemArray, setSelectedId }) => {
    const navigate = useNavigate();
    // This function returns the correct color based on the index
    // const getColor = (index: number) => {
    //     if (index < maturityLevel) {
    //         return 'bg-green-400';
    //     }
    //     return 'bg-red-400';
    // };

    const handleButtonClick = (path: string) => {
        console.log(`${path} button clicked!`);
        navigate(`/${path}`);
    };

    const handleStartClick = () => {
        console.log("Start button clicked!");

        setSelectedId(0);
        const urlArray = problemArray.map(item => item.isProblem ? 'T' : 'F').join('');
        console.log(urlArray);
        navigate(`/`);
    }

    return (
        <div className="navbar bg-white border-b border-grr  h-[80px] fixed w-full flex items-center z-99">

            <div className="w-4/5 max-w-[1800px] mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <div
                        className="text-gray-800 font-semibold flex-row hover:bg-gray-50 cursor-pointer p-2"
                        onClick={handleStartClick}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <img src="https://www.smartfactorynavigator.com/typo3conf/ext/alm_bs_theme/Resources/Public/Images/Smart-Factory-Navigator_250px.png" alt="logo" className="h-10 w-auto" />
                        </div>
                    </div >
                </div>

                <div className="flex space-x-4 font-semibold">
                    <Button onClick={() => handleButtonClick('About')} text="About" />
                    <Button onClick={() => handleButtonClick('lmprinciples')} text="Lean Manufacturing Principles" />
                    <Button onClick={() => handleButtonClick('technology-enabler')} text="Digital Technologies as enabler" />
                </div>
                {/* <div className="flex items-center space-x-4 bg-gray-200 px-8 py-2 rounded-xl">
          <div className="text-gray-800 font-semibold">
            Digital Shop Floor Maturity
          </div>
          <div className="flex items-center">
            {Array.from({ length: 10 }, (_, index) => (
              <span
                key={index}
                className={`${getColor(index)} rounded-full w-3 h-3 mx-0.5`}
              ></span>
            ))}
          </div> 
        </div>*/}
            </div>
        </div>
    );
};

export default Navbar;
