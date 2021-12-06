import styled from "styled-components";

export const TopNavBar = styled.div`
 display: flex;
  /* width: 100%; */
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding:20px;
  margin-top: 0.4em;
  background-color: rgba(255,255,255,0.3);
`;
export const Logo =styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  
  `;
 

export const LogoName=styled.span `
  font-size: 18px;
  text-transform: uppercase;
  margin-left: 0.5em;
  color: #000;
  text-shadow: 1px 1px 1px rgba(16, 16, 16, 0.1),
    1px 2px 1px rgba(16, 16, 16, 0.2), 1px 3px 1px rgba(16, 16, 16, 0.1),
    1px 4px 1px rgba(16, 16, 16, 0.2), 1px 5px 1px rgba(16, 16, 16, 0.1),
    1px 6px 1px rgba(16, 16, 16, 0.2);
`
export const NavItemGroup = styled.div`
  display: flex;
   justify-content: space-space-around;
  align-items: center;
 
`;
export const NavItem = styled.div`
      display: inline-block;
      padding:auto 5px;
      margin: auto 1em;
      
    .Link{
        text-decoration: none;
        color: black;
        font-size: 20px;
        font-weight: 600;
    };
    .active{
        color: green;
            
     }
`;
