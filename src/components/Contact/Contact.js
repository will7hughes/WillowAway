import React from "react";
import { Container, Button, Form } from "react-bootstrap";
import { Fade } from "react-reveal";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"; // ES Modules import
import {fromCognitoIdentityPool} from "@aws-sdk/credential-providers";

function Contact() {
    // Set the AWS Region.
    const REGION = "us-east-2";
    // Create SES service object.
    const sesClient = new SESClient({ 
        region: REGION,
        credentials: fromCognitoIdentityPool({
            identityPoolId: 'us-east-2:2b6fc183-adab-4d08-8d2a-d0f3aee33639',
            clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
        })
    });

    sesClient.config.credentials.addLogin("")
    console.log(sesClient.config);
    console.log(sesClient.config.credentials.identityId);
    // sesClient.config.credentials.get(function() {
    //     console.log("Get Access and session token");
    //     // Credentials will be available when this function is called.
    //     var accessKeyId = sesClient.config.credentials.accessKeyId;
    //     var secretAccessKey = sesClient.config.credentials.secretAccessKey;
    //     var sessionToken = sesClient.config.credentials.sessionToken;
    // });
    // const s3Client = new S3Client({
    //     region: REGION,
    //     credentials: fromCognitoIdentityPool({
    //       clientConfig: { region: REGION }, // Configure the underlying CognitoIdentityClient.
    //       identityPoolId: 'IDENTITY_POOL_ID',
    //       logins: {
    //               // Optional tokens, used for authenticated login.
    //           },
    //     })
    //   });

    const createSendEmailCommand = (toAddress, fromAddress) => {
        return new SendEmailCommand({
          Destination: {
            /* required */
            CcAddresses: [
              /* more items */
            ],
            ToAddresses: [
              toAddress,
              /* more To-email addresses */
            ],
          },
          Message: {
            /* required */
            Body: {
              /* required */
              Html: {
                Charset: "UTF-8",
                Data: "This message body contains HTML formatting. It can, for example, contain links like this one: <a class=\"ulink\" href=\"http://docs.aws.amazon.com/ses/latest/DeveloperGuide\" target=\"_blank\">Amazon SES Developer Guide</a>.",
              },
              Text: {
                Charset: "UTF-8",
                Data: "This is the message body in text format.",
              },
            },
            Subject: {
              Charset: "UTF-8",
              Data: "Test email",
            },
          },
          Source: fromAddress,
          ReplyToAddresses: [
            /* more items */
          ],
        });
      };
      
    const sendEmail = async(email, message) => {
        const sendEmailCommand = createSendEmailCommand("will7hughes@gmail.com", "willowawayart@gmail.com");
        try {
            return await sesClient.send(sendEmailCommand);
        } catch (caught) {
            if (caught instanceof Error && caught.name === "MessageRejected") {
            /** @type { import('@aws-sdk/client-ses').MessageRejected} */
            const messageRejectedError = caught;
            return messageRejectedError;
            }
            throw caught;
        }
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