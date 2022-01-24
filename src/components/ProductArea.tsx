import React from 'react';
import styled from 'styled-components';
import ProductCard from './productCard';
import ChandramukhiImg from '../Assets/Images/potato2.jpg';
import JotiImg from '../Assets/Images/potato3.jpg';
import PokhrajImg from '../Assets/Images/potato4.jpg';
import {
    Parea,
    Heading,
    Prow
} from '../Styles/productarea.elements';

const data = [
    {
        id:1,
        name :"Chandramukhi",
        description:"Buy freash Chandramukhi potato , best bread of potatoes",
        price : 20,
        img : ChandramukhiImg
    },
    {
        id:2,
        name :"Joti",
        description:"Buy freash joti potato , best bread of potatoes",
        price : 18,
        img : JotiImg
    },
    {
        id:3,
        name :"Pokhraj",
        description:"Buy freash Pokhraj potato , best bread of potatoes",
        price : 16,
        img : PokhrajImg
    },
];
function ProductArea(){

    return(
        <>
            <Parea>
                <Heading>Best Products</Heading>
                <Prow>
                    {
                       data.map(item=>(
                            <ProductCard 
                                name={item.name}
                                description={item.description} 
                                price={item.price}
                                img = {item.img}
                            />
                       )) 
                    }
                </Prow>
            </Parea>
        </>
    )
}

export default ProductArea
