import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import News from "./components/News/page";
import AppSidebar from "./components/Layouts/sidebar/page";
import QueryProvider from "./components/Provider/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FootballShuru",
  description: "Foolball score updates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`} style={{ backgroundColor: '#303030' }}>
        {/* Main Layout Container */}
        <QueryProvider>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">

          {/* Sidebar Card */}
          <div className="bg-white p-4 shadow-md rounded-lg" style={{ backgroundColor: "#222222" }} >
            <AppSidebar />
          </div>

          {/* Main Content (Children) Card */}
          <div className=" p-4 col-span-2 pt-0">


            {children}

          </div>

          {/* Trending News Card */}
          <div className="bg-[#222222] p-4 shadow-md rounded-lg">
            <News />
          </div>

        </div>
        </QueryProvider>
        
      </body>
    </html>
  );
}
