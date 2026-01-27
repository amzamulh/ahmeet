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
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className="bg-[var(--color-bg)] text-[var(--color-text)] ">
        <Header />
        <main className="min-h-[calc(100vh-128px)] p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
