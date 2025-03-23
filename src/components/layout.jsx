import React from "react";
import Header from "./header";
import Footer from "./footer";

// compo principalement pour l'optimisation du site car pas besoin de recharger le header et footer a chaque fois (main est le contenu qui change)

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-fontClair dark:bg-fontSombre">
      <Header />

      <main className="flex-grow mx-auto py-8">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
