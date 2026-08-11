import { Link } from "react-router";
import Texte from "../components/texte";
import { Title, Meta } from 'react-head';

function Accueil() {
  return (
    <>
      <Title>Page non trouvée</Title>
      <Meta name="robots" content="noindex, nofollow" />

      <div>
        <Texte tag="h1" balise="h1" texte="Page non trouvée" />
        <Link to="/" className="flex px-4 py-2 m-auto text-black transition-all rounded-full dark:text-white bg-bleu_milieu text-l font-titre max-w-min whitespace-nowrap hover:scale-150 hover:opacity-90" >
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}

export default Accueil;
