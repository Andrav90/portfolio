import React from 'react';
import DesktopVersion from '../../components/desktopVersion/DesktopVersion';
import MobileVersion from '../../components/mobileVersion/MobileVersion';

function Home() {
    const { innerWidth: width } = window;
    
    if(width <= 415){
        return (
            <MobileVersion />
            )
    } else {
        return (
            <DesktopVersion />
        );
    };
};

export default Home;