import { tv } from "tailwind-variants";

const texteTags = tv({
  base: "!text-black dark:!text-white",
  variants: {
    variant: {
      h1: "font-titre text-xxl bg-bleu_clair dark:bg-bleu_fonce text-center rounded-2xl py-3 lg:mx-60 my-20 shadow-[0px_0px_60px] shadow-bleu_fonce2 ",
      h2: "font-titre text-center text-xl m-8",
      h3: "font-titre text-center text-l m-4",
      h4: "font-titre text-center text-m",
      p: "text-s font-texte",
    },
  },
});

const Texte = ({ tag: Tag, variant, texte }) => {
  return <Tag className={texteTags({ variant })}>{texte}</Tag>;
};

export { Texte };
