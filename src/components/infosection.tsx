import React from 'react';
import { Container } from '.././globalStyles';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import InfoSecImg from '../Assets/Images/istockphoto-496359598-170667a-removebg-preview.png';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img
} from '../Styles/infosection.elements';

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
const intro=`Potato store of Raina has the fresh & best potatoes.
            Here you can get different types of potatoes in much lesser price from the market value
            `;
function InfoSection() {
    const classes = useStyles();
    return (
        <>
        <InfoSec>
            <Container>
            <InfoRow>
                <InfoColumn>
                <TextWrapper>
                    <Heading>Delicious Potatos</Heading>
                    <Subtitle>{intro}</Subtitle>
                    <Button className = {classes.OrderNowButton}>
                        Order Now
                    </Button>
                </TextWrapper>
                </InfoColumn>
                <InfoColumn>
                <ImgWrapper>
                    <Img src={InfoSecImg} />
                </ImgWrapper>
                </InfoColumn>
            </InfoRow>
            </Container>
        </InfoSec>
        </>
    );
}

export default InfoSection;