import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="app">
      <Header />
      <main className="container full-bleed">{children}</main>
      <Footer />
    </div>
  );
}
