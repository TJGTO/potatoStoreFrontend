import React from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import styles from '../Styles/login.module.css';
import logo from '../Assets/Images/potatoes-1585060.jpg';
import { width } from '@mui/system';

const useStyles = makeStyles({
    inputBox: {
        width: "100%",
        height: "36px",
        opacity: "1",
    },
    signInButton: {
        background:"linear-gradient(90deg, #6B59BE 0%, #4D7EB7 51%, #3F4A8C 100%)",
        width: "100%",
        textTransform: "none",
    }
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
                <div className = {styles.passwordinputboxdiv}>
                    <p style={{fontWeight: "bold"}}>Password</p>
                    <TextField 
                        size="small" 
                        className={classes.inputBox} 
                        type="password"
                        placeholder="Enter password"
                    />
                </div>
                <div className = {styles.buttoninputboxdiv}>
                    <Button 
                        variant="contained" 
                        className = {classes.signInButton}
                    >
                        Sign in
                    </Button>
                </div>
                <div className = {styles.signuplinkbox}>
                    <p>Don't have an account? <a href = "#">Sign up</a></p>
                </div>
            </div>
        </>
    ) 
}

export default LoginPage