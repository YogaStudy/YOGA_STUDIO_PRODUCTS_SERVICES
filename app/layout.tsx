import type { Metadata } from "next";
import "@styles/global.css";
import "react-toastify/dist/ReactToastify.css";
import Main from "@components/app";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: {
    default: "Yoga Studio",
    template: "%s | Yoga Studio",
  },
  keywords:
    "yoga, Yoga for beginners, Yoga for weight loss, pranayama, meditation, health, well-being, Posizioni di yoga, Yoga per principianti, pranayama, meditazione, salute, benessere, Yoga per il rilassamento, Yoga per la perdita di peso, Lezioni di yoga, Benefici dello yoga ",
  description:
    "Lo Studio di Pranayama Yoga per tutte le età e livelli per migliorare la salute e il benessere, in particolare le tecniche di respirazione.",
  twitter: {
    card: "summary_large_image",
    site: "@yogastudio",
  },
  metadataBase: new URL("https://pranayama-yoga-studio.online"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  openGraph: {
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.png" />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/yoga-studio-408414.appspot.com/o/app%2Fopengraph-image.png?alt=media&token=6821282f-08e6-49ae-81d5-ea921789281f"
        />
      </head>
      <body className={inter.className}>
        <Main childrenElement={children} />
      </body>
    </html>
  );
}
