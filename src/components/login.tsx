import React from 'react';
import Button from '@mui/material/Button';
import styles from '../Styles/login.module.css';
import logo from '../Assets/Images/potatoes-1585060.jpg';


const LoginPage=()=>{
   
    return(
        <>
            <div className= {styles.splitLeft}>
                <img src = {logo} style={{height:"100%",width:"100%"}} alt = "sack of potatoes"></img>
            </div>
            <div className= {styles.splitRight}></div>

          

        </>
    ) 
}

export default LoginPage