import React,{useState} from 'react';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import styles from '../Styles/login.module.css';
import logo from '../Assets/Images/potatoes-1585060.jpg';
import {loginWithEmailAndPassword} from '../services/JWTlogin';
import CircularProgress from '@mui/material/CircularProgress';

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
    },
    signInButtonloading: {
        background:"linear-gradient(90deg, #6B59BE 0%, #4D7EB7 51%, #3F4A8C 100%)",
        width: "100%",
        height: "36px",
        textTransform: "none",
        opacity: "0.4",
    }
});

const LoginPage=()=>{

    const classes = useStyles();
    const [loading , setloading] = useState(false);
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');

    function authorization(){
        setloading(true);
        loginWithEmailAndPassword(email,password).then((response) => {
           setloading(false);
           window.location.href = window.location.origin +"/home";
        }).catch((error)=>{
            setloading(false);
        });
    }

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
                        onChange={(e)=>setemail(e.target.value)}
                    />
                </div>
                <div className = {styles.passwordinputboxdiv}>
                    <p style={{fontWeight: "bold"}}>Password</p>
                    <TextField 
                        size="small" 
                        className={classes.inputBox} 
                        type="password"
                        placeholder="Enter password"
                        onChange={(e)=>setpassword(e.target.value)}
                    />
                </div>
                <div className = {styles.buttoninputboxdiv}>
                    {!loading ?
                        <Button 
                            variant="contained" 
                            className = {classes.signInButton}
                            onClick = {authorization}
                        >
                            Sign in
                        </Button>
                        :
                        <Button 
                            variant="contained" 
                            className = {classes.signInButtonloading}
                        >
                            <CircularProgress color="inherit" size={30}/>
                        </Button>
                    }
                </div>
                <div className = {styles.signuplinkbox}>
                    <p>Don't have an account? <a href = "#">Sign up</a></p>
                </div>
            </div>
        </>
    ) 
}

export default LoginPage