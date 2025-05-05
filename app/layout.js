import { Poppins } from "next/font/google";
import "./globals.css";
import BackgroundBlobs from "./component/Background";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Home | GSAP",
  description: "Built with Next.js and GSAP + Lenis!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className={poppins.variable}>
        {children}
        <BackgroundBlobs />
      </body>
    </html>
  );
}
