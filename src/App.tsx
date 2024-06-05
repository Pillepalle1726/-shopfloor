import { useState, useEffect } from 'react';
import { HomeView } from './views/HomeView';
import { LMPrinciples } from './views/LMPrinciples';
import { Enabler } from './views/Enabler';
import { About } from './components/About';
import Navbar from './components/Navbar';
import { Routes, Route, useLocation } from "react-router-dom";
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
    const trues = booleanArray.filter((bool) => bool).length;
    setMaturityLevel(trues)
    const updateProblemArray = (problemArray: ProblemArray, booleanArray: boolean[]): ProblemArray => {
      return problemArray.map((problem, index) => ({
        ...problem,
        isProblem: index < booleanArray.length ? booleanArray[index] : false,
      }));
    };

    const updatedProblemArray = updateProblemArray(problemArray, booleanArray);
    setProblemArray(updatedProblemArray);
  }, [pattern]);

  return (
    <div className='flex flex-col h-screen w-screen'>
      <Navbar maturityLevel={maturityLevel} problemArray={problemArray} setSelectedId={setSelectedId} />
      <div className='wrapper  h-[calc(100vh-80px)] top-[80px] relative flex items-center justify-center'>
        <Routes>
          <Route path="*" element={<HomeView selectedId={selectedId} problemArray={problemArray} setSelectedId={setSelectedId} />} />
          <Route path="/technology-enabler" element={<Enabler />} />
          <Route path="/lmprinciples" element={<LMPrinciples />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;