import React, { createContext, useContext, useState, useEffect } from "react";

interface AccessContextType {
  isAuthenticated: boolean;
  login: (code: string) => boolean;
  logout: () => void;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const ACCESS_CODE = "2026"; // Simple hardcoded access code for MVP

export function AccessProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("course_portal_auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = (code: string) => {
    if (code === ACCESS_CODE) {
      localStorage.setItem("course_portal_auth", "true");
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem("course_portal_auth");
    setIsAuthenticated(false);
  };

  if (loading) return null;

  return (
    <AccessContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AccessContext.Provider>
  );
}

export function useAccess() {
  const context = useContext(AccessContext);
  if (context === undefined) {
    throw new Error("useAccess must be used within an AccessProvider");
  }
  return context;
}
