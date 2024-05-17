import React from 'react';
import { Problem } from '../problemInterface';
import GridContainer from './GridContainer';
import "./Whiteboard.css"


interface WhiteboardProps {
  problemArray: Problem[];
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ problemArray, setId }) => {
  return (
    <>
    <div className="whiteboard h-full w-full flex items-center justify-center max-h-[1200px] min-h-[600px]">
      <GridContainer problemArray={problemArray} setId={setId}></GridContainer>
    </div>
    </>
  );
};

export default Whiteboard; 