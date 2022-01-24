import styled from 'styled-components';

export const Parea = styled.div`
    color: #101522;
    padding: 0px 0;
    background: #fffffa;
    color : black;
`;
export const Prow = styled.div`
    display : flex;
    justify-content: flex-start;
    margin-left: 15px;
    @media screen and (max-width: 768px) {
    flex-direction:column;
    }
`;
export const Heading = styled.h2`
    padding-left: 65px;
    padding-bottom: 25px;
`;