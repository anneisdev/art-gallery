import Link from "next/link";
import styled from "styled-components";


export default function Layout({ children }) {
  return (

<Container>
      <main>{children}</main>
      <Nav>
      <StyledLink href="/">Spotlight</StyledLink>
      <StyledLink href="/Gallery">Gallery</StyledLink>
     <StyledLink href="/favorites">Favorites</Link>
      </Nav>
</Container>

  );
}

const Nav = styled.nav`
position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #f0f0f0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
text-decoration: none;
  flex: 1; 
  text-align: center; 
  padding: 1rem; 
  color: black;
  &:hover {
background-color: #9c9c9c;}
`;

const Container = styled.div`
display: flex;
justify-content: center;
`