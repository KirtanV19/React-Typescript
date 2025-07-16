import { createContext, type ReactNode } from "react";

const AuthContext = createContext<unknown>(undefined); // context hold the value 'unknown' it means can not use value without narrowing or type assertions, and default value is undefined.

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };

/*

1. const AuthContext = createContext<unknown>(undefined); 

-> context hold the value 'unknown' it means can not use value without narrowing or type assertions, and default value is undefined.

Optional:-

import React, { createContext } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

*/
