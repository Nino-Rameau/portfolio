import { Projet } from "../components/compoProjet";
import { BtnHaut } from "../components/btnhautpage";

function Projets() {
  return (
    <>
      <BtnHaut />
      <Projet
        ordre="row"
        titleProjet="Intégration d'une maquette figma"
        description="J'ai réalisé l'intégration web d'une maquette figma fictive."
        lienSiteWeb="https://google.com"
        date="Réalisé en décembre 2024"
        tags={["HTML", "CSS", "JavaScript", "Figma", "Travail individuel"]}
        image={["img/partiel-html-css-maquette-nexcent/maquette.png"]}
        nomImg="Logo de mon projet"
        repoHref="https://github.com"
      />
      <Projet
        ordre="row-reverse"
        titleProjet="Projet Club Eco Saint Sever"
        description="Par groupe de 5 nous avons réalisé des projets comprenant un logo, une charte graphique, une maquette de site vitrine sur figma, une bannière et des goodies. J'ai en plus de cela réalisé l'intégration web de notre maquette."
        lienSiteWeb="https://google.com"
        date="Réalisé de novembre à decembre 2024"
        tags={[
          "Logo",
          "Charte graphique",
          "Figma",
          "HTML",
          "CSS",
          "Travail en groupe",
          "Travail individuel",
        ]}
        image={["logo-verti-sans-nom.png"]}
        nomImg="Logo de mon projet"
        repoHref="https://github.com"
      />
    </>
  );
}

export default Projets;
