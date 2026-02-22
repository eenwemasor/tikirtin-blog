import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowBackIcon } from "@/components/icons/help-center";
import Button from "@/components/ui/Button";
import MainFooter from "@/components/ui/MainFooter";

export const metadata: Metadata = {
  title: "Tikirtin Blog",
  description:
    "Stay updated with the latest news, articles, and insights from Tikirtin. Explore our blog for in-depth guides, tips, and stories.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="bg-white min-h-screen flex flex-col gap-6 sm:gap-8 md:gap-10">
          <div className="px-4 2xl:px-0">
            <header className="container flex justify-between items-start sm:items-center pt-4 sm:pt-6 md:pt-8 gap-4 sm:gap-0">
              <div className="flex items-center">
                <Link href={`${process.env.NEXT_BASE_URL}`}>
                  <Image
                    src="/logo/logo.svg"
                    alt="Tikirtin Logo"
                    className="h-7 sm:h-8 md:h-9 w-auto"
                    width={100}
                    height={40}
                  />
                </Link>
                <Link href="/">
                  <span className="ml-3 sm:ml-4 md:ml-6 text-xs sm:text-sm text-black font-black">
                    Blog
                  </span>
                </Link>
              </div>

              <Link href={`${process.env.NEXT_BASE_URL}`}>
                <Button className="rounded-full" intent="secondary">
                  <span className="font-medium text-xs sm:text-sm">
                    Back to Tikirtin
                  </span>
                  <ArrowBackIcon />
                </Button>
              </Link>
            </header>
          </div>
          <div className="w-full flex-1 container">{children}</div>
          <MainFooter />
        </div>
      </body>
    </html>
  );
}
