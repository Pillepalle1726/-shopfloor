import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface SidebarProps {
    id: number;
}

const Sidebar: React.FC<SidebarProps> = ({ id }) => {
    const [markdownContent, setMarkdownContent] = useState('');

    // Example of fetching Markdown content dynamically
    const loadMarkdownContent = async (id: number) => {
        const response = await fetch(`../content/${id}.md`);
        const text = await response.text();
        return text;
    };

    useEffect(() => {
        loadMarkdownContent(id).then(setMarkdownContent);
    }, [id]);

    return (
        <div className="sidebar h-auto overflow-auto max-h-[830px]">
            <div className="content text-start w-full flex items-center justify-center h-full">
                <div className='w-full h-full'>
                    <ReactMarkdown
                        children={markdownContent}
                        components={{
                            a: ({ node, ...props }) => (
                                <a {...props} target="_blank" rel="noopener noreferrer" />                            )
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;