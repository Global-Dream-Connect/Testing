import { Darker_Grotesque, Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable : "--font-inter",
  subsets : ["latin"]
})
const poppins = Poppins({
  variable : "--font-poppins",
  subsets : ["latin"],
  weight : ['100','200','300','400','500']
})


const grotesque = Darker_Grotesque({
  variable : "--font-secondary",
  subsets : ["latin"],
  weight:['300','400','500']
})

const myFont = localFont({
  src: [
    { path: '../../public/fonts/GlacialIndifference-Regular.otf', weight: '400', style: 'normal' }, 
  ],
  
  variable: '--font-myfont', // optional CSS variable
});

export const metadata = {
  title: "Global Dream Connect",
  description: "Global Dream Connect",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${poppins.variable} ${myFont.variable} antialiased relative bg-white w-full h-max scroll-smooth`}
      >
        {children}

      </body>
    </html>
  );
}
