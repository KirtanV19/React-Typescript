import { ROLES } from "../utils/constants";

export const REDIRECTION = {
  [ROLES.ADMIN]: PRIVATE_ROUTES.DASHBOARD.url,
  [ROLES.USER]: PRIVATE_ROUTES.ACCOUNT.url,
};
