import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const poppins = Poppins({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: "Young Start Academy",
  description: "Young Start Academy is a place where young minds are nurtured and developed to become the best version of themselves. We provide a safe and conducive environment for children to learn and grow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, 'antialised font-poppins')}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
