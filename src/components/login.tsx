import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import styles from '../Styles/login.module.css';
import logo from '../Assets/Images/potatoes-1585060.jpg';

const useStyles = makeStyles({
    inputBox: {
        width: "100%",
        height: "36px",
        opacity: "1",
    },
  });

const LoginPage=()=>{
    const classes = useStyles();
    return(
        <>
            <div className= {styles.splitLeft}>
                <img src = {logo} style={{height:"100%",width:"100%"}} alt = "sack of potatoes"></img>
            </div>
            <div className= {styles.splitRight}>
                <div className = {styles.emailinputboxdiv}>
                    <p style={{fontWeight: "bold"}}>Email</p>
                    <TextField 
                        size="small" 
                        className={classes.inputBox} 
                        placeholder="Enter your email"
                    />
                </div>
            </div>
        </>
    ) 
}

export default LoginPage