import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ekansh | Experimental Ambient Music",
  description:
    "Explore the ambient and experimental electronic works of Ekansh, featuring albums like 'Nightmare', 'Silent Hill', and 'Backrooms'.",
  keywords: [
    "Ekansh",
    "ambient music",
    "experimental electronic",
    "lofi",
    "vaporwave",
    "Ballscord",
    "Indian electronic artists",
    "underground music",
    "dark ambient",
  ],
  authors: [{ name: "Ekansh Sharma", url: "https://ekansh.online" }],
  creator: "Ekansh Sharma",
  metadataBase: new URL("https://ekansh.online"),

openGraph: {
  title: "Ekansh | Experimental Ambient Music",
  description:
    "Ambient & experimental artist creating immersive electronic soundscapes. Listen now on Spotify, Bandcamp, and more.",
  url: "https://ekansh.online",
  siteName: "Ekansh",
  type: "profile", // ✅ valid type
  images: [
    {
      url: "https://pbs.twimg.com/profile_images/1803868660576006144/bf0UBerb_400x400.jpg",
      width: 400,
      height: 400,
      alt: "Ekansh Profile",
    },
  ],
},


  twitter: {
    card: "summary",
    title: "Ekansh | Experimental Ambient Music",
    description:
      "Discover the immersive ambient music of Ekansh. Stream now on all platforms.",
    site: "@ballscord",
    images: [
      "https://pbs.twimg.com/profile_images/1803868660576006144/bf0UBerb_400x400.jpg",
    ],
  },

  category: "Music",
  generator: "Next.js",
  applicationName: "Ekansh Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
