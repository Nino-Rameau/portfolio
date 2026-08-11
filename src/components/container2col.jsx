import { Link } from "react-router";
import Texte from "../components/texte";

const Container = ({ para1, para2, img, altimg, direction, cta }) => {
  return (
    // bordure animé
    <div className="relative mx-4 lg:mx-10 lg:max-w-[1700px] 2xl:mx-40 my-20">
      <div className="relative overflow-hidden rounded-xl before:absolute before:inset-0 before:bg-gradient-to-r before:from-bleu_clair before:via-bleu_fonce before:to-bleu_clair dark:before:from-bleu_fonce dark:before:via-bleu_clair dark:before:to-bleu_fonce before:bg-[length:400%_400%] before:animate-border-move m-4 ">
        
        
        <div className="relative z-10 items-center m-1 lg:flex bg-bleu_clair dark:bg-bleu_fonce rounded-xl" style={{ flexDirection: direction }}>
          
          <div className="p-4 lg:p-10 lg:max-w-[55%]">
            <Texte tag="p" balise="p" texte={para1}  />
            <Texte tag="p" balise="p" texte={para2} className="pt-6 mb-8" />
            {cta === "True" && (
              <Link to="/contact" className="flex px-4 py-2 m-auto text-white rounded-full bg-bleu_milieu text-l font-titre max-w-min whitespace-nowrap animate-bounce">
                Me contacter
              </Link>
            )}
          </div>

          <div>
            <img src={img} alt={altimg} className="flex m-auto pb-4 max-w-[95%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;