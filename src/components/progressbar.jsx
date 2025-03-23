import { Texte } from "../components/texte";

export const ProgressBar = ({ texte, valeur }) => {
  return (
    <div className="m-auto rounded-md bg-bleu_milieu dark:bg-zinc-700 mt-5 mb-2 w-[85%]">
      <div
        className="bg-bleu_clair2 dark:bg-bleu_fonce py-2 rounded-md"
        style={{ width: `${valeur}%` }}
      >
        <Texte tag="p" balise="p" padding="left_l" texte={texte} />
      </div>
    </div>
  );
};
