export const ProgressBar = ({ texte, valeur }) => {
  return (
    <div className="m-auto rounded-md bg-zinc-700 mt-2 mb-2 w-[85%]">
      <div
        className=" bg-bleu_fonce py-2 rounded-md"
        style={{ width: `${valeur}%` }}
      >
        <div className="text-s pl-3 text-white">{texte}</div>
      </div>
    </div>
  );
};
