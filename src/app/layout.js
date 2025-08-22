import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

import "./globals.css";
import AppNav from "../components/nav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "example page",
  description: "this is an example page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppNav />
        <main style={{ marginTop: "3rem" }}>{children}</main>
      </body>
    </html>
  );
}
