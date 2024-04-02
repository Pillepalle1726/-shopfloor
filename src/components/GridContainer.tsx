import React, { useEffect, useState } from 'react';
import { Problem } from '../problemInterface';
import Yellow from './Yellow';
import { useHoverContext } from './HoverContext';

interface GridContainerProps {
    problemArray: Problem[];
}

const GridContainer: React.FC<GridContainerProps> = ({ problemArray }) => {
    const { setHoveredText } = useHoverContext(); 
    const [icons, setIcons] = useState<Array<string | undefined>>([]);

    useEffect(() => {
        // Dynamically import icons based on problemArray
        const loadIcons = async () => {
            const iconPromises = problemArray.map(problem => 
                import(`../assets/Icons/${problem.icon}`)
                .then(module => module.default)
                .catch(error => console.error(`Failed to load icon: ${problem.icon}`, error))
            );

            const iconSrcs = await Promise.all(iconPromises);
            setIcons(iconSrcs);
        };

        loadIcons();
    }, [problemArray]);

    return (
        <div className='w-full h-full bg-white border-black border-2 rounded-xl'>
            <div className="grid grid-cols-3 gap-2 w-full max-h-[800px]">
                {icons.map((iconSrc, index) => (
                    <div key={index} className="relative flex h-56 items-center justify-center" onClick={() => setHoveredText(problemArray[index]?.description ?? '')} >
                        {problemArray[index]?.isProblem && <Yellow visible={true}/>}
                        {iconSrc && <img src={iconSrc} alt={problemArray[index]?.title} className='h-60 w-auto'/>}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridContainer;
