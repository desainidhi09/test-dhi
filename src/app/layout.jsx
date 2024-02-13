"use client";
import React from "react";
import "@/styles/tailwind.css";

import { ProSidebarProvider } from "react-pro-sidebar";
import "../styles/index.css";
import "../styles/font.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Nidhi desai's Application2</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-next-app"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ProSidebarProvider>{children}</ProSidebarProvider>
      </body>
    </html>
  );
}
export default RootLayout;
