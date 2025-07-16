import { APP_TITLE } from "../utils/constants";

export const PLAIN_ROUTES = {
  root: {
    path: "/",
    url: "/",
    title: APP_TITLE,
  },
  layout: {
    path: "/",
  },
  HOME: {
    index: true,
    title: "Home",
    url: "/",
  },
  EMAIL_VERIFICATION: {
    title: "Email Verification",
    path: "/email-verification",
    url: "/email-verification",
  },
  PRIVACY_POILICY: {
    title: "Privacy Policy",
    path: "/privacy-policy",
    url: "/privacy-policy",
  },
  TERMS_AND_CONDITIONS: {
    title: "Terms and Condtions",
    path: "/terms-and-conditions",
    url: "/terms-and-conditions",
  },
};
