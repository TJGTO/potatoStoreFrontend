import React from 'react';
import {
    Link,
    LinkMenu,
    LinkItem
} from '../Styles/linkbar.elements';

function LinkBar(){
   
    return(
        <Link>
            <LinkMenu>
                <LinkItem>Home</LinkItem>
                <LinkItem>Support</LinkItem>
                <LinkItem>Report</LinkItem>
                <LinkItem>Orders</LinkItem>
            </LinkMenu> 
        </Link>
    )
}

export default LinkBar


