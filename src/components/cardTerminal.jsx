import { Texte } from "./texte";
import { AffichageEtoile } from "./etoile";


export const CardTerminal = ({titre, competence }) => (
    <div className="bg-gray-900 w-[90%] md:w-[75%] rounded-2xl mb-10">
        <div className="p-2">
            <span className="bg-red-500 inline-block center w-3 h-3 rounded-full mr-2 cursor-pointer"></span>
            <span className="bg-yellow-500 inline-block center w-3 h-3 rounded-full mr-2 cursor-pointer"></span>
            <span className="bg-green-500 inline-block center w-3 h-3 rounded-full cursor-pointer"></span>
        </div> 

        <Texte tag="h2" balise="h2" texte={titre} couleur="white" className="text-center text-2xl font-bold mt-4 mb-2"/>

        <ul className="text-black dark:text-white px-6 pb-4 mt-3">
            {competence.map((info, index) => (
                <li key={index} className="pl-6 text-white mb-5" >
                    <div className="flex items-center flex-wrap space-x-2">
                        <span>➞</span> 
                        <img src={info.img} alt="logo" className="h-[20px] w-auto" />
                        <Texte tag="h3" balise="h3" couleur="white" className="text-left"> {info.Langage} : </Texte>
                        <span className="text-xs flex flex-row"><AffichageEtoile note={info.Note}/></span>
                    </div>
                    <Texte tag="p" balise="p" texte={`${info.Description}`} couleur="white"/>
                    <Texte tag="p" balise="p" couleur="white">
                        <span className="italic !text-bleu_clair"> Expérience : </span> {info.dureeExperience}
                    </Texte>            
                </li>
            ))}
        </ul>
    </div>
);