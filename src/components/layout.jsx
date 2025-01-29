import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-fontSombre">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
