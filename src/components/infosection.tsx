import React from 'react';
import { Container } from '.././globalStyles';
import CustomButton from './custombutton';
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


const intro=`Potato store of Raina has the fresh & best potatoes.
            Here you can get different types of potatoes in much lesser price from the market value
            `;

function InfoSection() {
    
    function test(){
        console.log("HI");
    }

    return (
        <>
        <InfoSec>
            <Container>
            <InfoRow>
                <InfoColumn>
                <TextWrapper>
                    <Heading>Delicious Potatos</Heading>
                    <Subtitle>{intro}</Subtitle>
                    <CustomButton lebel ="Order Now" submitFunction={test}/>     
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