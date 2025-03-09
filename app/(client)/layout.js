import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-6xl mx-auto border-3 border-blue-400`}
      >
        <header className="flex gap-2 max-w-5xl mx-auto py-3 border-b-2 border-blue-600">
          <nav className="bg-amber-600 w-[20%]">Logo</nav>
          <div className="flex justify-between bg-amber-300 w-[60%]">
            <a href="/about">About</a>
            <a href="/about">About</a>
            <a href="/about">About</a>
            <a href="/about">About</a>
          </div>
          <div className="bg-amber-900 w-[20%]">Search</div>
        </header>
        {children}
      </body>
    </html>
  );
}
