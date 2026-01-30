import { Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800']
});

export const metadata = {
  title: "2Kgames & Repairs",
  description: "Expert Console Repairs & Premium Gaming Gear",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
