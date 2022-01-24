import styled from 'styled-components';

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 250px;
    margin: auto;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 5px;
    border-radius: 25px;
    overflow:hidden;
    @media screen and (max-width: 768px) {
        flex-direction:column;
        max-width: 350px;
    }
    &:hover { 
        box-shadow: 0 12px 12px 12px rgba(0, 0, 0, 0.2);
    }
`;
export const Price = styled.p`
    color: grey;
    font-size: 22px;
    
`;
export const CardImage = styled.img`
    width:100%;
    height: 42%;
    
    @media screen and (max-width: 768px) {
        height: 35%;
    }
`;
export const ButtonParent = styled.div`
    @media screen and (max-width: 768px) {
        margin-top: -3% !important;
        padding : 5px;
    }
`;
