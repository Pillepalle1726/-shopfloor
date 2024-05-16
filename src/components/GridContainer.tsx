import React, { useEffect, useState } from 'react';
import { Problem } from '../problemInterface';
import Yellow from './Yellow';


interface GridContainerProps {
    problemArray: Problem[];
    setId: React.Dispatch<React.SetStateAction<number>>;
}

const GridContainer: React.FC<GridContainerProps> = ({ problemArray, setId }) => {

    const [icons, setIcons] = useState<Array<string | undefined>>([]);

    useEffect(() => {
        const loadIcons = async () => {
            const iconPromises = problemArray.map(problem =>
                // Ensure the file extension is explicitly specified
                import(`../assets/imgs/${problem.icon}.png`) // Assuming all icons are SVG files
                .then(module => module.default)
                .catch(error => console.error(`Failed to load icon: ${problem.icon}`, error))
            );
        
            const iconSrcs = await Promise.all(iconPromises);
            setIcons(iconSrcs);
        };

        loadIcons();
    }, [problemArray]);
    return (
        <div className='w-full h-full bg-white '>
            <div className="grid grid-cols-3 gap-2 w-full max-h-[800px]">
                {icons.map((iconSrc, index) => (
                    <div key={index} className="relative flex h-60 bg-white items-center justify-center border-black border-2 rounded-xl cursor-pointer hover:bg-slate-50" onClick={() => setId(index+1)} >
                        {problemArray[index]?.isProblem && <Yellow visible={true}/>}
                        {iconSrc && <img src={iconSrc} alt={problemArray[index]?.title} className='h-auto w-auto'/>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridContainer;
