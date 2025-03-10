import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "Tech Arena24",
  description: "Your Everyday Technology News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={` ${poppins.className} antialiased`}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
            <Navbar />
            {children}
          </ThemeProvider>
       </body>
    </html>
  );
}
