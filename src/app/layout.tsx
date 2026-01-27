import Header from "./components/Header";
import Footer from "./components/Footer";
import "@/styles/index.css";

export const metadata = {
  title: "Ahmeet",
  description: "Enterprise-grade real-time video conferencing platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark text-light">
        <Header />
        <main className="min-h-[calc(100vh-80px)] p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
