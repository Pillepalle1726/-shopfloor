import React from 'react';
import bg from '../assets/background.png';
import { Problem } from '../problemInterface';
import GridContainer from './GridContainer';



interface WhiteboardProps {
  problemArray: Problem[];
}

const Whiteboard: React.FC<WhiteboardProps> = ({ problemArray }) => {
  return (
    <>
    <div className="whiteboard p-12 h-full w-full flex items-center justify-center max-h-[800px]" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <GridContainer problemArray={problemArray}></GridContainer>
    </div>
    </>
  );
};

export default Whiteboard; 