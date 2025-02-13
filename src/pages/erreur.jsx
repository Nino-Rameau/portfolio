import { Link } from "react-router-dom";
import { Texte } from "../components/texte";

function Accueil() {
  return (
    <>
      <div>
        <Texte tag="h1" variant="h1" texte="Page non trouvé" />
        <Link
          to="/"
          className="text-black dark:text-white bg-bleu_milieu text-l font-titre flex m-auto max-w-min whitespace-nowrap px-4  py-2 rounded-full hover:scale-125 hover:opacity-90 transition-all"
        >
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}

export default Accueil;
