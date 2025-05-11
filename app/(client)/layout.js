import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/theme-provider";
import Footer from "../components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: {
    default: "Tech Arena24: Expert Tech News, Reviews, Comparisons & Top Deals",
    template:
      "%s | Tech Arena24",
  },
  description:
    "Discover the latest smartphones, laptops, and gadgets with expert reviews, side-by-side comparisons, and exclusive tech deals — all at Tech Arena24.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="w-full max-w-6xl mx-auto px-6 sm:px-4 xl:px-0 overflow-x-hidden flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
