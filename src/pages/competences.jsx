import CardRV from "../components/cardrectoverso";
import Texte from "../components/texte";
import BtnHaut from "../components/btnhautpage";
import CardTerminal from "../components/cardTerminal";
import SEO from "../components/seo";
import DataCertifications from "../data/certifications.json"
import DataCompetences from "../data/competences.json"


function Competences() {
  return (
    <>
      <SEO
        title="Compétences | Nino Rameau | Étudiant Développeur Web à la NWS de Rouen"
        description={`Découvrez mes compétences (front-end, back-end, ...) et mes certifications.`}
        keywords="Nino Rameau, développeur web, portfolio, front-end, back-end, compétences, certifications, HTML, CSS, JavaScript, React, Tailwind CSS, Python, SQL, GitHub, Figma, Canva"
        canonical="https://nino-rameau.fr/competences"
      />

      <BtnHaut />

      <Texte tag="h1" balise="h1" texte="Mes compétences :" />
      
            <div className="flex justify-center items-center flex-wrap mt-4">
              {DataCompetences
              .map((competence) => (
                <CardTerminal 
                  titre = {competence.titre}
                  competence={competence.competence}
                />
              ))}
        </div>

      <Texte tag="h1" balise="h1" texte="Mes certifications :" className="mt-30" />

      <div className=" m-auto flex flex-row flex-wrap justify-around lg:max-w-[2000px]">
        {DataCertifications
        .filter((certification) => certification.visible)
        .map((certification) => (
          <CardRV
            titleRecto = {certification.titreRecto}
            image = {certification.image}
            descriptionImage = {certification.descriptionImage}
            date = {certification.date}
            titreVerso = {certification.titreVerso}
            descriptionVerso={certification.descriptionVerso}
            textLien = {certification.textLien}
            lien = {certification.lien}
          />
        ))}
      </div>
    </>
  );
}

export default Competences;