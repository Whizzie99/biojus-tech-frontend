import { useForm, ValidationError } from "@formspree/react";
import { StyledContactForm } from "./styles";

const ContactForm = () => {

    const [state, handleSubmit] = useForm("contactUs")

    if(state.succeeded){
        <h3>Thank you!</h3>
    }

    return (
        <StyledContactForm>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Full name" />
                <input type="email" field="email" prefix="Email" placeholder="email" />
                <ValidationError errors={state.errors}/>
                <textarea name="" id="" cols="30" rows="5" placeholder="message"></textarea>
                <button type="submit" disabled={state.submitting}>submit</button>
            </form>
        </StyledContactForm>
    );
}
 
export default ContactForm;