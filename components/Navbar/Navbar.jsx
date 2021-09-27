import Link from 'next/link'
import { Container, Nav, Logo, NavList } from './styles';

const Navbar = () => {
    return (
            <Container>
                <Nav>
                    <Logo>
                        <h5>Logo</h5>
                    </Logo>
                    <NavList>
                        <ul>
                            <li>
                                <Link href="/">
                                    <a>home</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <a>about</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <a>shop</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <a>services</a>
                                </Link>
                            </li>

                            <li>
                                <Link href="#">
                                    <a>contact</a>
                                </Link>
                            </li>
                        </ul>
                    </NavList>
                </Nav>
            </Container>
    );
}
 
export default Navbar;

