import { Inter } from "next/font/google";
import "../../utils/styleLinks.css";
import { scriptImports } from "../../utils/ScriptImports";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {scriptImports.map((src, index) => (
          <Script key={index} src={src} strategy="beforeInteractive" />
        ))}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
