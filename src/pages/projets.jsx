import { Projet } from "../components/compoProjet";
import { BtnHaut } from "../components/btnhautpage";
import { Texte } from "../components/texte";

function Projets() {
  return (
    <>
      <Texte tag="h1" balise="h1" texte="Voici des projets que j'ai réalisé :" />

      <BtnHaut />

      <Projet
        id={14}
        titleProjet="Site e-commerce de vente de goodies de l'école"
        description="J'ai réalisé un wireframe, la maquette sur Figma et l'intégration web sur WordPress. J'ai également fait le SEO du site e-commerce qui permettrait la vente de goodies pour la Normandie Web School."
        date="Réalisé en mars 2025"
        tags={["Figma", "WordPress", "Travail individuel"]}
        image={["img/site_e-commerce_nws/img-figma-sweat.png"]}
        nomImg={["Image de la maquette de la page du produit"]}
      />
      <Projet
        id={13}
        titleProjet="Projet pour Handisup"
        description="En équipe, nous avons réalisé la refonte d’un site web en réalisant d’abord une analyse benchmark pour identifier les axes d’amélioration. Nous avons ensuite repensé l’arborescence du site, conçu une maquette sur Figma, puis intégré le site sur WordPress."
        date="Réalisé de janvier à février 2025"
        tags={["Figma", "WordPress", "Travail en groupe"]}
        image={["img/handisup/page-accueil-site.png"]}
        nomImg={["Image du site"]}
      />
      <Projet
        id={12}
        titleProjet="Création d'un site web pour une artiste peintre"
        description="J'ai réalisé le logo, la charte graphique, le site vitrine avec le référencement et l'hebergement (via un nom de domaine et github pages) d'une artiste peintre du Loiret."
        texteLienSiteWeb="Le site web"
        lienSiteWeb="https://www.la-grange-aux-peintures.fr"
        date="Réalisé en décembre 2024"
        tags={[
          "HTML",
          "CSS",
          "JavaScript",
          "Logo",
          "Charte graphique",
          "Travail individuel",
        ]}
        image={[
          "img/la-grange-aux-peintures/logo-la-grange-aux-peintures.png",
          "img/la-grange-aux-peintures/site-web.png",
        ]}
        nomImg={["Le logo que j'ai réalisé", "image du site web"]}
        repoHref="https://github.com/Nino-Rameau/grange-aux-peintures"
      />
      <Projet
        id={11}
        titleProjet="Intégration d'une maquette figma"
        description="J'ai réalisé l'intégration web d'une maquette figma fictive."
        date="Réalisé en décembre 2024"
        tags={["HTML", "CSS", "JavaScript", "Figma", "Travail individuel"]}
        image={["img/partiel-html-css-maquette-nexcent/maquette.png"]}
        nomImg={["Image de la maquette a integrer"]}
        repoHref="https://nino-rameau.github.io/partiel-html-css/"
      />
      <Projet
        id={10}
        titleProjet="Normandie Blog School"
        description="J'ai participé au projet de la création du Normandie Blog School, un site web d'entraide scolaire entre étudiants de mon école."
        texteLienSiteWeb="Le site web"
        lienSiteWeb="https://nino-rameau.github.io/normandie-blog-school/index.html"
        date="Réalisé en décembre 2024"
        tags={["HTML", "CSS", "Logo", "Travail en groupe"]}
        image={["img/Normandie_Blog_School/logo.png"]}
        nomImg={["logo du Normandie Blog School"]}
        repoHref="https://github.com/Nino-Rameau/normandie-blog-school"
      />
      <Projet
        id={9}
        titleProjet="Portfolio V1"
        description="Première et ancienne version de mon portfolio réalisé en HTML, CSS, JS. Il est entièrement responsive."
        texteLienSiteWeb="Lien vers le portfolio"
        lienSiteWeb="https://nino-rameau.github.io/portfolio-nino-rameau/"
        date="Réalisé de novembre 2024 à janvier 2025"
        tags={["HTML", "CSS", "JavaScript", "Travail individuel"]}
        image={["img/img-portfolio-v1-html-css.png"]}
        nomImg={["Aperçu de la page d'accueil"]}
        repoHref="https://github.com/Nino-Rameau/portfolio-nino-rameau"
      />
      <Projet
        id={8}
        titleProjet="Projet Club Eco Saint Sever"
        description="Par groupe de 5 nous avons réalisé des projets comprenant un logo, une charte graphique, une maquette de site vitrine sur figma, une bannière et des goodies. J'ai en plus de cela réalisé l'intégration web de notre maquette."
        texteLienSiteWeb="Lien vers l'intégration de la maquette"
        lienSiteWeb="https://nino-rameau.github.io/integration-maquette-figma-projet-club-eco-saint-sever/"
        date="Réalisé de novembre à decembre 2024"
        tags={[
          "Logo",
          "Charte graphique",
          "Figma",
          "HTML",
          "CSS",
          "Travail individuel",
          "Travail en groupe",
        ]}
        image={[
          "img/projet-cess/logo-cess.png",
          "img/projet-cess/moodboard.png",
          "img/projet-cess/charte-graphique.png",
          "img/projet-cess/mockup.png",
        ]}
        nomImg={[
          "Le logo",
          "Le moodboard",
          "Extrait de la charte graphique",
          "Les mockup",
        ]}
        repoHref="https://github.com/Nino-Rameau/integration-maquette-figma-projet-club-eco-saint-sever"
      />
      <Projet
        id={7}
        titleProjet="Ma charte graphique"
        description="Voila ma propre charte graphique, elle est composée de mon logo, ma palette de couleur et mes polices d'écritures."
        texteLienSiteWeb="Lien vers la charte graphique"
        lienSiteWeb="https://nino-rameau.fr/charteGraphique"
        date="Réalisé en octobre 2024"
        tags={["Logo", "Charte graphique", "Travail individuel"]}
        image={["img/logo/logo-verti-sans-nom.png",]}
        nomImg={["image de mon logo"]}
        className="w-[80%] m-auto"
      />
      <Projet
        id={6}
        titleProjet="Projet BDE : Normandie Web Five"
        description="Nous avons proposé une sortie pour les étudiants de notre école à notre BDE. Nous avons réalisé un logo, affiche, sondage, devis, budget et rétroplanning..."
        texteLienSiteWeb="Le site web"
        date="Réalisé en octobre 2024"
        tags={["Logo", "Charte graphique", "Travail en groupe"]}
        image={[
          "img/projet_BDE_NW5/AfficheNW5.jpg",
          "img/projet_BDE_NW5/logoNW5.jpg",
        ]}
        nomImg={["Affiche Normandie Web Five", "Logo Normandie Web Five"]}
      />
      <Projet
        id={5}
        titleProjet="Interview d'un étudiant :"
        description="Projet d’Interview d’Étudiant en Alternance : J’ai réalisé une interview et un carrousel de présentation pour un étudiant de la Normandie Web School, actuellement en alternance chez Sciencethic - Sonodis, à Normanville."
        date="Réalisé en octobre 2024"
        tags={["Canva", "Travail individuel"]}
        image={[
          "img/interview/1.png",
          "img/interview/2.png",
          "img/interview/3.png",
          "img/interview/4.png",
          "img/interview/5.png",
          "img/interview/6.png",
          "img/interview/7.png",
          "img/interview/8.png",
        ]}
        nomImg={[
          "Image 1 de l'interview",
          "Image 2 de l'interview",
          "Image 3 de l'interview",
          "Image 4 de l'interview",
          "Image 5 de l'interview",
          "Image 6 de l'interview",
          "Image 7 de l'interview",
          "Image 8 de l'interview",
        ]}
      />
      <Projet
        id={4}
        titleProjet="Site de mini-jeux"
        description="Ce projet est un site web local de mini-jeux interactifs, incluant des jeux comme le Morpion et le Snake. Le site est développé avec Python et le module Flask. Les pages web sont créées en HTML, CSS et JavaScript, et une base de données MySQL est intégrée pour gérer les scores et les profils des joueurs."
        date="Réalisé en Janvier 2024"
        tags={[
          "Python",
          "MySQL",
          "HTML",
          "CSS",
          "JavaScript",
          "Logo",
          "Travail en groupe",
        ]}
        image={[
          "img/mini-jeux/jeu.png",
          "img/mini-jeux/morpion.png",
          "img/mini-jeux/snake.png",
          "img/mini-jeux/classement.png",
        ]}
        nomImg={[
          "Page d'accueil",
          "Jeu du morpion",
          "Jeu du snake",
          "Page de score",
        ]}
        repoHref="https://github.com/Nino-Rameau/mini_jeux"
      />
      <Projet
        id={3}
        titleProjet="Gestion de badges RFID en Python et MySQL"
        description="Le programme permet de gérer les données des badges RFID via une interface en ligne de commande. Il est développé en Python et est connecté à une base de données MySQL, il permet d’afficher, de modifier, de supprimer des informations de manière organisée."
        date="Réalisé en novembre 2023"
        tags={["Python", "MySQL", "Travail individuel"]}
        image={["img/badge_RFID/img1.png"]}
        nomImg={["image du programme"]}
        repoHref="https://github.com/Nino-Rameau/Gestion_badge_RFID"
      />
      <Projet
        id={2}
        titleProjet="Quiz sur la Guyane"
        description="J’ai créé un site web de quiz sur la Guyane. Le site utilise les langages HTML, CSS et Python avec Flask. C’est mon premier projet web, qui m’a permis de découvrir le développement de sites."
        lienSiteWeb=""
        date="Réalisé en mai 2023"
        tags={["Python", "HTML", "CSS", "Travail individuel"]}
        image={[
          "img/quiz_guyane/1.png",
          "img/quiz_guyane/2.png",
          "img/quiz_guyane/3.png",
        ]}
        nomImg={["Page de connexion", "Page d'accueil", "Page du quiz"]}
        repoHref="https://github.com/Nino-Rameau/Quiz_Guyane"
      />
      <Projet
        id={1}
        titleProjet="Projet Architecture urbaine sur turtle"
        description="Ce projet Python utilise le module Turtle pour créer un dessin. Le code génère un ciel, des nuages, un soleil et une rue composée d’immeubles. Chaque immeuble a des murs colorés et un nombre d’étages aléatoires, ainsi que des fenêtres et un toit."
        texteLienSiteWeb="Le site web"
        lienSiteWeb=""
        date="Réalisé en mars 2023"
        tags={["Python", "Travail en groupe"]}
        image={["img/ville_turtle/ville.png"]}
        nomImg={["image du résultat du programme"]}
        repoHref="https://github.com/Nino-Rameau/Architecture_urbaine_sur_turtle"
      />
    </>
  );
}

export default Projets;
