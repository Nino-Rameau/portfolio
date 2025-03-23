import { Link, useLocation } from "react-router-dom";

export const Navbtn = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

    // btn du header desktop avec scroll to top pour renvoyer en haut de page et non a la meme hauteur sur la nouvelle

  return (
    <Link
      to={to}
      className={`font-titre text-center py-2 w-full border-solid border-t-2 border-black
        bg-gradient-to-r from-bleu_clair2 to-bleu_milieu 
        dark:bg-gradient-to-r dark:from-bleu_milieu dark:to-bleu_fonce
        ${isActive ? "text-bleu_fonce2 dark:text-bleu_clair2" 
                    : "text-black dark:text-white"}`}
      onClick={(e) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );
};
