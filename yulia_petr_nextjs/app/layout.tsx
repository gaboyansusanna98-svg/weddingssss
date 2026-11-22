import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Юлия & Пётр — свадебное приглашение",
  description: "Приглашение на свадьбу Юлии и Петра, 31 декабря 2026 года.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
