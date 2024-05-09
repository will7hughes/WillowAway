import React, {useState} from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Fade } from "react-reveal";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";
import Toast from 'react-bootstrap/Toast';

function Contact() {
    
  const [showA, setShowA] = useState(false);
  const toggleShowA = () => setShowA(!showA);

    // Set the AWS Region.
    const REGION = "us-east-2";
    // Create SES service object.
    const sesClient = new SESClient({ 
        region: REGION,
        credentials: fromCognitoIdentityPool({
            identityPoolId: 'us-east-2:23d16dbd-bfb2-4a3f-a823-ee90d24d3cb1',
            clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
        })
    });

    const createSendEmailCommand = (email, message) => {
        return new SendEmailCommand({
          Destination: {
            /* required */
            CcAddresses: [
                /* more items */
            ],
            ToAddresses: [
                "willowawayart@gmail.com",
                /* more To-email addresses */
            ],
          },
          Message: {
            /* required */
            Body: {
                Text: {
                Charset: "UTF-8",
                Data: message,
                },
            },
            Subject: {
                Charset: "UTF-8",
                Data: "Willow Away Portfolio Message from " + email,
            },
          },
          Source: "willowawayart@gmail.com",
          ReplyToAddresses: [
            /* more items */
          ],
        });
      };
      
    const sendEmail = async(emailElement, messageElement) => {

        const sendEmailCommand = createSendEmailCommand(emailElement.value, messageElement.value);
        try {
            await sesClient.send(sendEmailCommand);
            toggleShowA();
            emailElement.value = "";
            messageElement.value = "";
            document.getElementById("message-toast-body").classList = "message-toast-success";
            document.getElementById("message-toast-body").innerHTML = "Message Sent"
        } catch (caught) {
            if (caught instanceof Error && caught.name === "MessageRejected") {
            /** @type { import('@aws-sdk/client-ses').MessageRejected} */
                const messageRejectedError = caught;
                console.error(messageRejectedError)
                toggleShowA();
                document.getElementById("message-toast-body").innerHTML = "Message Failed to Send"
                document.getElementById("message-toast-body").classList = "message-toast-failed";
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        sendEmail(event.currentTarget.elements[0], event.currentTarget.elements[1])
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
                        <Form.Control as="textarea" placeholder="Your message" rows={6} />
                    </Form.Group>
                    <Button className="contact-send-btn" type="submit">Send</Button>
                </Form>
                <Toast id="message-toast" data-bs-theme="dark" show={showA} onClose={toggleShowA} delay={3000} autohide>
                    <Toast.Body id="message-toast-body">Test Body</Toast.Body>
                </Toast>
            </Container>
        </Container>
    );
}

export default Contact;