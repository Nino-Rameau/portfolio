import { tv } from "tailwind-variants";

const texteTags = tv({
  base: "!text-black dark:!text-white",
  variants: {
    variant: {
      h1: "font-titre text-xxl bg-bleu_clair dark:bg-bleu_fonce text-center rounded-2xl py-3 lg:mx-60 my-20 shadow-[0px_0px_60px] shadow-bleu_fonce2 ",
      h2: "font-titre text-center text-xl",
      h3: "font-titre text-center text-l",
      h4: "font-titre text-center text-m",
      p: "text-s font-texte",
      p2: "text-xs font-texte",
      a: "text-s font-texte  underline whitespace-nowrap",
    },
    marge: {
      s: "m-1",
      m: "m-2",
      l: "m-4",
      xl: "m-6",
      xxl: "m-8",
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
});

const Texte = ({
  tag: Tag,
  variant,
  texte,
  lien,
  marge,
  padding,
  className,
}) => {
  return (
    <Tag
      className={texteTags({ variant, marge, padding, className })}
      href={lien}
    >
      {texte}
    </Tag>
  );
};

export { Texte };
