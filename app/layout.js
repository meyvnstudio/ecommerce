import { Outfit } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";

const outfit = Outfit({ subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata = {
  title: "Rwandanna — Electronics Store",
  description: "One stop shop for all electronics in Rwanda",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <Analytics />
        <html lang="en">
          <body className={`${outfit.className} antialiased text-gray-700`}>
            <Toaster />
            <AppContextProvider>{children}</AppContextProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
