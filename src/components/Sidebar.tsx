import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import content from "./../content/1.md";

interface SidebarProps {
    id: number;
}


const Sidebar: React.FC<SidebarProps> = ({ id }) => {
    const [markdownContent, setMarkdownContent] = useState('');
    // const { hoveredText } = useHoverContext();
    // Example of fetching Markdown content dynamically
    console.log(content)
    const loadMarkdownContent = async (id: number) => {
        console.log(`./content/${id}.md`)
        const response = await fetch(`../content/${id}.md`);
        const text = await response.text();
        return text;
    };
    useEffect(() => {
        loadMarkdownContent(id).then(setMarkdownContent);
    }, [id]);


    return (
        <div className="sidebar">
            <div className="content text-start flex-grow flex-col pt-6 ">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>
        </div>
    );
};

export default Sidebar;
