import { Texte } from "../components/texte";

function CharteGraphique() {
  return (
    <>
      <Texte tag="h1" variant="h1" texte="Ma Charte Graphique" />
      <div className="border-slate-300 border-4 rounded-3xl m-2 lg:m-10 p-4 lg:p-10 bg-slate-300 dark:bg-black">
        <Texte tag="h2" variant="h2" texte="Pourquoi ce logo ?" />
        <div className="lg:flex flex-row m-auto justify-center items-center">
          <img
            src="img/logo/logo-verti-sans-nom.png"
            alt="Mon logo principal"
            className="w-[200px] h-[200px] m-auto"
          />
          <div className="lg:w-2/3 ml-8">
            <Texte tag="p" variant="p" texte="Couleurs :" />
            <ul className="mb-8">
              <Texte
                tag="li"
                variant="li"
                texte="Bleu #4269B1 (fond) Cette couleur montre la technologie, le sérieux et l'engagement dans le développement web"
              />
              <Texte
                tag="li"
                variant="li"
                texte="Bleu #28337E (curseur) : Plus sombre, il montre mes compétences."
              />
              <Texte
                tag="li"
                variant="li"
                texte="Bleu #ACDDF6 (texte) : Plus clair, il apporte une touche de fraîcheur, symbolisant l'innovation et la créativité."
              />
            </ul>

            <Texte tag="p" variant="p" texte="Formes :" />
            <ul className="mb-8">
              <Texte
                tag="li"
                variant="li"
                texte="Le fond arrondi : Les angles arrondis adoucissent l'image, montrant la flexibilité."
              />
              <Texte
                tag="li"
                variant="li"
                texte="Le curseur de souris : C'est un des symbole du numérique et du web."
              />
            </ul>

            <Texte tag="p" variant="p" texte="Eléments graphiques :" />
            <ul className="mb-8">
              <Texte
                tag="li"
                variant="li"
                texte="Les initiales NR : Elles personnalisent le logo et renforcent mon identité."
              />
              <Texte
                tag="li"
                variant="li"
                texte="Les petits carrés : Ces éléments décoratifs dynamisent le design tout en évoquant les pixels, référence aux technologie numériques."
              />
            </ul>
          </div>
        </div>
        <Texte tag="h2" variant="h2" className="my-4" texte="Typographie" />
        <div>
          <Texte tag="h3" variant="h3" texte="Nasalization" />
          <Texte
            tag="p"
            variant="p"
            className="font-logo"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />

          <Texte tag="h3" variant="h3" texte="Orbitron" />
          <Texte
            tag="p"
            variant="p"
            className="font-titre"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />

          <Texte tag="h3" variant="h3" texte="IBM Plex Mono" />
          <Texte
            tag="p"
            variant="p"
            texte="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quo modi odit totam, ipsa dolor illum fugiat deserunt doloribus rerum labore repellendus non cumque, libero similique placeat eaque aliquam rem."
          />
        </div>
        <Texte tag="h2" variant="h2" texte="Couleurs" className="my-4" />
        <div className="flex flex-row justify-center items-center">
          <div className="bg-bleu_clair p-8 font-texte text-white border-2 border-r-0 border-black">
            #ACDDF6
          </div>
          <div className="bg-bleu_milieu p-8 font-texte text-white border-y-2 border-black">
            #4269B1
          </div>
          <div className="bg-bleu_fonce p-8 font-texte text-white border-2 border-l-0 border-black">
            #28337E
          </div>
        </div>
        <Texte
          tag="h2"
          variant="h2"
          texte="Le logo et les variantes"
          className="my-4"
        />
        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img
              src="img/logo/logo-verti-avec-nom.png"
              alt="Mon logo en version vertical avec mon nom"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Mon logo en version vertical avec mon nom"
            />
          </div>
          <div>
            <img
              src="img/logo/logo-verti-sans-nom.png"
              alt="Mon logo en version vertical sans mon nom"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Mon logo en version vertical sans mon nom"
            />
          </div>
        </div>
        <img
          src="img/logo/logo-hori.png"
          alt="Mon logo en version horizontale avec mon nom"
          className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
        />
        <Texte
          tag="p"
          variant="p"
          className="text-center"
          texte="Mon logo en version horizontale avec mon nom"
        />
        <img
          src="img/logo/banniere.png"
          alt="Ma bannière pour les réseaux sociaux"
          className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
        />
        <Texte
          tag="p"
          variant="p"
          className="text-center"
          texte="Ma bannière pour les réseaux sociaux"
        />
        <Texte
          tag="h2"
          variant="h2"
          texte="Interdits du logo :"
          className="my-4 mt-20"
        />
        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img
              src="img/logo/logo-nom-deplacer.png"
              alt="Interdit de déplacer le nom"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Interdit de déplacer le nom"
            />
          </div>
          <div>
            <img
              src="img/logo/logo-forme-changer.png"
              alt="Interdit de changer la forme"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Interdit de changer la forme"
            />
          </div>
        </div>
        <div className="md:flex flex-row justify-around items-center">
          <div>
            <img
              src="img/logo/logo-couleur-changer.png"
              alt="Interdit de changer les couleurs"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Interdit de changer les couleurs"
            />
          </div>
          <div>
            <img
              src="img/logo/logo-sans-font.png"
              alt="Interdit d’enlever le fond"
              className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
            />
            <Texte
              tag="p"
              variant="p"
              className="text-center"
              texte="Interdit d’enlever le fond"
            />
          </div>
        </div>
        <img
          src="img/logo/logo-forme-deplacer.png"
          alt="Interdit d’inverser ou déplacer les formes"
          className="m-auto mt-10 lg:mt-20 h-[200px] w-auto"
        />
        <Texte
          tag="p"
          variant="p"
          className="text-center"
          texte="Interdit d’inverser ou déplacer les formes"
        />
      </div>
      <button
        className="bg-blue-400 m-auto flex"
        href="autre/Charte_Graphique.pdf"
      >
        Télécharger ma charte graphique
      </button>
    </>
  );
}

export default CharteGraphique;
