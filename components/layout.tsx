import { ReactNode } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Menu from "./Menu";

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useRouter();

  const pageId = (pathName: string) => {
    switch (pathName) {
      case "/":
        return "- Home";
      case "/collection":
        return "- Collection";
      default:
        return "";
    }
  };

  return (
    <>
      <Head>
        {/* Title, description, and charset */}
        <title>
          {process.env.NEXT_PUBLIC_SITE_TITLE || "Raccoon Frens NFT"}{" "}
          {pageId(pathname)}
        </title>
        <meta
          name="description"
          content={
            process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
            "Raccoon Frens NFT - Somewhere in the stars"
          }
        />
        <meta charSet="utf-8"></meta>

        {/* <!-- Apple Touch Icon (at least 200x200px) --> */}
        <link rel="apple-touch-icon" href="/assets/racoonfrens_icon.png"></link>

        {/* <!-- To run web application in full-screen --> */}
        <meta name="apple-mobile-web-app-capable" content="yes"></meta>

        {/* <!-- Status Bar Style (see Supported Meta Tags below for available values) --> */}
        {/* <!-- Has no effect unless you have the previous meta tag --> */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black"
        ></meta>

        {/* <!-- Microsoft Tiles --> */}
        <meta name="msapplication-config" content="browserconfig.xml"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        ></meta>
      </Head>

      {/* Intersection observer polyfill */}
      <Script
        id="intersection-observer"
        src="scripts/intersection-observer.js"
        strategy="beforeInteractive"
      ></Script>

      {/* Main page content */}
      <main>
        {/* Navbar */}
        <Navigation />

        {children}

        {/* Footer */}
        <Footer />
      </main>

      {/* MENU (Z:100) */}
      <Menu />
    </>
  );
}
