import { createBrowserRouter, redirect } from "react-router-dom";
import { PLAIN_ROUTES, AUTH_ROUTES, PRIVATE_ROUTES } from "./routes";
import Home from "../pages/home";
import EmailVerification from "../pages/email-verification";
import PrivacyPolicy from "../pages/privacy-policy";
import TermsAndConditions from "../pages/terms-and-conditions";
import Login from "../pages/auth/login";
import ForgotPassword from "../pages/auth/forgot-password";
import Register from "../pages/auth/register";
import ResetPassword from "../pages/auth/reset-password";
import PageNotFound from "../components/page-not-found";
import PlainLayout from "../layouts/plain-layout";
import AuthLayout from "../layouts/auth-layout";
import DashboardLayout from "../layouts/dashboard-layout/navbar";
import Dashboard from "../pages/dashboard";
import Settings from "../pages/settings";
import Account from "../pages/account";

const authLayoutLoder = () => {};
const dashboardLayoutLoader = () => {};
const dashboardPageLoader = (roles: Array<string>) => {};
export const router = createBrowserRouter([
  {
    ...PLAIN_ROUTES.layout,
    Component: PlainLayout,
    children: [
      { ...PLAIN_ROUTES.HOME, Component: Home },
      { ...PLAIN_ROUTES.EMAIL_VERIFICATION, Component: EmailVerification },
      { ...PLAIN_ROUTES.PRIVACY_POILICY, Component: PrivacyPolicy },
      { ...PLAIN_ROUTES.TERMS_AND_CONDITIONS, Component: TermsAndConditions },
    ],
  },
  {
    ...AUTH_ROUTES.layout,
    Component: AuthLayout,
    loader: authLayoutLoder,
    children: [
      {
        ...PLAIN_ROUTES.root,
        loader: () => {
          return redirect(AUTH_ROUTES.LOGIN.url);
        },
      },
      { ...AUTH_ROUTES.LOGIN, Component: Login },
      { ...AUTH_ROUTES.FORGOT_PASSWORD, Component: ForgotPassword },
      { ...AUTH_ROUTES.REGISTER, Component: Register },
      { ...AUTH_ROUTES.RESET_PASSWORD, Component: ResetPassword },
    ],
  },
  {
    ...PRIVATE_ROUTES.layout,
    Component: DashboardLayout,
    loader: dashboardLayoutLoader,
    children: [
      {
        ...PRIVATE_ROUTES.DASHBOARD,
        Component: Dashboard,
        loader: dashboardPageLoader(PRIVATE_ROUTES.DASHBOARD.roles),
      },
      {
        ...PRIVATE_ROUTES.SETTINGS,
        Component: Settings,
        loader: dashboardPageLoader(PRIVATE_ROUTES.SETTINGS.roles),
      },
      {
        ...PRIVATE_ROUTES.ACCOUNT,
        Component: Account,
        loader: dashboardPageLoader(PRIVATE_ROUTES.ACCOUNT.roles),
      },
    ],
  },
  { path: "*", Component: PageNotFound },
]);
