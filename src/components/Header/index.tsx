import NavLink from './NavLink';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Browser" path="/" />
        <NavLink title="Games" path="/games" />
        <NavLink title="Controller" path="/controller" />
        <NavLink title="Inside" path="/inside" />
      </ul>
    </Container>
  );
}

export default Header;
