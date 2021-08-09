import styled from 'styled-components'
import Link from 'next/link'

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

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999
`

const Nav = styled.div`
    margin: auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    background: transparent;
    padding: 10px 0;

    @media(min-width: 1200px){
        width: 80%;
    }
`

const Logo = styled.div`

`

const NavList = styled.div`
    & ul{
        display: flex;

        li{
            list-style: none;
            margin: 0 10px;

            a{
                color: var(--white);
                text-decoration: none;
                text-transform: capitalize;
            }
        }
    }

`