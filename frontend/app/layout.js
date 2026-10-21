import "./globals.css";

export const metadata = {
  title: "Ma Garderie",
  description: "Bienvenue dans notre garderie"
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
