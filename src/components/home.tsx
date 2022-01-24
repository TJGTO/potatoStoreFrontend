import React from 'react';
import NavBar from './navbar';
import LinkBar from './linkbar';
import InfoSection from './infosection';
import ProductArea from './ProductArea';

function HomePage(){
   
    return(
        <>
            <NavBar/>
            <LinkBar/>
            <InfoSection/>
            <ProductArea/>
        </>
    )
}

export default HomePage