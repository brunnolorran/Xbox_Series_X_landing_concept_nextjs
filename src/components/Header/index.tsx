import Image from 'next/image';
import NavLink from './NavLink';
import { Container, ButtonPrimary } from './styles';

import logo from '../../assets/logo.png';

function Header() {
  return (
    <Container>
      <Image src={logo} alt="logo xbox x" width={144} height={44} />
      <ul>
        <NavLink title="Browser" path="/" />
        <NavLink title="Games" path="/games" />
        <NavLink title="Controller" path="/controller" />
        <NavLink title="Inside" path="/inside" />
      </ul>
      <ButtonPrimary>Order console</ButtonPrimary>
    </Container>
  );
}

export default Header;
