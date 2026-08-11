import { Link } from "react-router";
import Texte from "../components/texte";

import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
    const annee = new Date().getFullYear();   // Récupère l'année actuelle

  return (
    <footer className="flex-row items-center justify-around p-4 mt-4 text-black md:flex bg-bleu_clair dark:bg-bleu_fonce dark:text-white font-texte" >
      
      <div className="flex flex-col text-center">
        <Texte tag="p" balise="p" texte={`Copyright © ${annee} nino-rameau`} />
        <Link to="/mentionsLegales" className="underline font-texte" onClick={() => window.scrollTo(0, 0)} >
          Mentions Légales
        </Link>
      </div>

      <div className="flex flex-row space-x-8 text-black max-md:justify-center max-md:pt-4 dark:text-white">

        <a href="https://www.linkedin.com/in/nino-rameau-1a0636332/" title="LinkedIn" className="duration-100 hover:scale-150">
          <FaLinkedin className="w-10 h-auto"/>
        </a>

        <a href="https://github.com/Nino-Rameau" title="GitHub" className="duration-100 hover:scale-150">
          <IoLogoGithub className="w-10 h-auto"/>
        </a>
      </div>
    </footer>
  );
};

export default Footer;