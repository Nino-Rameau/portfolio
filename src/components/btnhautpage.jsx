import { LiaArrowUpSolid } from "react-icons/lia";

const BtnHaut = () => {
  return (
    <button
      className="fixed bottom-4 right-4 px-1 py-3 bg-bleu_milieu rounded-full text-xl hover:scale-125 text-white z-50"
      title="Retour en haut de la page"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
    <LiaArrowUpSolid className="text-3xl"/>
    </button>
  );
};

export default BtnHaut;