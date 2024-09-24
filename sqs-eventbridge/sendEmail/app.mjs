import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// Initialize the SES client
const client = new SESClient({ region: "us-east-1" });

export const handler = async (event) => {
  const toAddress = "nischith.818@gmail.com"; 
  const fromAddress = process.env.SES_EMAIL;

  // Input configuration for sending the email
  const input = {
    Source: fromAddress, 
    Destination: {
      ToAddresses: [toAddress],
    },
    Message: {
      Subject: {
        Charset: "UTF-8",
        Data: "Reminder to join 1:1 meeting", // Subject of the email
      },
      Body: {
        Text: {
          Charset: "UTF-8",
          Data: "Join the meeting urgently", // Plaintext version of the email body
        },
        Html: {
          Charset: "UTF-8",
          Data: "<h1>Join Zoom Meeting</h1><p>This is your scheduled 5 PM daily email!</p>", // HTML version of the email body
        },
      },
    },
  };

  // Command to send the email using SES
  const command = new SendEmailCommand(input);

  try {
    // Send the email and return the result
    const result = await client.send(command);
    console.log("Email sent successfully:", result);
    return { statusCode: 200, body: JSON.stringify("Email sent successfully") };
  } catch (error) {
    console.error("Error sending email:", error);
    return { statusCode: 500, body: JSON.stringify("Error sending email") };
  }
};
