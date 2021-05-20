import styled from "styled-components";
import Burger from "./Burger";
import Link from "next/link";

const Nav = styled.nav`
  position: relative;
  height: 55px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
    text-transform: uppercase;
    font-size: 30px;
    letter-spacing: 0.3em;
    word-spacing: 0.4em;
    padding-left: 20px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Link href="/">
        <a>
          <h1>Claudia Lee</h1>
        </a>
      </Link>
      <Burger />
    </Nav>
  );
};

export default Navbar;
