import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_your_id'; // Replace with your EmailJS service ID
const TEMPLATE_ID = 'template_your_id'; // Replace with your EmailJS template ID
const PUBLIC_KEY = 'your_public_key'; // Replace with your EmailJS public key

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (formData: EmailData): Promise<boolean> => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_name: 'Saksham Singh Rathore',
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    if (response.status === 200) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Email sending failed:', error);
    return false;
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  emailjs.init(PUBLIC_KEY);
};
