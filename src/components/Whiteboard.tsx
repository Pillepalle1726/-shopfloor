import React from 'react';
// import bg from '../assets/background.png';
import { Problem } from '../problemInterface';
import GridContainer from './GridContainer';
import './Whiteboard.css';

interface WhiteboardProps {
  problemArray: Problem[];
}

const Whiteboard: React.FC<WhiteboardProps> = ({ problemArray }) => {
  return (
    <>
    <div className="whiteboard flex items-center justify-end w-full" style={{height: 'calc(100vh - 80px)'}}>
      <GridContainer problemArray={problemArray}></GridContainer>
    </div>
    </>
  );
};

export default Whiteboard; 