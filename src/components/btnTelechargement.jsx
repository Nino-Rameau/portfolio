import Texte from "./texte";

import { FiDownload } from "react-icons/fi";

const BtnTelechargement = ({ texte, lien }) => {
    return (
        <a href={lien} target="__Blank" className="relative w-[250px] h-[45px] flex items-center p-4 mt-5 mx-auto rounded-xl bg-bleu_clair dark:bg-bleu_milieu overflow-hidden group shadow-[0px_0px_20px_#8cd0f2] dark:shadow-[0px_0px_20px_#3000f0]" >

            <Texte tag="p" balise="btn_xs" className="m-2 text-black dark:text-white transition-all" texte={texte} />

            <div className="absolute right-0 w-10 h-full flex items-center justify-center rounded-xl bg-bleu_milieu dark:bg-bleu_fonce group-hover:w-full group-hover:bg-bleu_milieu group-hover:dark:bg-bleu_fonce transition-all duration-300">

                <FiDownload className="text-bleu_clair h-6 w-6"/>
            </div>
        </a>
    );
};

export default BtnTelechargement;
