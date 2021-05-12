import styled from "styled-components";
import Link from "next/link";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 0px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #181717;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: -16px;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/work">
          <a>WORK</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNav;