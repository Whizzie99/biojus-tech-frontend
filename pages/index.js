import Link from 'next/link'
import styled from 'styled-components'
import {ArrowRightIcon} from '@primer/octicons-react'
import About from '../components/About'
import Services from '../components/Services'


export default function Home() {
  return (
    <>
      <Hero>
        <Container>
          <h1>Professional <br /> Cable TV installation</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat blanditiis alias commodi molestiae, magni deserunt</p>
          <Link href="#">
            <a>
              <span>Learn More</span>
              <ArrowRightIcon/>
            </a>
          </Link>
        </Container>
      </Hero>
      <About/>
      <Services/>
    </>
  )
}

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--white);
  height: 85vh;
  background-image: linear-gradient(to bottom, rgba(102,126,234,0.95), rgba(118, 75, 162, 0.95)), url('../images/cctv_camera.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 82%);
`

const Container = styled.div`
  width: 80%;
  margin: auto;

  h1{
    font-size: 2.5em;
  }

  p{
    margin-bottom: 20px;
  }

  a{
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--purple);
    font-size: 0.8em;
    text-decoration: none;
    text-transform: capitalize;
    background: var(--white);
    padding: 10px;
    width: 150px;
    margin: 20px 0;
    transition: all 0.3s ease;

    &:hover{
      border: 2px solid var(--white);
      color: var(--white);
      background: transparent;
    }
  }
`

