import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trickle Solutions - Code Fire Development",
  description:
    "Trickle Solutions is a leading mobile app and website development company dedicated to delivering exceptional client experiences.",
};

// Google Fonts are loaded via a stylesheet link (same approach as the
// original static build) rather than next/font/google, because next/font
// fetches the font files at *build time* and this project was built in a
// sandbox whose network policy blocks fonts.googleapis.com. If your
// deployment/build environment can reach Google Fonts, switching to
// next/font/google is a drop-in change: see
// https://nextjs.org/docs/app/getting-started/fonts for the self-hosted,
// zero-layout-shift version of this.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this
            rule targets the Pages Router's pages/_document.js; the App
            Router's root layout is the correct place for a global font
            <link> when next/font/google isn't available (see note above). */}
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
