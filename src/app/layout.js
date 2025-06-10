import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import PageLoader from "./components/PageLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio | David Ayim Obuobi",
  description:
    "Full Stack Developer - Crafting modern web experiences with Next.js, React, and cutting-edge technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} transition-colors duration-300 overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <PageLoader />
          <div className="relative z-0">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
