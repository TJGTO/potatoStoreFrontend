import React from 'react';
import CustomButton from './custombutton';
import {
    Card,
    CardImage,
    Price,
    ButtonParent
} from '../Styles/productcard.elements';

function ProductCard(props:any){
    
    return(
        <>
            <Card>
                <CardImage src={props.img}/>
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <Price> &#x20b9; {props.price}</Price>
                <ButtonParent>
                    <CustomButton lebel = "Order Now"/>
                </ButtonParent>      
            </Card>
        </>
    )
}

export default ProductCard


