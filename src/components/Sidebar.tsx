import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useHoverContext } from './HoverContext';
import './Sidebar.css';


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
    console.log(hoveredText)


    return (
        <div className="sidebar flex text-start items-center justify-center h-screen w-[750px] left-0 overflow-auto overflow-y-scroll scrollbar-w-2 scrollbar-track-gray-100 scrollbar-thumb-rounded scrollbar-thumb-gray-400" style={{height: 'calc(100vh - 80px)'}}>
            <div className=" flex-grow flex-col pr-12">
                <div className='content-wrappe-sidebar bg-white rounded-xl text-black p-12 max-h-[800px]'>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
