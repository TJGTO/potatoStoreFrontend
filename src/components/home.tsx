import React from 'react';
import NavBar from './navbar';
import LinkBar from './linkbar';
import InfoSection from './infosection';
import Divider from '@mui/material/Divider';

function HomePage(){
   
    return(
        <>
            <NavBar/>
            <LinkBar/>
            <Divider/>
            <InfoSection/>
        </>
    )
}

export default HomePage