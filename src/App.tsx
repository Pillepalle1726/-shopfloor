import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Whiteboard from './components/Whiteboard';
import { useLocation } from 'react-router-dom';
import { problems } from './problems';
import { Problem } from './problemInterface';


interface ProblemArray extends Array<Problem> { }

function App() {
  const [selectedId, setSelectedId] = useState<number>(0);
  const [maturityLevel, setMaturityLevel] = useState<number>(3);
  const [problemArray, setProblemArray] = useState<ProblemArray>(problems);
  const location = useLocation();
  const pattern = location.pathname.split('/').pop() || '';

  useEffect(() => {
    const decodePattern = (pattern: string) => pattern.split('').map(char => char === 'T');
    const booleanArray = decodePattern(pattern);

    console.log('Decoded booleanArray:', booleanArray);

    const trues = booleanArray.filter((bool) => bool).length;
    setMaturityLevel(trues)

    // write a function that takes the problemArray and the booleanArray and returns a new array with the updated isProblem values
    const updateProblemArray = (problemArray: ProblemArray, booleanArray: boolean[]): ProblemArray => {
      return problemArray.map((problem, index) => ({
        ...problem,
        isProblem: index < booleanArray.length ? booleanArray[index] : false,
      }));
    };

    const updatedProblemArray = updateProblemArray(problemArray, booleanArray);
    setProblemArray(updatedProblemArray);
    console.log(updatedProblemArray)
  }, [pattern]);

  console.log(selectedId)
  return (
    <>
        <div className='flex flex-col h-screen w-screen '>
          <Navbar maturityLevel={maturityLevel} />

          <div className='content-wrapper h-full flex w-full max-w-[1800px] mx-auto mt-[80px]'>
            <div className='w-2/5  left-0 top-[80px] h-screen border-r-4 border-gray-200 pb-12 px-12 overflow-auto '>
              <Sidebar id={selectedId}/>
            </div>
            <div
              className='w-3/5 top-[120px]'
              style={{ height: `calc(100vh - 120px)` }}
            >
              <Whiteboard problemArray={problemArray} setId={setSelectedId}></Whiteboard>
            </div>
          </div>
        </div>
    </>
  );
}

export default App;
