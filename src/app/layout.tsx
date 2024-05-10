import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ProviderSession, Providers } from './providers';
import { auth } from "@/auth.config";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sales Operations",
  description: "Página de inicio",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
    return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <ProviderSession>
          <Providers>
            {children}
          </Providers>
        </ProviderSession>
      </body>
    </html>
  );
}
