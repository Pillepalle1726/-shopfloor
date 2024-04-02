import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHoverContext } from './HoverContext';



const Sidebar: React.FC = () => {
    const [markdownContent, setMarkdownContent] = useState('');
    const { hoveredText } = useHoverContext();
    // useEffect to load the Markdown content after component mounts
    useEffect(() => {
        const loadMarkdownContent = async () => {
            setMarkdownContent(hoveredText);
        };
        
        loadMarkdownContent();
    }, [hoveredText]); 



    return (
        <div className="sidebar">
            <div className="content text-start flex-grow flex-col">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Sidebar;
