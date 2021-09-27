import Image from "next/image";
import { Wrapper, Container, Title, SubText, MainContent, ContactForm, MapContent } from "./styles";


import mapImage from '../../public/images/map.jpg'

const Footer = () => {
    return (
        <Wrapper>
            <Container>
                <Title>Connect with us</Title>
                <SubText>you can reach out to us or drop by our store for any inquiries</SubText>
                <MainContent>
                    <ContactForm>
                        <form action="">
                            <input type="text" placeholder="Full name" />
                            <input type="email" placeholder="email" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="message"></textarea>
                            <button>submit</button>
                        </form>
                    </ContactForm>
                    <MapContent>
                        <Image src={mapImage} alt="map Image" layout="fill" placeholder="blur" objectFit="cover"/>
                    </MapContent>
                </MainContent>
            </Container>
        </Wrapper>
    );
}

export default Footer;

