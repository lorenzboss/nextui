import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata, Viewport } from "next";

import { Providers } from "./providers";

import { HeartFilledIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { fontSans } from "@/config/fonts";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-7xl flex-grow px-12 pt-16">
              {children}
            </main>
            <footer className="flex w-full flex-col items-center py-3">
              <p className="gap-1">
                Made with{" "}
                <HeartFilledIcon className="inline text-red-500 opacity-80" />{" "}
                and{" "}
                <Link
                  isExternal
                  className="space-x-1"
                  href="https://nextui.org/"
                  title="nextui.org homepage"
                >
                  NextUI
                </Link>
              </p>
              <p>Lorenz Boss | ©{new Date().getFullYear()}</p>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
