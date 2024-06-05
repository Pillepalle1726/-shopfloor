import React from 'react';
import Sidebar from "../components/Sidebar";
import Whiteboard from "../components/Whiteboard";
import { Problem } from '../problemInterface';
import { Dispatch, SetStateAction } from 'react';
// Define the interface for the props
interface HomeViewProps {
    selectedId: number;
    problemArray: Problem[];
    setSelectedId: Dispatch<SetStateAction<number>>;
}

// Apply the interface to the component props
export const HomeView: React.FC<HomeViewProps> = ({ selectedId, problemArray, setSelectedId }) => {
    return (
        <>
            <div className="flex  w-4/5 max-w-[1800px] items-center justify-center">
                <div className=" flex rounded-lg">
                    <div className='w-2/5 left-0 overflow-auto'>
                        <Sidebar id={selectedId} />
                    </div>
                    <div className='w-3/5 flex items-center justify-center sticky'>
                        <Whiteboard problemArray={problemArray} setId={setSelectedId}></Whiteboard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeView;