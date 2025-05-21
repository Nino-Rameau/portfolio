import { Texte } from "../components/texte";
import { Liste } from "../components/liste-ul-li";
import { BtnHaut } from "../components/btnhautpage";

import  BtnTelechargement  from "../components/btnTelechargement"; 

function CharteGraphique() {
  return (
    <>
      <Texte tag="h1" balise="h1" texte="Ma Charte Graphique" />
      <BtnHaut />

      <div className="border-slate-300 border-4 rounded-3xl m-auto w-[90%] md:w-[80%] p-4 lg:p-10 bg-slate-300 dark:bg-black">

        <Texte tag="h2" balise="h2" marge="xl" texte="Pourquoi ce logo ?" couleur="couleur"/>

        <div className="lg:flex flex-row m-auto justify-center items-center">
          
          <img src="img/logo/logo-verti-sans-nom.png" alt="Mon logo principal" className="w-[200px] h-[200px] m-auto" />
          
          <div className="lg:w-2/3 ml-8">
            <Texte tag="p" balise="p" texte="Couleurs :" className="mt-8"/>
            <Liste 
              items={[
                "Bleu #4269B1 (fond) Cette couleur montre la technologie, le sérieux et l'engagement dans le développement web",
                "Bleu #28337E (curseur) : Plus sombre, il montre mes compétences.",
                "Bleu #ACDDF6 (texte) : Plus clair, il apporte une touche de fraîcheur, symbolisant l'innovation et la créativité."
              ]}
              variant="point" 
            />

            <Texte tag="p" balise="p" texte="Formes :" className="mt-8"/>
            <Liste 
              items={[
                "Le fond arrondi : Les angles arrondis adoucissent l'image, montrant la flexibilité.",
                "Le curseur de souris : C'est un des symbole du numérique et du web."
              ]}
              variant="point" 
            />

            <Texte tag="p" balise="p" texte="Eléments graphiques :" className="mt-8"/>
            <Liste 
              items={[
                "Les initiales NR : Elles personnalisent le logo et renforcent mon identité.",
                "Les petits carrés : Ces éléments décoratifs dynamisent le design tout en évoquant les pixels, référence aux technologie numériques."
              ]}
              variant="point" 
            />
          </div>
        </div>

        <Texte tag="h2" balise="h2" className="my-4 mt-20" texte="Typographie" couleur="couleur"/>
        <div>
          <Texte tag="h3" balise="h3" texte="Nasalization" />
          <Texte
            tag="p"
            balise="p"
            className="font-logo"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />

          <Texte tag="h3" balise="h3" texte="Orbitron" />
          <Texte
            tag="p"
            balise="p"
            className="font-titre"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />

          <Texte tag="h3" balise="h3" texte="IBM Plex Mono" />
          <Texte
            tag="p"
            balise="p"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />
        </div>

        <Texte tag="h2" balise="h2" texte="Couleurs" className="my-4 mt-20" couleur="couleur" />
        <div className="flex flex-row justify-center items-center">
          <div className="bg-bleu_clair p-2 sm:p-6 md:p-8 font-texte text-black border-2 border-r-0 border-black">
            #ACDDF6
          </div>
          <div className="bg-bleu_milieu p-2 sm:p-6 md:p-8 font-texte text-white border-y-2 border-black">
            #4269B1
          </div>
          <div className="bg-bleu_fonce p-2 sm:p-6 md:p-8 font-texte text-white border-2 border-l-0 border-black">
            #28337E
          </div>
        </div>

        <Texte tag="h2" balise="h2" className="my-4 mt-20" texte="Logo et variantes :" couleur="couleur"/>

        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img src="img/logo/logo-verti-avec-nom.png" alt="Mon logo en version vertical avec mon nom" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Mon logo en version vertical avec mon nom" />
          </div>

          <div>
            <img src="img/logo/logo-verti-sans-nom.png" alt="Mon logo en version vertical sans mon nom" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Mon logo en version vertical sans mon nom" />
          </div>
        </div>

        <img src="img/logo/logo-hori.png" alt="Mon logo en version horizontale avec mon nom" className="m-auto mt-10 lg:mt-20 w-[200px] md:w-[350px] lg:w-[450px] h-auto" />
        <Texte tag="p" balise="p" className="text-center" marge="l" texte="Mon logo en version horizontale avec mon nom" />
        
        <img src="img/logo/banniere.png" alt="Ma bannière pour les réseaux sociaux" className="m-auto mt-10 lg:mt-20 w-[200px] md:w-[350px] lg:w-[450px] h-auto" />
        <Texte tag="p" balise="p" className="text-center" marge="l" texte="Ma bannière pour les réseaux sociaux" />
        
        <Texte tag="h2" balise="h2" texte="Interdits du logo :" className="my-4 mt-20" couleur="couleur" />
        
        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img src="img/logo/logo-nom-deplacer.png" alt="Interdit de déplacer le nom" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Interdit de déplacer le nom" />
          </div>

          <div>
            <img src="img/logo/logo-forme-changer.png" alt="Interdit de changer la forme" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Interdit de changer la forme" />
          </div>
        </div>

        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img src="img/logo/logo-couleur-changer.png" alt="Interdit de changer les couleurs" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Interdit de changer les couleurs" />
          </div>

          <div>
            <img src="img/logo/logo-sans-font.png" alt="Interdit d’enlever le fond" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
            <Texte tag="p" balise="p" className="text-center" marge="l" texte="Interdit d’enlever le fond" />
          </div>
        </div>

        <img src="img/logo/logo-forme-deplacer.png" alt="Interdit d’inverser ou déplacer les formes" className="m-auto mt-10 lg:mt-20 w-[200px] h-auto" />
        <Texte tag="p" balise="p" className="text-center" marge="l" texte="Interdit d’inverser ou déplacer les formes" />
      </div>

      <BtnTelechargement texte = "Télécharger ma charte graphique" lien = "../autre/Charte_Graphique.pdf" />
    </>
  );
}

export default CharteGraphique;