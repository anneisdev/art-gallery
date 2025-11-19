import Link from "next/link";
import { useRouter } from "next/router";
import styled, { css } from "styled-components";

export default function Layout({ children }) {
  const router = useRouter();
  return (
<>
      <ChildWrapper>

      {children}
      </ChildWrapper>

      <Nav>
        <StyledLink href="/" isActive={router.pathname === "/"}>
          Spotlight
        </StyledLink>
        <StyledLink href="/Gallery" isActive={router.pathname === "/Gallery"}>
          Gallery
        </StyledLink>
        <StyledLink
          href="/favorites"
          isActive={router.pathname === "/favorites"}
        >
          Favorites
        </StyledLink>
      </Nav>
</>
  );
}

const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  background-color: #f0f0f0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  height: 3rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  flex: 1;
  text-align: center;
  padding: 1rem;
  color: black;
  ${(props) =>
    props.isActive &&
    css`
      background-color: #c0c0c0;
      color: white;
    `}
  &:hover {
    background-color: #9c9c9c;
  }
`;



const ChildWrapper = styled.div`
  height: calc(100dvh - 3rem);
  overflow: scroll;
`;
