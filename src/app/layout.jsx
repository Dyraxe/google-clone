import "./globals.css";

export const metadata = {
  title: "Google clone | Next.js 13",
  description: "a simple google clone created with Next.js 13",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
