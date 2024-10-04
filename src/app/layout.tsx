// imports dos módulos
import localFont from "next/font/local"
import { Roboto } from "next/font/google"

// imports internos
import "./globals.css";
import { Menu } from "@/components/menu";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style: "normal",
  variable: "--roboto",
  subsets: ["latin"]
})

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased`}
      >
       <Menu op1="Inicial" op2="Maths" op3="General function" op4="Fetch nativo" op5="Axios page" op6="Server side page"/>
        {children}
      </body>
    </html>
  );
}
