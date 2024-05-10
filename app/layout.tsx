import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rivals",
  description:
    "We are a group of human beings who love motorsport, and love to compete. We have weekly time-trial events in Forza Motorsport, and weekly wheel-to-wheel racing events wrapped in 10 to 12 week seasons. We are a community of racers who love to compete, and we welcome all skill levels. Know that we are here to have fun; we are much more about the racing than the winning. We are Rivals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
