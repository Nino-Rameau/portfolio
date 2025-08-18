import { useState } from "react";
import { Link } from "react-router-dom";

import Darkmod from "./darkmod";
import BtnHeader from "./btnHeader";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

const Header = () => {
  const [darkMode, setDarkMode] = Darkmod();                         // on récupère le darkMode et la fonction setDarkMode
  const [menuOuvert, setmenuOuvert] = useState(false);              // on initialise le menuOuvert à false (fermé)

  const OuvrirFermerMenuBruger = () => setmenuOuvert(!menuOuvert);   // fonction qui inverse l'état du menu
  const FermerMenuBurger = () => setmenuOuvert(false);               // fonction qui ferme le menu (pour mobile quand on clique sur un lien)

  return (
    <header className="flex items-center justify-around bg-gradient-to-r from-bleu_clair2 to-bleu_milieu dark:bg-gradient-to-r dark:from-bleu_milieu dark:to-bleu_fonce h-20 sticky top-0 z-50">

      <Link to="/" onClick={() => { window.scrollTo(0, 0); FermerMenuBurger(); }} title="Retour à l'accueil">
        <img src="img/logo.svg" alt="Logo bleu avec curseur de souris" title="Retour à l'accueil" className="w-16" />
      </Link>

      <button onClick={OuvrirFermerMenuBruger} className="lg:hidden z-50 text-black dark:text-white" title="Ouvrir / fermer le menu burger">
        {menuOuvert ? (
          <RxCross2 className="w-10 h-auto"/>
        ) : (
          <RxHamburgerMenu className="w-10 h-auto"/>
        )}
      </button>

      <nav className={`bg-gradient-to-r from-bleu_clair2 to-bleu_milieu dark:from-bleu_milieu dark:to-bleu_fonce lg:bg-none flex flex-col items-center lg:flex-row lg:space-x-10 lg:space-y-0 fixed top-20 left-0 w-full lg:static lg:w-auto z-40 ${menuOuvert ? "block" : "hidden"} lg:flex lg:space-x-10`} >   
        <BtnHeader to="/" onClick={FermerMenuBurger} texte="Accueil"/>
        <BtnHeader to="/competences" onClick={FermerMenuBurger} texte="Compétences"/>
        <BtnHeader to="/projets" onClick={FermerMenuBurger} texte="Projets"/>
        <BtnHeader to="/cv" onClick={FermerMenuBurger} texte="CV"/>
        <BtnHeader to="/contact" onClick={FermerMenuBurger} texte="Contact"/>
      </nav>

      <button title="Mode clair / sombre" onClick={() => setDarkMode(!darkMode)} className="ml-4" >
        {darkMode ? (
          <FaRegMoon className="text-white w-8 h-auto"/>
        ) : (
          <FiSun className="w-8 h-auto"/>
        )}
      </button>
    </header>
  );
};

export default Header;
