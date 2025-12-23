import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelFont = Pixelify_Sans({ 
  subsets: ["latin"],
  variable: '--font-pixel',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "LevelUp - Real Life RPG",
  description: "Gamify your life progress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pixelFont.variable}>
      <body>
        <main className="h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
