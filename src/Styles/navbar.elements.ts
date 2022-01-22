import styled from 'styled-components';

export const Nav = styled.nav`
  display:flex;
  background: #101522;
  height: 60px;
  justify-content: space-between;
  width:100%;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavMenu = styled.div`
  display:flex;
  justify-content: space-between;
  padding :5px;
  margin-top:2px;
  width:12%;
`;
export const NavIcon = styled.div`
  padding:10px;
`;
export const NavLogo = styled.img`
  padding-left:25%;
`;