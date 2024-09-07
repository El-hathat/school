import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "nlSchool",
  description: "NL School, votre portail complet de gestion scolaire. Concu pour faciliter l\'experience educative numerique, notre portail vous permet d\'acceder facilement a toutes les ressources dont vous avez besoin pour reussir academiquement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      
        {children}
      
        </body>
    </html>
  );
}
