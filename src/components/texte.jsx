import { tv } from "tailwind-variants";

const texteTags = tv({
  variants: {
    balise: {
      h1: "font-titre text-xxl bg-bleu_clair dark:bg-bleu_fonce text-center rounded-2xl py-3 mx-4 lg:mx-60 my-20 shadow-[0px_0px_20px_#8cd0f2] dark:shadow-[0px_0px_60px_#3000f0]",
      h2: "font-titre text-center text-xl",
      h3: "font-titre text-center text-l",
      h4: "font-titre text-center text-m",
      p: "text-s font-texte",
      p2: "text-xs font-texte",
      a: "text-s font-texte  underline whitespace-nowrap",
      btn_xs: "text-xs font-titre",
    },
    couleur: {
      classique: "!text-black dark:!text-white",
      black: "!text-black",
      white: "!text-white",
      couleur: "!text-bleu_fonce dark:!text-bleu_clair",
    },
    marge: {
      s: "m-1",
      m: "m-2",
      l: "m-4",
      xl: "m-6",
      xxl: "m-8",
      auto: "m-auto",
    },
    padding: {
      s: "p-1",
      m: "p-2",
      l: "p-4",
      xl: "p-6",
      xxl: "p-8",
      left_l: "pl-4",
    },
  },
  defaults: {
    couleur: "classique",
  },
});

const Texte = ({
  tag: Tag,
  balise,
  couleur = "classique",
  texte,
  lien,
  marge,
  padding,
  className,
  children, // Pour le texte animé
}) => {
  return (
    <Tag
      className={texteTags({ balise, couleur, marge, padding, className })}
      href={lien}
    >
      {children ? children : texte}   {/* on affiche children (utilisé pour texte animé) et si il y en a pas on affiche le props texte */}
    </Tag>
  );
};

export { Texte };
