export default function Footer() {
  return (
    <footer className="w-full p-4 text-center text-[length:var(--text-sm)] text-[var(--color-muted)] border-t-2 border-[var(--color-border)] ">
      &copy; {new Date().getFullYear()} Ahmeet. All rights reserved.
    </footer>
  );
}
