import { Playfair_Display } from "next/font/google";
import "./globals.css"
import Nav from "@/component/Nav";
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'], display: 'swap' });
export const metadata = {
  title: "Travel Data Website",
  description: "Best Travel Guidance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
     
    >
      <body  className={`${playfair.className} w-screen h-screen bg-black` } >
       <Nav/>
        {children}
        </body>
    </html>
  );
}
