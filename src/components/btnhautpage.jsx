export const BtnHaut = () => {
  return (
    <button
      className="fixed bottom-4 right-4 px-1 py-3 bg-bleu_milieu rounded-full text-xl hover:scale-125 text-white"
      title="Retour en haut de la page"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};
