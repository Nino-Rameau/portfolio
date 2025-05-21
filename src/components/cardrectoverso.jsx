import { Texte } from "../components/texte";

import { FaArrowsRotate } from "react-icons/fa6";

export const CardRV = ({
  titleRecto,
  image,
  descriptionImage,
  date,
  titreVerso,
  descriptionVerso,
  textLien,
  lien,
}) => {

  return (
    <div className="group relative h-[340px] w-[250px] [perspective:1000px] m-7 z-0">
      <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotatey(180deg)]">

        {/* recto de la carte */}
        <div className="absolute w-full h-full rounded-xl 
        bg-gradient-to-br  from-bleu_clair2 to-bleu_milieu dark:bg-gradient-to-r dark:from-bleu_milieu dark:to-bleu_fonce [backface-visibility:hidden] text-black dark:text-white flex flex-col justify-around items-center ">

          {/* titre recto */}
          <Texte tag="h2" balise="h3" marge="s" texte={titleRecto} />

          {/* image recto (logo)*/}
          <img src={image} alt={descriptionImage} className="w-1/2 mx-auto my-8"/>

          {/* date */}
          <Texte tag="p" balise="p" marge="l" texte={date} className="text-center pb-8"/>

          {/* icone pour retourner la carte */}
          <FaArrowsRotate className="w-5 h-5 absolute bottom-4 right-5 text-white rotate-90"/>
        </div>

        {/* verso de la carte */}
        <div className="absolute w-full rounded-xl bg-gradient-to-br from-cyan-600 to-indigo-900  p-5  [transform:rotatey(180deg)] [backface-visibility:hidden]  flex flex-col justify-around items-center h-[95%]">
          
          {/* titre verso */}
          <Texte tag="h3" balise="h3" texte={titreVerso} />

          {/* description verso (liste) */}
          <ul className="text-black dark:text-white pb-4 mt-3">
            {descriptionVerso.map((text, index) => (            // boucle sur tout les elements du tab (1 li par element)  / key={index} car react a besoin d'une clé unique
              <li key={index} className="list-disc ml-4">            
                <Texte tag="p" balise="p2" texte={text} /> 
              </li>
            ))}
          </ul>

          {/* lien verso vers la certification*/}
          <Texte tag="a" balise="a" texte={textLien} lien={lien} />
        </div>
      </div>
    </div>
  );
};
