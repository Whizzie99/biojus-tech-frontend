import { StyledContactForm } from "./styles";

const ContactForm = () => {
    return (
        <StyledContactForm>
            <form action="">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="email" />
                <textarea name="" id="" cols="30" rows="5" placeholder="message"></textarea>
                <button>submit</button>
            </form>
        </StyledContactForm>
    );
}
 
export default ContactForm;