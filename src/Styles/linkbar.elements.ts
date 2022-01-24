import styled from 'styled-components';
export const Link = styled.nav`
  display:flex;
  background: #fffffa;
  height: 50px;
  justify-content: space-between;
  width:100%;
  font-size: 1.2rem;
  position: sticky;
  top:60px;
  z-index: 999;
  border-bottom: 1px solid black;
`;
export const LinkMenu = styled.div`
  display:flex;
  justify-content: space-between;
  padding :0px 5px 0px 5px;
  margin-top:2px;
  margin-left:10%;
  width:12%;
`;
export const LinkItem = styled.div`
    padding:10px;
    color :  #000099;
    cursor: pointer;
    &:hover { 
        color :  black;
        border-bottom: 2px solid blue;
        background-color: #e6eeff;
    }
`;