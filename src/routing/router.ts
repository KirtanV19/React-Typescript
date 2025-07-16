import { createBrowserRouter } from "react-router-dom";
import { PLAIN_ROUTES, AUTH_ROUTES } from "./routes";
import Home from "../pages/home";
import EmailVerification from "../pages/email-verification";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-conditions";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import Register from "../pages/auth/register";
import ResetPassword from "../pages/auth/reset-password";
import PageNotFound from "../components/page-not-found";

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
  {
    ...AUTH_ROUTES.layout,
    children: [
      { ...AUTH_ROUTES.LOGIN, Component: Login },
      { ...AUTH_ROUTES.FORGOT_PASSWORD, Component: ForgotPassword },
      { ...AUTH_ROUTES.REGISTER, Component: Register },
      { ...AUTH_ROUTES.RESET_PASSWORD, Component: ResetPassword },
    ],
  },
  { path: "*", Component: PageNotFound },
]);
