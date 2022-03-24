import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  justify-content: space-between;

  ul {
    display: flex;
    gap: 2.5rem;
    align-items: center;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textLight};
    transition: 0.05s;

    &:hover {
      color: ${props => props.theme.primary};
      text-shadow: 0 0 15px ${props => props.theme.primary};
    }
  }
`;

export const ButtonPrimary = styled.div`
  pointer-events: auto;
  cursor: pointer;
  background: ${props => props.theme.primary};
  border: none;
  padding: 1.2rem 2rem;
  color: ${props => props.theme.background};
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;

  &:hover {
    box-shadow: 0 0 15px ${props => props.theme.primary};
  }
`;
