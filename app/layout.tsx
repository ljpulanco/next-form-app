import type { Metadata, Viewport } from "next";
import Header from "../app/header";
import Footer from "../app/footer";
import "../styles/MedicalForm.css"; // Ensure global styles are loaded

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "Mobile Physicians Chart";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "MP Chart";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Apple Touch Icons for iOS */}
        <link rel="apple-touch-icon" href="/icons/ios/120.png" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/ios/120.png"
        />

        {/* Meta Tags for iOS Web App */}
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </head>
      <body style={{ margin: "0" }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
