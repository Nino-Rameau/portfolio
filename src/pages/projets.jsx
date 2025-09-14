import Projet from "../components/compoProjet";
import BtnHaut from "../components/btnhautpage";
import Texte from "../components/texte";
import SEO from "../components/seo";
import TagCategorie from "../components/TrieTagsProjets";
import { useState } from "react";

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
      nouveauTableau = tagsActuels.concat(tag); // nouveauTableau est le contenue de tagsActuels + tag
    }

    settagsSelectionnes(nouveauTableau); // pour le useState
  }

  const tagEquivalences = {
    JavaScript: ["JavaScript", "Node.js", "React"], // si JavaScript coché on affiche aussi ce avec le tag Node.js et React
  };

  const ProjetAfficher = (projet) => {
    if (tagsSelectionnes.length === 0) return true; // si aucun filtre selectionner on affiche tout

    return tagsSelectionnes.every((tagSelectionne) => { // si plusieurs filtre on affiche les projet qui on TOUS les filtre 
      const tagsEquiv = tagEquivalences[tagSelectionne] || [tagSelectionne]; // || car pour JavaScript qui groupe plusieurs tags
      return projet.tags.some((tagProjet) => tagsEquiv.includes(tagProjet));
    });
  };

  const projets = [
    {
      id: 18,
      titleProjet: "Intégration d'une maquette HTML",
      description: "J'ai réalisé l'intégration web d'une maquette figma.",
      texteLienSiteWeb: "Lien vers mon intégration",
      lienSiteWeb: "https://nino-rameau.github.io/integration-maquette-copywriting",
      date: "Réalisé en Septembre 2025",
      tags: ["HTML", "CSS", "JavaScript", "Figma", "Travail individuel", "Projet scolaire"],
      image: ["img/120925-integration-maquette/maquette.webp"],
      nomImg: ["Visuelle de la page d'accueil en mode clair"],
      repoHref: "https://github.com/Nino-Rameau/integration-maquette-copywriting",
    },
    {
      id: 17,
      titleProjet: "Création d'un dashboard",
      description:
        "J'ai réalisé un wireframe puis réalisé un dashboard avec Vite, React, Tailwind CSS et des bibliothèques. Le dashboard est pour la Normandie Web School.",
      date: "Réalisé en Septembre 2025",
      tags: ["React", "Tailwind CSS", "Figma", "Travail individuel", "Projet scolaire"],
      image: [
        "img/110925-dashboard/accueil.webp",
        "img/110925-dashboard/A2.webp",
        "img/110925-dashboard/tableau.webp",
        "img/110925-dashboard/wireframe.webp",
      ],
      nomImg: [
        "Visuel de la page d'accueil",
        "Visuel de la page d'une année",
        "Visuel de la page étudiant avec le tableau",
        "Wireframe réalisé sur figma",
      ],
      repoHref: "https://github.com/Nino-Rameau/integration-dashboard-stripe",
    },
    {
      id: 16,
      titleProjet: "Création d'une maquette Figma",
      description:
        "J’ai réalisé une maquette sur Figma à partir d’un brief client. Dans cette maquette, j’ai prototypé le carrousel, une popup et l’accordéon de la partie FAQ.",
      date: "Réalisé en Septembre 2025",
      tags: ["Figma", "Travail individuel", "Projet scolaire"],
      image: ["img/050925-creation-maquette-figma/maquette.webp"],
      nomImg: ["Visuel de ma maquette"],
    },
    {
      id: 15,
      titleProjet: "Interface de gestion de scraper",
      description:
        "J’ai développé une mini-interface permettant de scraper les prix d'un site web depuis un fichier Excel et de générer un nouveau tableau avec les résultats, affichant une erreur en cas de problème. Réalisé avec Node.js, Express, Puppeteer, ExcelJS et Multer, ce projet offre une solution simple et accessible à un utilisateur non technique.",
      date: "Réalisé en juillet 2025",
      tags: ["Node.js", "Puppeteer", "Travail individuel", "Projet personnel"],
      image: ["img/scraper-ref-prix/interface-page.png"],
      nomImg: ["Visuelle de l'interface"],
    },
    {
      id: 14,
      titleProjet: "Site e-commerce de vente de goodies de l'école",
      description:
        "J'ai réalisé un wireframe, la maquette sur Figma et l'intégration web sur WordPress. J'ai également fait le SEO du site e-commerce qui permettrait la vente de goodies pour la Normandie Web School.",
      date: "Réalisé en mars 2025",
      tags: ["Figma", "WordPress", "Travail individuel", "Projet scolaire"],
      image: ["img/site_e-commerce_nws/img-figma-sweat.png"],
      nomImg: ["Image de la maquette de la page du produit réalisée sur Figma"],
    },
    {
      id: 13,
      titleProjet: "Projet pour Handisup",
      description:
        "En équipe, nous avons réalisé la refonte d’un site web en réalisant d’abord une analyse benchmark pour identifier les axes d’amélioration. Nous avons ensuite repensé l’arborescence du site, conçu une maquette sur Figma, puis intégré le site sur WordPress.",
      date: "Réalisé de janvier à février 2025",
      tags: ["Figma", "WordPress", "Travail en groupe", "Projet scolaire"],
      image: ["img/handisup/page-accueil-site.png"],
      nomImg: ["Image de la page d'accueil du site web intégrée sur WordPress"],
    },
    {
      id: 12,
      titleProjet: "Création d'un site web pour une artiste peintre",
      description:
        "J'ai réalisé le logo, la charte graphique, le site vitrine avec le référencement et l'hebergement (via un nom de domaine et github pages) d'une artiste peintre du Loiret.",
      texteLienSiteWeb: "Le site web",
      lienSiteWeb: "https://www.la-grange-aux-peintures.fr",
      date: "Réalisé en décembre 2024",
      tags: ["HTML", "CSS", "JavaScript", "Logo", "Charte graphique", "Travail individuel", "Projet personnel"],
      image: [
        "img/la-grange-aux-peintures/logo-la-grange-aux-peintures.png",
        "img/la-grange-aux-peintures/site-web.png",
      ],
      nomImg: ["Le logo que j'ai réalisé", "image du site web"],
      repoHref: "https://github.com/Nino-Rameau/grange-aux-peintures",
    },
    {
      id: 11,
      titleProjet: "Intégration d'une maquette figma",
      description: "J'ai réalisé l'intégration web d'une maquette figma fictive.",
      date: "Réalisé en décembre 2024",
      tags: ["HTML", "CSS", "JavaScript", "Figma", "Travail individuel", "Projet scolaire"],
      image: ["img/partiel-html-css-maquette-nexcent/maquette.png"],
      nomImg: ["Image de la maquette a integrer"],
      repoHref: "https://nino-rameau.github.io/partiel-html-css/",
    },
    {
      id: 10,
      titleProjet: "Normandie Blog School",
      description:
        "J'ai participé au projet de la création du Normandie Blog School, un site web d'entraide scolaire entre étudiants de mon école.",
      texteLienSiteWeb: "Le site web",
      lienSiteWeb: "https://nino-rameau.github.io/normandie-blog-school/index.html",
      date: "Réalisé en décembre 2024",
      tags: ["HTML", "CSS", "Logo", "Travail en groupe", "Projet scolaire"],
      image: ["img/Normandie_Blog_School/logo.png"],
      nomImg: ["logo du Normandie Blog School"],
      repoHref: "https://github.com/Nino-Rameau/normandie-blog-school",
    },
    {
      id: 9,
      titleProjet: "Portfolio V1",
      description:
        "Première et ancienne version de mon portfolio réalisé en HTML, CSS, JS. Il est entièrement responsive.",
      texteLienSiteWeb: "Lien vers le portfolio",
      lienSiteWeb: "https://nino-rameau.github.io/portfolio-nino-rameau/",
      date: "Réalisé de novembre 2024 à janvier 2025",
      tags: ["HTML", "CSS", "JavaScript", "Travail individuel", "Projet scolaire"],
      image: ["img/img-portfolio-v1-html-css.png"],
      nomImg: ["Aperçu de la page d'accueil"],
      repoHref: "https://github.com/Nino-Rameau/portfolio-nino-rameau",
    },
    {
      id: 8,
      titleProjet: "Projet Club Eco Saint Sever",
      description:
        "Par groupe de 5 nous avons réalisé des projets comprenant un logo, une charte graphique, une maquette de site vitrine sur figma, une bannière et des goodies. J'ai en plus de cela réalisé l'intégration web de notre maquette.",
      texteLienSiteWeb: "Lien vers l'intégration de la maquette",
      lienSiteWeb:
        "https://nino-rameau.github.io/integration-maquette-figma-projet-club-eco-saint-sever/",
      date: "Réalisé de novembre à decembre 2024",
      tags: ["Logo", "Charte graphique", "Figma", "HTML", "CSS", "Travail individuel", "Travail en groupe", "Projet scolaire"],
      image: [
        "img/projet-cess/logo-cess.png",
        "img/projet-cess/moodboard.png",
        "img/projet-cess/charte-graphique.png",
        "img/projet-cess/mockup.png",
      ],
      nomImg: ["Le logo", "Le moodboard", "Extrait de la charte graphique", "Les mockup"],
      repoHref: "https://github.com/Nino-Rameau/integration-maquette-figma-projet-club-eco-saint-sever",
    },
    {
      id: 7,
      titleProjet: "Ma charte graphique",
      description:
        "Voila ma propre charte graphique, elle est composée de mon logo, ma palette de couleur et mes polices d'écritures.",
      texteLienSiteWeb: "Lien vers la charte graphique",
      lienSiteWeb: "/charteGraphique",
      date: "Réalisé en octobre 2024",
      tags: ["Logo", "Charte graphique", "Travail individuel", "Projet scolaire"],
      image: ["img/logo/logo-verti-sans-nom.png"],
      nomImg: ["image de mon logo"],
      className: "w-[80%] m-auto",
    },
    {
      id: 6,
      titleProjet: "Projet BDE : Normandie Web Five",
      description:
        "Nous avons proposé une sortie pour les étudiants de notre école à notre BDE. Nous avons réalisé un logo, affiche, sondage, devis, budget et rétroplanning...",
      texteLienSiteWeb: "Le site web",
      date: "Réalisé en octobre 2024",
      tags: ["Logo", "Charte graphique", "Travail en groupe", "Projet scolaire"],
      image: ["img/projet_BDE_NW5/AfficheNW5.jpg", "img/projet_BDE_NW5/logoNW5.jpg"],
      nomImg: ["Affiche Normandie Web Five", "Logo Normandie Web Five"],
    },
    {
      id: 5,
      titleProjet: "Interview d'un étudiant",
      description:
        "Projet d’Interview d’Étudiant en Alternance : J’ai réalisé une interview et un carrousel de présentation pour un étudiant de la Normandie Web School, actuellement en alternance chez Sciencethic - Sonodis, à Normanville.",
      date: "Réalisé en octobre 2024",
      tags: ["Canva", "Travail individuel", "Projet scolaire"],
      image: [
        "img/interview/1.png",
        "img/interview/2.png",
        "img/interview/3.png",
        "img/interview/4.png",
        "img/interview/5.png",
        "img/interview/6.png",
        "img/interview/7.png",
        "img/interview/8.png",
      ],
      nomImg: [
        "Image 1 de l'interview",
        "Image 2 de l'interview",
        "Image 3 de l'interview",
        "Image 4 de l'interview",
        "Image 5 de l'interview",
        "Image 6 de l'interview",
        "Image 7 de l'interview",
        "Image 8 de l'interview",
      ],
    },
    {
      id: 4,
      titleProjet: "Site de mini-jeux",
      description:
        "Ce projet est un site web local de mini-jeux interactifs, incluant des jeux comme le Morpion et le Snake. Le site est développé avec Python et le module Flask. Les pages web sont créées en HTML, CSS et JavaScript, et une base de données MySQL est intégrée pour gérer les scores et les profils des joueurs.",
      date: "Réalisé en Janvier 2024",
      tags: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Logo", "Travail en groupe", "Projet scolaire"],
      image: [
        "img/mini-jeux/jeu.png",
        "img/mini-jeux/morpion.png",
        "img/mini-jeux/snake.png",
        "img/mini-jeux/classement.png",
      ],
      nomImg: ["Page d'accueil", "Jeu du morpion", "Jeu du snake", "Page de score"],
      repoHref: "https://github.com/Nino-Rameau/mini_jeux",
    },
    {
      id: 3,
      titleProjet: "Gestion de badges RFID en Python et MySQL",
      description:
        "Le programme permet de gérer les données des badges RFID via une interface en ligne de commande. Il est développé en Python et est connecté à une base de données MySQL, il permet d’afficher, de modifier, de supprimer des informations de manière organisée.",
      date: "Réalisé en novembre 2023",
      tags: ["Python", "MySQL", "Travail individuel", "Projet scolaire"],
      image: ["img/badge_RFID/img1.png"],
      nomImg: ["image du programme"],
      repoHref: "https://github.com/Nino-Rameau/Gestion_badge_RFID",
    },
    {
      id: 2,
      titleProjet: "Quiz sur la Guyane",
      description:
        "J’ai créé un site web de quiz sur la Guyane. Le site utilise les langages HTML, CSS et Python avec Flask. C’est mon premier projet web, qui m’a permis de découvrir le développement de sites.",
      date: "Réalisé en mai 2023",
      tags: ["Python", "HTML", "CSS", "Travail individuel", "Projet scolaire"],
      image: ["img/quiz_guyane/1.png", "img/quiz_guyane/2.png", "img/quiz_guyane/3.png"],
      nomImg: ["Page de connexion", "Page d'accueil", "Page du quiz"],
      repoHref: "https://github.com/Nino-Rameau/Quiz_Guyane",
    },
    {
      id: 1,
      titleProjet: "Projet Architecture urbaine sur turtle",
      description:
        "Ce projet Python utilise le module Turtle pour créer un dessin. Le code génère un ciel, des nuages, un soleil et une rue composée d’immeubles. Chaque immeuble a des murs colorés et un nombre d’étages aléatoires, ainsi que des fenêtres et un toit.",
      texteLienSiteWeb: "Le site web",
      date: "Réalisé en mars 2023",
      tags: ["Python", "Travail en groupe", "Projet scolaire"],
      image: ["img/ville_turtle/ville.png"],
      nomImg: ["image du résultat du programme"],
      repoHref: "https://github.com/Nino-Rameau/Architecture_urbaine_sur_turtle",
    },
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TagCategorie title="Technologies front-end" options={["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Technologies back-end" options={["Python", "MySQL", "Node.js", "Puppeteer"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="CMS" options={["WordPress"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Design & Graphisme" options={["Logo", "Charte graphique", "Canva", "Figma"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Type de travail" options={["Travail individuel", "Travail en groupe"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
          <TagCategorie title="Type de projet" options={["Projet personnel", "Projet scolaire"]} tagsSelectionnes={tagsSelectionnes} gestionClicTag={boxCocher} />
        </div>
      </section>

      <section className="space-y-8">
        {projets.filter(ProjetAfficher).map((projet, index) => (
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
              repoHref={projet.repoHref}
              className={projet.className}
            />
          : null
        ))}
      </section>
    </>
  );
}

export default Projets;
