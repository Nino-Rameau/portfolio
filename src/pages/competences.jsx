import CardRV from "../components/cardrectoverso";
import Texte from "../components/texte";
import BtnHaut from "../components/btnhautpage";
import CardTerminal from "../components/cardTerminal";
import SEO from "../components/seo";


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
              <CardTerminal 
              titre="Front-end :"
              competence={[
                { 
                  Langage: "HTML",
                  Note: 4.5, 
                  img: "img/logo-divers/html.png",
                  texteAlt: "Logo HTML5",
                  Description: "Je sais réaliser des pages web bien structurées et optimisées en HTML5, en respectant les standards du web et en utilisant des balises sémantiques pour améliorer l’accessibilité et le référencement naturel (SEO).", 
                  dureeExperience: "Découvert début 2024, utilisé régulièrement depuis." },
                { 
                  Langage: "CSS", 
                  Note: 4,
                  img: "img/logo-divers/css.png",
                  texteAlt: "Logo CSS3",
                  Description: "J’utilise CSS3 avec Flexbox, Grid et les media queries pour concevoir des sites web responsifs et esthétiques, adaptés à tous les types d’écrans.", 
                  dureeExperience: "Découvert début 2024, utilisé régulièrement depuis." },
                { 
                  Langage: "JavaScript", 
                  Note: 2.5,
                  img: "img/logo-divers/js.png",
                  texteAlt: "Logo JavaScript",
                  Description: "J’ai acquis les bases de JavaScript pour rendre les sites web interactifs et dynamiques. J'apprends à manipuler le DOM, gérer des événements, et j’ai aussi découvert l’automatisation avec Puppeteer, que j’ai utilisé pour réaliser des scripts de scraping de données.", 
                  dureeExperience: "Découvert fin 2024, mais je l'apprends en priorité sur la partie native et la partie Puppeteer pour du scraping." },
                { 
                  Langage: "React", 
                  Note: 1,
                  img: "img/logo-divers/react.png",
                  texteAlt: "Logo React",
                  Description: "Je suis en train de découvrir React et son écosystème. J’ai réalisé mon portfolio avec React 19, en intégrant par exemple React Router Dom pour la navigation et Tailwind CSS pour le design. J’apprends à structurer mes applications avec des composants.", 
                  dureeExperience: "Découvert début 2025, utilisé pour mon portfolio et en cours d’apprentissage." },
                { 
                  Langage: "Tailwind CSS", 
                  Note: 3.5,
                  img: "img/logo-divers/tailwindcss.png",
                  texteAlt: "Logo Tailwind CSS",
                  Description: "J’utilise Tailwind CSS pour construire mes interfaces rapidement et efficacement. Grâce à sa syntaxe, je peux créer des designs responsifs et cohérents sans passer par des fichiers CSS classiques et beaucoup plus rapidement.", 
                  dureeExperience: "Découvert début 2025, utilisé régulièrement dans mes projets, notamment sur mon portfolio." }
              ]}
            />
      
              <CardTerminal 
                titre="Back-end :"
                competence={[
                  { 
                    Langage: "Python", 
                    Note: 3,
                    img: "img/logo-divers/python.png",
                    texteAlt: "Logo Python",
                    Description: "Je maîtrise Python pour créer des scripts et j’utilise des frameworks comme Flask pour développer des sites web avec une base de données.", 
                    dureeExperience: "Utilisé quotidiennement pendant deux ans au lycée (2022-2024)."},
                  { 
                    Langage: "SQL", 
                    Note: 4,
                    img: "img/logo-divers/sql.png",
                    texteAlt: "Logo SQL",
                    Description: "J’utilise les requêtes SQL avec un terminal MySQL ou PhpMyAdmin pour effectuer des opérations simples (sélections, insertions, jointures...).", 
                    dureeExperience: "Appris en 2024 et utilisé régulièrement depuis." },
                  { Langage: "PHP", 
                    Note: 1,
                    img: "img/logo-divers/php.png",
                    texteAlt: "Logo PHP",
                    Description: "Je possède les bases du langage.", 
                    dureeExperience: "Initiation en mai 2025." }
                ]}
              />
      
              <CardTerminal 
                titre="Développement web :"
                competence={[
                  { 
                    Langage: "WordPress & Elementor", 
                    Note: 2,
                    img: "img/logo-divers/wordpress.png",
                    texteAlt: "Logo WordPress",
                    Description: "J'ai les bases avec Elementor et je sais utiliser des extensions pour créer des pages simples.", 
                    dureeExperience: "Découvert fin 2024, utilisé très rarement." },
                  { 
                    Langage: "Git & GitHub", 
                    Note: 3,
                    img: "img/logo-divers/github.png",
                    texteAlt: "Logo GitHub",
                    Description: "Je connais les principes de Git et GitHub. Je connais les commandes de base pour Git.", 
                    dureeExperience: "Découvert fin 2024, utilisé régulièrement." },
                  { 
                    Langage: "Figma", 
                    Note: 4,
                    img: "img/logo-divers/figma.png",
                    texteAlt: "Logo Figma",
                    Description: "J’utilise Figma pour créer des maquettes simples de sites web, comme mon portfolio.", 
                    dureeExperience: "Découvert fin 2024, utilisé ponctuellement." }
                ]}
              />
      
              <CardTerminal 
                titre="Graphisme :"
                competence={[
                  { 
                    Langage: "Canva", 
                    Note: 4,
                    img: "img/logo-divers/canva.png",
                    texteAlt: "Logo Canva",
                    Description: "Je maîtrise Canva pour créer des visuels simples et efficaces. Je l’utilise surtout pour des présentations ou des mises en pages diverses.", 
                    dureeExperience: "Découvert au lycée et utilisé régulièrement au quotidien." },
                  { 
                    Langage: "PhotoShop", 
                    Note: 1,
                    img: "img/logo-divers/photoshop.png",
                    texteAlt: "Logo Photoshop",
                    Description: "Je connais les bases de Photoshop et son utilité principale (retouche photo, création d’images).", 
                    dureeExperience: "Découvert fin 2024, utilisé très rarement." },
                  { 
                    Langage: "Illustrator", 
                    Note: 1,
                    img: "img/logo-divers/illustrator.png",
                    texteAlt: "Logo Illustrator",
                    Description: "J’ai une bonne compréhension d’Illustrator, principalement pour la création de graphismes vectoriels.", 
                    dureeExperience: "Découvert fin 2024, utilisé très rarement." },
                  { 
                    Langage: "InDesign", 
                    Note: 1,
                    img: "img/logo-divers/indesign.png",
                    texteAlt: "Logo InDesign",
                    Description: "Je connais les notions fondamentales d’InDesign pour la mise en page.", 
                    dureeExperience: "Découvert fin 2024, utilisé très rarement." },
                  { 
                    Langage: "LightRoom", 
                    Note: 1,
                    img: "img/logo-divers/lightroom.png",
                    texteAlt: "Logo LightRoom",
                    Description: "Je connais les fonctions de base de Lightroom pour la retouche photo.", 
                    dureeExperience: "Découvert fin 2024, utilisé très rarement." }
                ]}
              />
      
      
              <CardTerminal 
                titre="Traitement de texte :"
                competence={[
                  { 
                    Langage: "Word - Google Docs", 
                    Note: 4,
                    img: "img/logo-divers/word.png",
                    texteAlt: "Logo Word",
                    Description: "J’utilise régulièrement Word et Google Docs pour rédiger et mettre en forme des documents. Je maîtrise les fonctions de base comme les styles, les tableaux et la collaboration en ligne.", 
                    dureeExperience: "Utilisation fréquente depuis plusieurs années." },
                  { 
                    Langage: "Excel - Google Sheets", 
                    Note: 2,
                    img: "img/logo-divers/excel.png",
                    texteAlt: "Logo Excel",
                    Description: "J’ai les bases d’Excel et Google Sheets, je sais créer des tableaux simples et utiliser quelques formules de base.", 
                    dureeExperience: "Utilisation ponctuelle depuis plusieurs années." },
                  { 
                    Langage: "Power Point", 
                    Note: 4,
                    img: "img/logo-divers/powerpoint.png",
                    texteAlt: "Logo Power Point",
                    Description: "Je sais créer des présentations claires et efficaces, en ajoutant des animations et transitions simples.", 
                    dureeExperience: "Utilisation fréquente depuis plusieurs années." }
                    ]}
              />

              {/* 
              <CardTerminal 
                titre="Autre :"
                competence={[
                  { 
                    Langage: "Trello", 
                    Note: 4,
                    img: "img/logo-divers/trello.webp",
                    texteAlt: "Logo Trello",
                    Description: "J’organise mes tâches et mes projets grâce à Trello, en créant des tableaux collaboratifs pour suivre l’avancement et les priorités.", 
                    dureeExperience: "Découvert fin 2024, utilisé ponctuellement." },
                ]}
              /> 
              */}
        </div>

      <Texte tag="h1" balise="h1" texte="Mes certifications :" className="mt-30" />

      <div className=" m-auto flex flex-row flex-wrap justify-around">
        <CardRV
          titleRecto="Apprendre le JavaScript"
          image="../../img/logo-divers/grafikart.png"
          descriptionImage="logo Grafikart"
          date="En cours"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Base du JavaScript",
            "Principes de programmation en JS",
          ]}
          textLien="Consulter la formation"
          lien="https://grafikart.fr/formations/formation-javascript"
        />

        <CardRV
          titleRecto="Apprendre le PHP"
          image="../../img/logo-divers/grafikart.png"
          descriptionImage="logo Grafikart"
          date="En cours"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Base du PHP",
            "Principes de programmation objets en PHP",
            "Réalisation d’un site complet avec du PHP",
          ]}
          textLien="Consulter la formation"
          lien="https://grafikart.fr/formations/php"
        />

        <CardRV
          titleRecto="Débutez avec React"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="4 avril 2025"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Comprendre le fonctionnement de React",
            "Créer une application React complète avec Create React App",
            "Stocker et récupérer des données avec le state et les effets",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/7008001-debutez-avec-react"
        />

        <CardRV
          titleRecto="Apprenez les bases du langage Python"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="13 février 2025"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Créer des données avec Python",
            "Gérer la logique d'un programme dans Python",
            "Extraire des données du web avec les packages Python",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/7168871-apprenez-les-bases-du-langage-python"
        />

        <CardRV
          titleRecto="Créez et appliquez une charte graphique"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="31 janvier 2025"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Comprendre l'utilité d'une charte graphique",
            "Créer une charte graphique",
            "Appliquer une charte graphique existante",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/5454886-creez-et-appliquez-une-charte-graphique"
        />

        <CardRV
          titleRecto="Apprenez à utiliser la ligne de commande dans un terminal"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="24 janvier 2025"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Découvrir les bases du Terminal",
            "Manipulez des fichiers avec un terminal",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/6173491-apprenez-a-utiliser-la-ligne-de-commande-dans-un-terminal"
        />

        <CardRV
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="23 janvier 2025"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Faire ses premiers pas avec ChatGPT",
            "Utiliser ChatGPT au quotidien",
            "Exploiter les fonctionnalités avancées de ChatGPT",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/8204091-utilisez-chatgpt-pour-ameliorer-votre-productivite#table-of-content"
        />

        <CardRV
          titleRecto="Codez un site web accessible avec HTML & CSS"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="19 décembre 2024"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Coder une page HTML respectant les règles d'accessibilité WCAG avec ARIA",
            "Implémenter des éléments interactifs respectant les règles WCAG avec CSS et ARIA",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/6691451-codez-un-site-web-accessible-avec-html-css"
        />

        <CardRV
          titleRecto="Concevez un contenu web accessible"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="18 décembre 2024"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Comprendre ce qu'est l'inclusion numérique",
            "Evaluer les obstacles à l'accessibilité sur le Web",
            "Concevoir des contenus web accessibles",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/6691346-concevez-un-contenu-web-accessible"
        />

        <CardRV
          titleRecto="Créez une maquette web avec Figma"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="10 décembre 2024"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Structurer un wireframe sur papier",
            "Construire un wireframe avec Figma",
            "Créer une maquette avec Figma",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/7342806-creez-une-maquette-web-avec-figma"
        />

        <CardRV
          titleRecto="Apprenez à programmer avec JavaScript"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="9 décembre 2024"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Manipuler des données avec JavaScript",
            "Ecrire un fichier JavaScript",
            "Faire interagir JavaScript avec votre page web",
            "Créer un formulaire de saisie de données",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript"
        />

        <CardRV
          titleRecto="Créez votre site web avec HTML5 et CSS3"
          image="../../img/logo-divers/openclasseroom.jpg"
          descriptionImage="logo OpenClassrooms"
          date="15 novembre 2024"
          titreVerso="Objectifs :"
          descriptionVerso={[
            "Maîtriser les bases de HTML5",
            "Faire de la mise en forme avec CSS3",
            "Agencer le contenu des pages",
            "Utiliser des fonctionnalités avancées de HTML et CSS",
          ]}
          textLien="Consulter la formation"
          lien="https://openclassrooms.com/fr/courses/1603881-creez-votre-site-web-avec-html5-et-css3"
        />

        <CardRV
          titleRecto="Pix"
          image="../../img/logo-divers/pix.png"
          descriptionImage="Logo de pix"
          date="18 mars 2024"
          titreVerso="Description :"
          descriptionVerso={[
            "Pix est le service public en ligne pour évaluer, développer, et certifier ses compétences numériques.",
          ]}
          textLien="Consulter le site"
          lien="https://pix.fr/"
        />
      </div>
    </>
  );
}

export default Competences;
