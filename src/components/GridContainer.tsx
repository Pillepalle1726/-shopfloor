import React, { useEffect, useState } from 'react';
import { Problem } from '../problemInterface';
import Yellow from './Yellow';
import { useHoverContext } from './HoverContext';
import "./GridContainer.css";
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
        <div className='rounded-xl flex items-center'>
            <div className="grid grid-container grid-cols-3 gap-4 w-full max-h-[800px]">
                {icons.map((iconSrc, index) => (
                    <div key={index} className="grid-item relative flex flex-col p-4 rounded-xl h-52 w-auto items-center justify-center border-white border-2 " onClick={() => setHoveredText(problemArray[index]?.description ?? '')} >
                        {problemArray[index]?.isProblem && <Yellow visible={true} />}
                        {iconSrc && <img src={iconSrc} alt={problemArray[index]?.title} className='h-full cursor-pointer' />}
                        <div className='text-white'>{problemArray[index]?.title}</div>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default GridContainer;
