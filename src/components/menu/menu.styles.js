import styled from "styled-components";

const StyledHamburger = styled.img`
width:24px;
cursor: pointer;
opacity: ${({ $isOpen }) => ($isOpen ? '0.25' : '1')};
`;

const StyledMenu = styled.ul`
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  flex-direction: column;
  background-color: #070724;
  z-index: 1;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
`;
export {StyledHamburger, StyledMenu}