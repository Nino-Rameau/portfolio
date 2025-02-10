export const Titre = ({ titre }) => {
  return (
    <div
      className="font-titre text-white text-center text-xxl bg-bleu_fonce rounded-2xl 
      py-3 lg:mx-60 my-20 
      shadow-[0px_0px_60px] shadow-bleu_fonce2"
    >
      <h1>{titre}</h1>
    </div>
  );
};
