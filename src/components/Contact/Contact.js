import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Fade } from "react-reveal";

function Contact() {

    function sendEmail(email, message) {

    }

    function handleSubmit(event) {
        event.preventDefault()
        sendEmail(event.currentTarget.elements[0].value, event.currentTarget.elements[1].value)
      }

    return(
        <Container id="contact" fluid className="contact">
            <Container>
                <h1>Get in Touch</h1>
                <Form data-bs-theme="dark" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" id="email">
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" id="message">
                        <Form.Control as="textarea" placeholder="Your message" rows={3} />
                    </Form.Group>
                    <Button className="contact-send-btn" type="submit">Send</Button>
                </Form>
            </Container>
        </Container>
    );
}

export default Contact;