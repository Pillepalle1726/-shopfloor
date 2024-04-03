import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';


import { useLocation } from 'react-router-dom';
import { problems } from './problems';
import { HoverProvider } from './components/HoverContext';
import { Problem } from './problemInterface';
import './App.css';
import ContentContainer from './components/ContentContainer';

interface ProblemArray extends Array<Problem> { }

function App() {
  const [maturityLevel, setMaturityLevel] = useState<number>(3);
  const [problemArray, setProblemArray] = useState<ProblemArray>(problems);
  const location = useLocation();
  const pattern = location.pathname.split('/').pop() || '';

  useEffect(() => {
    const decodePattern = (pattern: string) => pattern.split('').map(char => char === 'T');
    const booleanArray = decodePattern(pattern);

    console.log('Decoded booleanArray:', booleanArray);

    const trues = booleanArray.filter((bool) => bool).length;
    setMaturityLevel(trues);

    const updateProblemArray = (problemArray: ProblemArray, booleanArray: boolean[]): ProblemArray => {
      return problemArray.map((problem, index) => ({
        ...problem,
        isProblem: index < booleanArray.length ? booleanArray[index] : false,
      }));
    };

    const updatedProblemArray = updateProblemArray(problemArray, booleanArray);
    setProblemArray(updatedProblemArray);
    console.log(updatedProblemArray);
  }, [pattern]);

  return (
    <>
      <HoverProvider>
        <Navbar maturityLevel={maturityLevel} />
        <ContentContainer problemArray={problemArray} />
      </HoverProvider>
    </>
  );
}

export default App;
