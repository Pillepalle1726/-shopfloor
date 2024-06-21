import React from 'react';
import Sidebar0 from './SidebarCompontents/Sidebar0';
import Sidebar1 from './SidebarCompontents/Sidebar1';
import Sidebar2 from './SidebarCompontents/Sidebar2';
import Sidebar3 from './SidebarCompontents/Sidebar3';
import Sidebar4 from './SidebarCompontents/Sidebar4';
import Sidebar5 from './SidebarCompontents/Sidebar5';
import Sidebar6 from './SidebarCompontents/Sidebar6';
import Sidebar7 from './SidebarCompontents/Sidebar7';
import Sidebar8 from './SidebarCompontents/Sidebar8';
import Sidebar9 from './SidebarCompontents/Sidebar9';



interface SidebarProps {
    id: number;
}

const Sidebar: React.FC<SidebarProps> = ({ id }) => {
    const renderSidebarComponent = () => {
        switch (id) {
            case 0:
            return <Sidebar0 />;
            case 1:
            return <Sidebar1 />;
            case 2:
            return <Sidebar2 />;
            case 3:
            return <Sidebar3 />;
            case 4:
            return <Sidebar4 />;
            case 5:
            return <Sidebar5 />;
            case 6:
            return <Sidebar6 />;
            case 7:
            return <Sidebar7 />;
            case 8:
            return <Sidebar8 />;
            case 9:
            return <Sidebar9 />;
            default:
            return <Sidebar0 />
        }
        }

    return (
        <div className="sidebar h-full overflow-auto max-h-[830px]">
                <div className='w-full h-full'>
                    {renderSidebarComponent()}
            </div>
        </div>
    );
};

export default Sidebar;