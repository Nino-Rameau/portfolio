import { Link, useLocation } from "react-router-dom";

export const Navbtn = ({ to, children }) => {
  const location = useLocation(); // Récupère l'URL actuelle
  const isActive = location.pathname === to; // Vérifie si le bouton est actif

  // btn du header desktop avec scroll to top pour renvoyer en haut de page et non a la meme hauteur sur la nouvelle

  return (
    <Link
      to={to}
      className={`p-4 rounded-xl px-5 py-2 font-titre transition duration-300 
        ${isActive ? "bg-bleu_clair2 dark:bg-bleu_fonce text-black dark:text-white shadow-[0px_0px_20px_#8cd0f2] dark:shadow-[0px_0px_20px_#3000f0]" 
                  : "hover:bg-bleu_milieu text-black dark:text-white shadow-[0px_0px_20px_#8cd0f2] dark:shadow-[0px_0px_20px_#3000f0]"}`}
      onClick={() => window.scrollTo(0, 0)}
    >
      {children}
    </Link>
  );
};
