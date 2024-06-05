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
    <div className="whiteboard h-auto w-auto flex items-center justify-center pl-4">
      <GridContainer problemArray={problemArray} setId={setId}></GridContainer>
    </div>
    </>
  );
};

export default Whiteboard; 