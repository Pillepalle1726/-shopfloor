import React from "react";
import Sidebar from './Sidebar';
import Whiteboard from './Whiteboard';
import { Problem } from '../problemInterface';

interface ContentContainerProps {
    problemArray: Problem[];
}
const ContentContainer: React.FC<ContentContainerProps> = ({ problemArray }) => {


    return (
        <div className="top-[80px] h-screen  fixed w-full flex items-center shadow-lg ">
            <div className="w-full h-full max-w-[1800px] mx-auto px-12 ">
                <div className="flex flex-row ">
                <Sidebar></Sidebar>
                <Whiteboard problemArray={problemArray}></Whiteboard>
                </div>
            </div>
        </div>
    );
};

export default ContentContainer;
