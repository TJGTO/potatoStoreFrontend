import React from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import LinkBar from './linkbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {
    Nav,
    NavMenu,
    NavIcon,
    NavLogo
} from '../Styles/navbar.elements';

///currently just for developing purposes we pick some random images
const piclink = `https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbmF8ZW58MHx8MHx8&w=1000&q=80`;
const logolink = `https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png`;

function NavBar(){
   
    return(
        <Nav>
            <NavMenu>
                <NavLogo src={logolink}/> 
            </NavMenu>
            <NavMenu>
                <NavIcon>
                    <Badge badgeContent={4} color="secondary">
                        <ShoppingCartIcon sx={{ color: "white"}}/>
                    </Badge>
                </NavIcon>
                <NavIcon>
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon sx={{ color: "white"}}/>
                    </Badge>
                </NavIcon>
                <Avatar
                    alt="Remy Sharp"
                    src={piclink}
                    sx={{ width: 46, height: 46 }}
                /> 
            </NavMenu>
        </Nav>
    )
}

export default NavBar


