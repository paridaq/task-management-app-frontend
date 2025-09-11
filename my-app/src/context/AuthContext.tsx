import { createContext, useState,  } from "react";
import { ReactNode } from "react";

export const AuthContext = createContext<{
    jwt: string;
    setJwt: (jwt: string) => void;
} | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [jwt, setJwt] = useState("");

    return (
        <AuthContext.Provider value={{ jwt, setJwt }}>
            {children}
        </AuthContext.Provider>
    );
};
