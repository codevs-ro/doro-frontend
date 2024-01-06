import "./globals.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
export const metadata = {
  title: "Successful Mind",
  description: "The way to a better living",
  icons: {
    icon: "/icon.png",
    apple: "/apple.png",
    other: {
      rel: "apple-icon",
      url: "/apple.png",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
