import { useState } from "react";
import { Navbtn } from "./navbtnMobile";
import { Darkmod } from "./darkmod";
import { Link, useLocation } from "react-router-dom";
import React from "react";

// const pour etat du mode sombre, voir sur quel page est l'utilisateur, ouverture / fermeture du menu burger
const Header = () => {
  const [darkMode, setDarkMode] = Darkmod();
  const active = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="flex flex-row items-center justify-around 
    bg-gradient-to-r from-bleu_clair2 to-bleu_milieu 
    dark:bg-gradient-to-r dark:from-bleu_milieu dark:to-bleu_fonce 
    h-20 sticky top-0 z-50"
    >
      <Link to="/" onClick={() => window.scrollTo(0, 0)}>
        <img
          src="img/logo/logo-verti-sans-nom.png"
          alt="Mon logo"
          className="w-16"
        />
      </Link>

    {/* change icone du menu burger si ouvert ou fermer */}
      <button onClick={toggleMenu} className="z-50">
        {menuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            className="text-black dark:text-white"
          >
            <path
              fill="currentColor"
              d="M18.36 19.78L12 13.41l-6.36 6.37l-1.42-1.42L10.59 12L4.22 5.64l1.42-1.42L12 10.59l6.36-6.36l1.41 1.41L13.41 12l6.36 6.36z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 24 24"
            className="text-black dark:text-white"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="1.5"
              d="M4.5 12h15m-15 5.77h15M4.5 6.23h15"
            />
          </svg>
        )}
      </button>

      {/* active={active.pathname === "/"} en fonction de l'url modifie le btn dans header de couleur */}

      {menuOpen && (
        <nav className="flex flex-col absolute mt-[330px] w-full">
          <Navbtn to="/" onClick={closeMenu} active={active.pathname === "/"}>
            Accueil
          </Navbtn>
          <Navbtn to="/competences" onClick={closeMenu} active={active.pathname === "/competences"}>
            Compétences
          </Navbtn>
          <Navbtn to="/projets" onClick={closeMenu} active={active.pathname === "/projets"}>
            Projets
          </Navbtn>
          <Navbtn to="/charteGraphique" onClick={closeMenu} active={active.pathname === "/charteGraphique"}>
            Charte Graphique
          </Navbtn>
          <Navbtn to="/cv" onClick={closeMenu} active={active.pathname === "/cv"}>
            CV
          </Navbtn>
          <Navbtn to="/contact" onClick={closeMenu} active={active.pathname === "/contact"}>
            Contact
          </Navbtn>
        </nav>
      )}

      {/* gestion mode sombre / clair (change entre 2 svg) */}
      <button title="Mode jour / nuit" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            color="white"
          >
            <path
              fill="currentColor"
              d="M12.058 20q-3.333 0-5.667-2.334T4.058 12q0-2.47 1.413-4.535q1.414-2.067 4.01-2.973q.306-.107.536-.056t.381.199t.192.38q.04.233-.063.489q-.194.477-.282.966t-.087 1.03q0 2.667 1.866 4.533t4.534 1.867q.698 0 1.277-.148q.58-.148.988-.24q.218-.04.399.01t.289.176q.118.125.16.308q.04.183-.048.417q-.715 2.45-2.803 4.013T12.058 20m0-1q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.162T9.158 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5.058 12q0 2.9 2.05 4.95t4.95 2.05m-.25-6.75"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            color="black"
          >
            <path
              fill="currentColor"
              d="M11.5 5.423V2.039h1v3.384zm5.496 2.289l-.682-.683l2.357-2.452l.727.733zm1.581 4.788v-1h3.385v1zM11.5 21.962v-3.366h1v3.366zM7.042 7.68L4.577 5.329l.752-.708L7.73 7.004zm11.624 11.742l-2.352-2.452l.677-.657l2.388 2.346zM2.039 12.5v-1h3.384v1zm3.27 6.923l-.688-.752l2.358-2.357l.36.348l.378.354zM12.006 17q-2.082 0-3.544-1.457T7 12.005T8.457 8.46T11.995 7t3.544 1.457T17 11.995t-1.457 3.544T12.005 17M12 16q1.65 0 2.825-1.175T16 12t-1.175-2.825T12 8T9.175 9.175T8 12t1.175 2.825T12 16m0-4"
            />
          </svg>
        )}
      </button>
    </header>
  );
};

export default Header;
