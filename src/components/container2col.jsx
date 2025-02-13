import { Link } from "react-router-dom";
import { Texte } from "../components/texte";

export const Container = ({ para1, para2, img, altimg, direction, cta }) => {
  return (
    <div
      className=" lg:flex  items-center bg-bleu_clair dark:bg-bleu_fonce rounded-xl m-10"
      style={{ flexDirection: direction }}
    >
      <div className="p-10 lg:max-w-[55%]">
        <Texte tag="p" variant="p" texte={para1} />
        <Texte tag="p" variant="p" texte={para2} className="pt-6 mb-8" />
        {cta === "True" && (
          <Link
            to="/contact"
            className="text-black dark:text-white bg-bleu_milieu text-l font-titre flex m-auto max-w-min whitespace-nowrap px-4  py-2 rounded-full hover:scale-125 hover:opacity-90 transition-all"
          >
            Me contacter
          </Link>
        )}
      </div>
      <div>
        <img src={img} alt={altimg} className="flex m-auto pb-4 max-w-[95%]" />
      </div>
    </div>
  );
};
