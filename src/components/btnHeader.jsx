import { Link, useLocation } from "react-router-dom";

const BtnHeader = ({ to, texte, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`
        font-titre text-center p-2 lg:px-5 w-full 
        border-solid border-t-2 border-black lg:border-none 
        lg:rounded-xl lg:transition lg:duration-300 
        lg:shadow-[0px_0px_20px_#8cd0f2] lg:dark:shadow-[0px_0px_20px_#3000f0] 
        ${isActive ? "text-bleu_fonce dark:text-bleu_clair lg:text-black lg:dark:text-white lg:bg-bleu_clair lg:hover:bg-bleu_clair lg:dark:bg-bleu_fonce lg:dark:hover:bg-bleu_fonce" : "text-black dark:text-white lg:hover:bg-bleu_clair2 lg:dark:hover:bg-bleu_milieu"}`}
      onClick={(e) => {
        window.scrollTo(0, 0);
        if (onClick) onClick(e); // fonction qui ferme le menu burger sur mobile au clic sur une autre page
      }}
    >
      {texte}
    </Link>
  ); 
};

export default BtnHeader;