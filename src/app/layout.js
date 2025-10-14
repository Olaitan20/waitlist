import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import localFont from "next/font/local"; 
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi", // 👈 use as CSS variable
  display: "swap",
});

const monumentExtended = localFont ({
  src:[
    {
      path: "../fonts/MonumentExtended-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/MonumentExtended-Ultrabold.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-monumentExtended", // 👈 use as CSS variable
  display: "swap",
})

export const metadata = {
  title: "Abio",
  description: "Link in bio",
  icons: {
    icon: "/icons/vercel.svg", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${satoshi.variable} ${monumentExtended.variable} antialiased`}>
        <Toaster position="top-center"/>
        {children}
      </body>
    </html>
  );
}
