import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative px-11  flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
