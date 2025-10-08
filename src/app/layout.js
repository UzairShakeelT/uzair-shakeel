import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Uzair Shakeel | Full-Stack Developer",
  description: "Uzair Shakeel - Portfolio and Projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* Fixed & Responsive Logo */}
        <img
          src="/images/logo.png"
          alt="Logo"
          className="
            fixed top-4 left-6
            w-8 sm:w-16 md:w-20 lg:w-24
            h-auto 
            z-50 
            pointer-events-none
          "
        />
        {children}
      </body>
    </html>
  );
}
