import styled from 'styled-components'
// import Image from  'next/image'


const About = () => {
    return (
        <Wrapper>
            <Container>
                <h3><span>We get it.</span> It&apos;s more than just <span>value for money.</span> <br /> It&apos;s about <span>quality service</span></h3>

                <Content>
                    <h4>About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa aut illo qui sequi placeat sapiente perferendis nam molestias asperiores expedita esse corrupti voluptates soluta amet quas nostrum necessitatibus fugit, vero architecto tempore tenetur. Id ipsa laudantium expedita, repudiandae, mollitia ab molestias sunt ex nostrum itaque amet, eos libero veniam.</p>
                </Content>
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

const Content = styled.div`
`