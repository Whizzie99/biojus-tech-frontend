import styled from 'styled-components'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
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
        </>
    );
}
 
export default Navbar;

const Container = styled.div`
    width: 80%;
    margin: auto;
    overflow: hidden;
    background: transparent;
`

const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background: transparent;
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
                color: var(--black);
                text-decoration: none;
                text-transform: capitalize;
            }
        }
    }

`