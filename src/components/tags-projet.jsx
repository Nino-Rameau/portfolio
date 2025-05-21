export const Tag = ({ tag }) => {
  const couleurTag = {
    HTML: "bg-[#ff7415]",
    CSS: "bg-[#2694e4]",
    Tailwindcss: "bg-[#45aab5]",
    JavaScript: "bg-[#f7e018]",
    React: "bg-[#00d8ff]",
    Python: "bg-[#4d9dda]",
    PHP: "bg-[#777cb4]",
    MySQL: "bg-[#929394]",
    Logo: "bg-[#12ca12]",
    "Charte graphique": "bg-[#64f564]",
    Canva: "bg-[#71d4e8]",
    Figma: "bg-[#fe7667]",
    WordPress: "bg-[#14aecc]",
    "Travail en groupe": "bg-[#c69ea5]",
    "Travail individuel": "bg-[#b771e8]",
  };

  // Si pas de couleur pour le tag alors couleur par default
  const bgColor = couleurTag[tag] || "bg-black";

  return (
    <p className={`px-3 py-0.5 text-black font-texte rounded-3xl text-nowrap m-1 ${bgColor}`} >
      {tag}
    </p>
  );
};
