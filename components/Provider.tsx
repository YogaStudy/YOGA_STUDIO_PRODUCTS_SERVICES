"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
// import { Session } from "next-auth";
interface ProviderProps {
  children: React.ReactNode;
  // session?: Session | null | undefined;
}
const Provider = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Provider;
