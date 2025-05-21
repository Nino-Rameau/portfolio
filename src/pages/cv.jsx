import { Texte } from "../components/texte";
import { Liste } from "../components/liste-ul-li";
import  BtnTelechargement  from "../components/btnTelechargement"; 

function Cv() {
  return (
    <>
      <Texte tag="h1" balise="h1" texte="Mon CV" />
      <div className="bg-white dark:bg-zinc-700 border-4 border-bleu_fonce rounded-[2rem] w-[90%] m-auto grid md:grid-cols-2 lg:grid-cols-[1fr_1fr]">

        {/* photo / Contact */}
        <div className="sm:p-4 flex flex-col items-center text-center py-4">
          <img
            className="rounded-full w-[15rem]"
            src="../../img/photo_nino.jpg"
            alt="Nino Rameau"
          />
          <Texte tag="h2" balise="h2" texte="Rameau Nino" className="m-4 lg:m-10"/>
          <Liste
            items={[
              "18 ans",
              "nrameau@normandiewebschool.fr",
              "+33 6 66 70 05 91",
              "Rouen (76) / Evreux (27)",
              "Permis B et voiture",
            ]}
            balise="pasPoint"
            margin="margin_0"
          />

          {/* CENTRES INTERET */}
          <Texte tag="h3" balise="h3" texte="CENTRES D’INTÉRÊT" couleur="couleur" className="mt-10" />
          <Liste items={["Tennis", "Jeux vidéo", "Tourisme"]} balise="pasPoint" className="mb-2 md:mb-4" />

          {/* QRCode */}
          <Texte tag="h3" balise="h3" texte="Portfolio" className="mt-6" />
          <Texte tag="a" balise="a" lien="https://nino-rameau.fr" texte="nino-rameau.fr" couleur="couleur" className="text-xl no-underline"/>

          <Texte tag="h3" balise="h3" texte="LinkedIn" className="mt-6" />
          <Texte
            tag="a"
            balise="a"
            lien="https://www.linkedin.com/in/nino-rameau-1a0636332/"
            texte={
              <img
                src="../../img/QRCode_linkedin.jpg"
                alt="QR code linkedIn"
                className="mb-4 w-[8rem] md:w-40"
              />
            }
          />

          <Texte tag="h3" balise="h3" texte="GitHub" className="mt-6" />
          <Texte
            tag="a"
            balise="a"
            lien="https://github.com/Nino-Rameau"
            texte={
              <img
                src="../../img/QRCode_GitHub.png"
                alt="QR code GitHub"
                className="mb-4 w-[8rem] md:w-40"
              />
            }
          />
        </div>

        {/* OBJECTIF / FORMATIONS / EXPERIENCES */}
        <div className="p-4 flex flex-col gap-6 md:border-l-[15px] border-bleu_fonce">
          <div>
            <Texte tag="h3" balise="h3" texte="OBJECTIF" couleur="couleur" className="m-6" />
            <Texte tag="p" balise="p" texte="Actuellement étudiant en première année à la Normandie Web School de Rouen, je suis à la recherche d’une alternance pour la rentrée 2025 en développement web ou en intégration web. Je m’intéresse autant au développement front-end qu’au back-end." />
          </div>

          <div>
            <Texte tag="h3" balise="h3" texte="FORMATIONS" couleur="couleur" className="m-6" />
            <Liste
              items={[
                <Liste
                  items={[
                    "2024-2027 : Bachelor chef de projets digitaux", 
                    "Spécialité développement web", 
                    "Normandie Web School",
                  ]}
                  variant="pasPoint" 
                  />,
                  
                  <Liste
                  items={[
                    "2024 : Baccalauréat général",
                    "Spécialités : NSI et maths",
                    "Lycée Modeste Leroy, Evreux",
                  ]}
                  variant="pasPoint" 
                  marge="top_10"
                  />,
              ]}
            />
          </div>

          <div>
          <Texte tag="h3" balise="h3" texte="EXPERIENCES" couleur="couleur" className="m-6" />
          <Liste
            items={[
              <Liste
                items={[
                  "2025 : Stage à Immobilier Neuf Conseil à Rouen (2 mois)",
                  "(Création et maintenance de scraper, SEO)",
                ]}
                variant="pasPoint"
              />,
              <Liste
                items={[
                  "2025 : Refonte du site vitrine de l’association Handisup",
                  "(Refonte de l’arborescence, création de maquette sur Figma puis intégration web sur WordPress avec Elementor)",
                ]}
                variant="pasPoint"
                marge="top_6"
              />,
              <Liste
                items={[
                  "2025 : Création d’un site pour une artiste peintre",
                  "(Création de logo, charte graphique, site en HTML, CSS et JS, référencement, hébergement...)",
                ]}
                variant="pasPoint"
                marge="top_6"
              />,
              <Liste
                items={[
                  "2025 : Création d’un Portfolio",
                  "(Codé avec React.js et Tailwind CSS, il présente mes projets, mes compétences. Ce nouveau portfolio est une refonte de mon ancien réalisé en HTML, CSS et JS)",
                ]}
                variant="pasPoint"
                marge="top_6"
              />,
              <Liste
                items={[
                  "2024 : Projet Club Eco Saint Sever",
                  "(Création de logo, charte graphique, site vitrine, identité visuelle...)",
                ]}
                variant="pasPoint"
                marge="top_6"
              />,
              <Liste
                items={[
                  "2024 : CDD Sciencéthic assistant polyvalent",
                  "(Mise à jour site web, aide comptabilité, archives, préparation de commandes...)",
                ]}
                variant="pasPoint"
                marge="top_6"
              />,
            ]}
          />

          </div>
        </div>

        {/* COMPETENCES */}
        <div className="p-4 md:col-span-2 md:border-t-[15px] border-bleu_fonce">
          <Texte tag="h3" balise="h3" texte="COMPETENCES" couleur="couleur" className="mb-4" />
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Texte tag="h4" balise="h4" texte="Logiciels :" className="mb-2" />
              <Liste
                items={[
                  "Visual Studio Code",
                  "Suite Office (Word, PowerPoint)",
                  "Canva",
                ]}
                balise="pasPoint"
                text="center"
              />

              <Texte tag="h4" balise="h4" texte="En apprentissage :" className="mt-4 mb-2" />
              <Liste
                items={[
                  "Photoshop",
                  "Illustrator",
                  "InDesign",
                  "Wordpress",
                  "Figma",
                ]}
                balise="pasPoint"
                text="center"
              />
            </div>

            <div>
              <Texte tag="h4" balise="h4" texte="Langages :" className="mb-2" />
              <Liste
                items={["Python", "HTML", "CSS", "SQL"]}
                balise="pasPoint"
                text="center"
              />

              <Texte tag="h4" balise="h4" texte="En apprentissage :" className="mt-4 mb-2" />
              <Liste
                items={["JavaScript", "React", "Tailwindcss", "PHP"]}
                balise="pasPoint"
                text="center"
              />
            </div>
          </div>
        </div>
      </div>

      <BtnTelechargement texte = "Télécharger mon CV" lien = "../autre/Nino_RAMEAU_dev_web.pdf" />
    </>
  );
}

export default Cv;
