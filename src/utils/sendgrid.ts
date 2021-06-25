import sgMail from "@sendgrid/mail";
import { NoSendGridEnvError } from "../errors/utils/NoSendGridEnvError";

interface IEmailCredentials {
  to: string;
  title: string;
  message: string;
}

export function sendEmail({ to, title, message }: IEmailCredentials) {
  if (!process.env.SENDGRID_API_KEY || !process.env.SENDGRID_EMAIL) {
    throw new NoSendGridEnvError();
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const email = {
    to,
    from: process.env.SENDGRID_EMAIL,
    subject: title,
    text: message,
  };

  sgMail.send(email).catch((error) => {
    throw new Error(error);
  });
}

export function sendWelcomeEmail(user: { toEmail: string; name: string }) {
  sendEmail({
    to: user.toEmail,
    title: "Bem vindo ao NLW Valoriza!",
    message: `Seja muito bem vindo, ${user.name}!`,
  });
}
