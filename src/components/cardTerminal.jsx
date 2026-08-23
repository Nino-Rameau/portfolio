import Texte from "./texte";
import AffichageEtoile from "./etoile";


const CardTerminal = ({titre, competence }) => (
    <article className="bg-gray-900 w-[90%] md:w-[75%] rounded-2xl mb-10">
        <div className="p-2">
            <span className="inline-block w-3 h-3 mr-2 bg-red-500 rounded-full cursor-pointer center"></span>
            <span className="inline-block w-3 h-3 mr-2 bg-yellow-500 rounded-full cursor-pointer center"></span>
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full cursor-pointer center"></span>
        </div> 

        <Texte tag="h2" balise="h2" texte={titre} couleur="white" className="mt-4 mb-8 text-2xl font-bold text-center"/>

        <ul className="px-6 pb-4 mt-3 text-black dark:text-white">
            {competence.filter((info) => info.visible).map((info, index) => (
                <li key={index} className="pl-6 mb-5 text-white" >
                    <div className="flex flex-wrap items-center space-x-2">
                        <img src={info.img} alt={info.texteAlt} className="h-[20px] w-auto" />
                        <Texte tag="h3" balise="h3" couleur="white" className="text-left"> {info.Langage} : </Texte>
                        <span className="flex flex-row text-xs"><AffichageEtoile note={info.Note}/></span>
                    </div>
                    <Texte tag="p" balise="p" texte={`${info.Description}`} couleur="white"/>
                    <Texte tag="p" balise="p" couleur="white">
                        <span className="italic !text-bleu_clair"> Expérience : </span> {info.dureeExperience}
                    </Texte>            
                </li>
            ))}
        </ul>
    </article>
);

export default CardTerminal;