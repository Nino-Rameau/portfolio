import { tv } from "tailwind-variants";

const listStyles = tv({
  base: "text-s font-texte text-black dark:text-white",
  variants: {
    variant: {
      point: "list-disc",
      pasPoint: "list-none",
    },
    marge: {
      left: "ml-4",
      top_6: "mt-6",
      top_10: "mt-10",
    },
    text: {
      center: "text-center",
      left: "text-left",
      justifier : "text-justify",
    }
  },
});


const Liste = ({ items, variant, marge, className, text }) => {
  return (
    <ul className={listStyles({ variant, marge })}>
      {items.map((item, index) => ( 
        <li key={index} className={`${className || ""} ${listStyles({ text })}`}>    
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Liste;
