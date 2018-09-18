import React from 'react';
import styles from './ChatDrawer.css';
import KendoChat from '../KendoChat/KendoChat';

const chatDrawer = (props) => {
    return (
        
        <div className="side-drawer">
            <KendoChat/>
         </div>
        
    );
}

export default chatDrawer;
