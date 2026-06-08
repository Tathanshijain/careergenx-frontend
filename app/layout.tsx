import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "./landingpage/modals/ModalContext";
import AuthModal from "./landingpage/modals/AuthModal";
import UploadModal from "./landingpage/modals/UploadModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerGenix — Fix your resume in real-time",
  description:
    "A unified, AI-powered workspace that bridges the gap between how an ATS reads your resume, how a hiring manager scores your profile, and how you perform in the room.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <ModalProvider>
          {children}
          <AuthModal />
          <UploadModal />
        </ModalProvider>
      </body>
    </html>
  );
}
