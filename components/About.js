import styled from 'styled-components'
import Image from  'next/image'

import aboutImg from '../public/images/about.jpg'


const About = () => {
    return (
        <Wrapper>
            <Container>
                <h3><span>We get it.</span> It&apos;s more than just <span>value for money.</span> <br /> It&apos;s about <span>quality service</span></h3>

                <ContentWrapper>
                    <Content>
                        <h4>About Us</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa aut illo qui sequi placeat sapiente perferendis nam molestias asperiores expedita esse corrupti voluptates soluta amet quas nostrum necessitatibus fugit, vero architecto tempore tenetur. Id ipsa laudantium expedita, repudiandae, mollitia ab molestias sunt ex nostrum itaque amet, eos libero veniam.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias perspiciatis soluta accusantium ea dignissimos, adipisci iusto a? Necessitatibus, facere harum esse dolore architecto porro maxime, nam, nostrum ipsa excepturi ratione!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat libero dolorem, blanditiis eaque sequi, accusantium, minima vel molestiae iure voluptatem iste laborum! Libero iure laboriosam nemo suscipit odit.
                        </p>
                    </Content>
                    <ContentImg>
                        <Image src={aboutImg} alt="aboutImg" layout="fill" placeholder="blur" objectFit="cover"/>
                    </ContentImg>
                </ContentWrapper>
            </Container>
        </Wrapper>
    );
}
 
export default About;

const Wrapper = styled.div`
    margin: 20px 0;
`

const Container = styled.div`
    width: 80%;
    margin: auto;

    h3{
        font-size: 1.8em;
        text-align: center;

        span{
            background-image: var(--gradient);
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent; 
            -moz-text-fill-color: transparent;
        }
    }
`

const ContentWrapper = styled.div`
    @media(min-width: 1200px){
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 50px;
    }
`

const Content = styled.div`
    padding: 20px 30px;
    padding-right: 40px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);

    h4{
        font-size: 1.4em;
        margin: 7px 0;
        background-image: var(--gradient);
        -webkit-background-clip: text;
        -moz-background-clip: text;
        -webkit-text-fill-color: transparent; 
        -moz-text-fill-color: transparent;
    }

    @media(min-width: 1200px){
        width: 40%;
    }
`

const ContentImg = styled.div`
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    position: relative;
    width: 100%;
    height: 300px;

    @media(min-width: 1200px){
        top: 80px;
        left: -33px;
        width: 40%;
        height: 300px;
    }
`