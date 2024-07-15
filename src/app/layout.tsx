import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "@/components/base/header/Header";
import Footer from "@/components/base/footer/Footer";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main-wrapper">
          <Header />
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  );
}
