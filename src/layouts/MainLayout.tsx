import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis';
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";

export default function MainLayout({ 
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Cleanup function to destroy lenis instance on component unmount
      lenis.destroy();
    };
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="container full-bleed">{children}</main>
      <FloatingWhatsAppButton />
      <Footer />
    </div>
  );
}
