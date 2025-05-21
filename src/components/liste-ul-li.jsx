import { tv } from "tailwind-variants";

// compos pour les listes

const listStyles = tv({
  base: "text-s font-texte text-black dark:text-white",
  variants: {
    // gestion du type de liste (point ou pas de point)
    variant: {
      point: "list-disc",
      pasPoint: "list-none",
    },
    marge: {
      left: "ml-4",
      top_6: "mt-6",
      top_10: "mt-10",
    },
    // gestion de l'alignement du texte
    text: {
      center: "text-center",
      left: "text-left",
      justifier : "text-justify",
    }
  },
});
// renvoie tout les parametre 
const Liste = ({ items, variant, marge, className, text }) => {
  return (
    <ul className={listStyles({ variant, marge })}>
      {items.map((item, index) => ( // on parcours le tableau items (tab avec tout les li)
        // on ajoute a chaque li si il y a le className (sinon chaine vide pour eviter erreur) et le text (aligbement)
        <li key={index} className={`${className || ""} ${listStyles({ text })}`}>    
          {item}
        </li>
      ))}
    </ul>
  );
};

export { Liste };
