import React from "react";
import Button from "./Button";
import Logo from "./../assets/logo.png";
interface NavbarProps {
    maturityLevel: number;
}

const Navbar: React.FC<NavbarProps> = () => {
    // This function returns the correct color based on the index
    // const getColor = (index: number) => {
    //     if (index < maturityLevel) {
    //         return 'bg-green-400';
    //     }
    //     return 'bg-red-400';
    // };

    const handleButtonClick = (text: string) => {
        console.log(`${text} button clicked!`);
    };

    return (
        <div className="navbar bg-white border-b-2 border-gray-100 h-[100px] fixed w-full flex items-center px-12">
            <div className="w-full max-w-[1800px] mx-auto flex justify-between items-center">
                <div className="flex space-x-4">
                    <div className="text-gray-800 font-semibold flex-row hover:bg-gray-50 cursor-pointer p-2">
                        <div className="flex flex-col items-center justify-center">
                            <img src={Logo} alt="logo" className="h-10 w-10" />
                            <div className="text-gray-800 font-semibold">Digital Shop Floor</div>
                        </div>
                    </div >
                    <div className="flex space-x-4 ml-4 py-6">
                        <Button onClick={() => handleButtonClick('Start')} text="Start" />
                        <Button onClick={() => handleButtonClick('About')} text="About" />
                    </div>
                </div>

                <div className="flex space-x-4">
                    <Button onClick={() => handleButtonClick('What are LM Principles?')} text="What are LM Principles?" />
                    <Button onClick={() => handleButtonClick('Digital Technologies as enabler')} text="Digital Technologies as enabler" />
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
