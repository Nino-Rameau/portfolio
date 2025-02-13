import React from "react";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-fontClair dark:bg-fontSombre">
      <Header />

      <main className="flex-grow  mx-auto py-8">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
