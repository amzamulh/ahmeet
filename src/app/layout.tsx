import "@ah/styles/index.css";
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
        {children}
      </body>
    </html>
  );
}
