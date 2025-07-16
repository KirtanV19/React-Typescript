import { jwtDecode } from "jwt-decode";

export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export interface LogError {
  (error: unknown): void;
}

export const logError: LogError = (error) => {
  console.error("Error:", error);
};

export const errorHandler = (
  handleTry: () => unknown,
  handleCatch?: (error: unknown) => unknown,
  handleFinally?: () => void
) => {
  try {
    const response = handleTry();
    return response;
  } catch (error) {
    logError(error);
    if (handleCatch && typeof handleCatch === "function") {
      return handleCatch(error);
    }
    return null;
  } finally {
    if (handleFinally && typeof handleFinally === "function") {
      handleFinally();
    }
  }
};

export const decodeToken = (token: string | null = null) => {
  if (!token) {
    return null;
  }
  const decoded = jwtDecode(token);
  return decoded;
};
