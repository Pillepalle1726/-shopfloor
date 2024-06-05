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
        <div className=''>
            <div className="grid grid-cols-3 gap-2">
                {icons.map((iconSrc, index) => (
                    <div key={index} className={`relative aspect-square	flex flex-col bg-white items-star justify-between border-grr ${selectedId === index ? 'border-4 border-orr' : 'border-2'} rounded-xl cursor-pointer hover:bg-slate-50`} onClick={() => handleItemClick(index)} >
                        {problemArray[index]?.isProblem && <Yellow visible={true}/>}
                        {iconSrc && <img src={iconSrc} alt={problemArray[index]?.title} className='h-auto w-auto max-h-72 aspect-square'/>}
                        <div className="relative bottom-0 text-center font-semibold">{problemArray[index].title}</div>
                    </div>
                    // <div className="text-center font-bold">{problemArray[index].title}</div>
                ))}
            </div>
        </div>
    );
};

export default GridContainer;