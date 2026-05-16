import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elvara Invites",
  description: "Luxury wedding invitations and curation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}