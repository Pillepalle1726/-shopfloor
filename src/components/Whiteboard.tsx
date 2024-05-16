import React from 'react';
import { Problem } from '../problemInterface';
import GridContainer from './GridContainer';



interface WhiteboardProps {
  problemArray: Problem[];
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const Whiteboard: React.FC<WhiteboardProps> = ({ problemArray, setId }) => {
  return (
    <>
    <div className="whiteboard p-12 h-full w-full flex items-center justify-center max-h-[800px]">
      <GridContainer problemArray={problemArray} setId={setId}></GridContainer>
    </div>
    </>
  );
};

export default Whiteboard; 