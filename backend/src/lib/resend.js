import { Resend } from "resend";
import { ENV } from "./env.js";

let resendClient = null;
let sender = null;

if (ENV.RESEND_API_KEY) {
  resendClient = new Resend(ENV.RESEND_API_KEY);

  sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_NAME,
  };
}

export { resendClient, sender };
