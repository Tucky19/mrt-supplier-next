import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MRT Supplier Co., Ltd. | Bearings & Filters",
  description:
    "Industrial bearings and filtration solutions from NTN, Donaldson and MANN-FILTER for factories, maintenance teams and heavy equipment."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-mrt-bg text-slate-50 antialiased">{children}</body>
    </html>
  );
}
