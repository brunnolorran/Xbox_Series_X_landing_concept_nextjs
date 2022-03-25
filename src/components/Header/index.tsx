import Image from 'next/image';
import NavLink from './NavLink';
import { Container, ButtonPrimary } from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <Image src={logo} alt="logo xbox x" width={208} height={25} />
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Sobre mim" path="/about" />
        <NavLink title="Jobs" path="/jobs" />
        <NavLink title="Habilidades" path="/skills" />
      </ul>
      <ButtonPrimary>Contato</ButtonPrimary>
    </Container>
  );
}

export default Header;
