import { EmailService } from "src/email/email.service";
import activationEmailTemplate from "src/email/templates/activation-email";

export async function sendActivationEmail(
  email: string, 
  token: string, 
  fullName: string,
  emailService: EmailService,
  
) {
  const activationBaseUrl = process.env.BASE_URL

  const encodedToken = Buffer.from(token).toString('base64');
  const activationLink = `${activationBaseUrl}/Active_Account/${encodedToken}`;
  const html = activationEmailTemplate(activationLink, fullName); 
  await emailService.sendEmail(email, 'Activate Your Account', html);
}