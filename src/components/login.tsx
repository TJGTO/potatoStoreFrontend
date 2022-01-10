import React from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles/login.module.css';


const LoginPage=()=>{
   
    return(
        <>
             <div className = {styles.styleLogin}></div>
            <div>Welcome to the Login Page</div>
            <p>
                <Button variant="contained">Button</Button>
            </p>

        </>
    ) 
}

export default LoginPage