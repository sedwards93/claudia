import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  position: relative;
  height: 55px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: purple;
    text-transform: uppercase;
    font-size: 40px;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <h1>Claudia Lee</h1>
      <Burger />
    </Nav>
  );
};

export default Navbar;
