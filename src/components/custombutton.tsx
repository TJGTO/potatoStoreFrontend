import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    OrderNowButton: {
        background:"linear-gradient(90deg, #6B59BE 0%, #4D7EB7 51%, #3F4A8C 100%)",
        color:"#ffff",
        textTransform: "none",
        '&:hover': {
            background: "#ffff",
            border: "2px solid #0033cc",
            color:"black",
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        },
        
    },
});

function CustomButton(props:any){
    const classes = useStyles();

    return (
        <Button className = {classes.OrderNowButton} onClick = {props.submitFunction}>
            {props.lebel}
        </Button>
    );
}

export default CustomButton