import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
// import GlobalScript from "@/components/global-script";

export const metadata = {
  title: "example page",
  description: "this is an example page",
};

/**
 * Renders the root layout of the application with navigation and main content.
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* <GlobalScript /> */}
      </body>
    </html>
  );
}
