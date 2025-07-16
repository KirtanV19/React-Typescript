import { createBrowserRouter } from "react-router-dom";
import { PLAIN_ROUTES } from "./routes";
import Home from "../pages/home";
import EmailVerification from "../pages/email-verification";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-conditions";

export const router = createBrowserRouter([
  {
    ...PLAIN_ROUTES.layout,
    children: [
      { ...PLAIN_ROUTES.HOME, Component: Home },
      { ...PLAIN_ROUTES.EMAIL_VERIFICATION, Component: EmailVerification },
      { ...PLAIN_ROUTES.PRIVACY_POILICY, Component: PrivacyPolicy },
      { ...PLAIN_ROUTES.TERMS_AND_CONDITIONS, Component: TermsAndConditions },
    ],
  },
]);
