import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Age Calculator",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
