"use clinet";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./componets/Navbar";
import { TodoContextProvider } from "../app/context/todoContext";
import { NextAuthProvider } from "./Provider";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Todo App",
  description: "This is the NextJs and TypeScript",
  icons: {
    icon: "/favion.ico",
  },
};

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        {/* <NextAuthProvider> */}
        {/* <SessionProvider session={session}> */}
          <TodoContextProvider>
            <Navbar />
            {children}
          </TodoContextProvider>
        {/* </SessionProvider> */}
        {/* </NextAuthProvider> */}
      </body>
    </html>
  );
}
