import React, { useEffect, useState } from 'react';
import { Problem } from '../problemInterface';
import Yellow from './Yellow';

interface GridContainerProps {
    problemArray: Problem[];
    setId: React.Dispatch<React.SetStateAction<number>>;
}

const GridContainer: React.FC<GridContainerProps> = ({ problemArray, setId }) => {
    const [icons, setIcons] = useState<Array<string | undefined>>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        const loadIcons = async () => {
            const iconPromises = problemArray.map(problem =>
                import(`../assets/imgs/${problem.icon}.png`)
                .then(module => module.default)
                .catch(error => console.error(`Failed to load icon: ${problem.icon}`, error))
            );

            const iconSrcs = await Promise.all(iconPromises);
            setIcons(iconSrcs);
        };

        loadIcons();
    }, [problemArray]);

    const handleItemClick = (index: number) => {
        setSelectedId(index);
        setId(index + 1); // Adjusts state in parent component
    }

    return (
        <div className="h-full w-full flex flex-col">
            <div className="grid grid-cols-3 grid-rows-3 gap-2.5 max-h-[830px]">
                {icons.map((iconSrc, index) => (
                    <div 
                        key={index} 
                        className={`flex relative flex-col bg-white items-center justify-between border-grr ${selectedId === index ? 'border-4 border-orr' : 'border-2'} rounded-xl cursor-pointer hover:bg-slate-50`} 
                        onClick={() => handleItemClick(index)}
                    >
                        {problemArray[index]?.isProblem && <Yellow visible={true}/>}
                        {iconSrc && <img src={iconSrc} alt={problemArray[index]?.title} className='h-[95%] aspect-square'/>}
                        <div className="relative bottom-[10px] text-center font-semibold w-full">{problemArray[index].title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GridContainer;