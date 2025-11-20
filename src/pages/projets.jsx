import Projet from "../components/compoProjet";
import BtnHaut from "../components/btnhautpage";
import Texte from "../components/texte";
import SEO from "../components/seo";
import TagCategorie from "../components/TrieTagsProjets";
import { useState } from "react";
import data from "../data/projets.json"

function Projets() {
  const [tagsSelectionnes, settagsSelectionnes] = useState([]);

  function boxCocher(tag) {
    var tagsActuels = tagsSelectionnes;
    var nouveauTableau;

    if (tagsActuels.includes(tag)) {
      nouveauTableau = tagsActuels.filter(function(t) { // t est l'equivalent de i dans une boucle
        return t !== tag;
      });
    } else {
      nouveauTableau = tagsActuels.concat(tag); 
    }

    settagsSelectionnes(nouveauTableau);
  }

  const tagEquivalences = {
    JavaScript: ["JavaScript", "Node.js", "React"], 
  };

  const ProjetAfficher = (projet) => {
    if (tagsSelectionnes.length === 0) return true; 

    return tagsSelectionnes.every((tagSelectionne) => { 
      const tagsEquiv = tagEquivalences[tagSelectionne] || [tagSelectionne]; 
      return projet.tags.some((tagProjet) => tagsEquiv.includes(tagProjet));
    });
  };

  return (
    <>
      <SEO
        title="Projets | Nino Rameau | Étudiant Développeur Web à la NWS de Rouen"
        description={`Découvrez mes projets : sites web, logo, integration web...`}
        keywords="Nino Rameau, développeur web, portfolio, front-end, back-end, projets, sites web, logo, intégration web, Rouen, Normandie Web School, NWS, étudiant"
        canonical="https://nino-rameau.fr/projets"
      />

      <Texte tag="h1" balise="h1" texte="Voici des projets que j'ai réalisé :" />

      <BtnHaut />

      <section className="p-6 mb-10 border-b-white border-b-2 lg:border-b-0">
        
        <Texte tag="h2" balise="h2" texte="Tags" className="text-2xl font-bold text-center mb-4" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:max-w-[1800px] mx-auto">
          <TagCategorie title="Technologies front-end" options={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Technologies back-end" options={["Python", "MySQL", "Node.js", "Puppeteer"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="CMS" options={["WordPress"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Design & Graphisme" options={["Logo", "Charte graphique", "Canva", "Figma"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Type de travail" options={["Travail individuel", "Travail en groupe"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Type de projet" options={["Projet personnel", "Projet scolaire"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
        </div>
      </section>

      <section className="space-y-8">
        {data
        .filter((projet) => projet.visible)
        .filter(ProjetAfficher)
        .map((projet, index) => (
          ProjetAfficher(projet) ? 
            <Projet 
              indexAffichage={index}
              key={projet.id}
              id={projet.id}
              titleProjet={projet.titleProjet}
              description={projet.description}
              texteLienSiteWeb={projet.texteLienSiteWeb}
              lienSiteWeb={projet.lienSiteWeb}
              date={projet.date}
              tags={projet.tags}
              image={projet.image}
              nomImg={projet.nomImg}
              StyleImg={projet.StyleImg}
              repoHref={projet.repoHref}
            />
          : null
        ))}
      </section>
    </>
  );
}

export default Projets;