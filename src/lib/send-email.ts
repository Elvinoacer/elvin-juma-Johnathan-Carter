import emailjs from "@emailjs/browser";

interface EmailParams {
  to_name: string;
  from_name: string;
  message: string;
}
export async function sendEmail(EmailParams: EmailParams) {
  try {
    const response = await emailjs.send(
      "service_11i9il7",
      "template_ei38gu3",
      { ...EmailParams },
      {
        publicKey: "OaCgC9IA2vuOHUqPT",
      }
    );

    console.log("SUCCESS!", response.status, response.text);
    return {
      success: true,
    };
  } catch (error) {
    console.log("FAILED...", error);
    return {
      success: false,
    };
  }
}
