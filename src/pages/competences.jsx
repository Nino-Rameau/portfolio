import { ProgressBar } from "../components/progressbar";
import { CardRV } from "../components/cardrectoverso";
import { Texte } from "../components/texte";
import { BtnHaut } from "../components/btnhautpage";


function Competences() {
  return (
    <>
      <Texte tag="h1" balise="h1" texte="Mes compétences :" />

      <BtnHaut />

      <Texte
        tag="h2"
        balise="h2"
        texte="Mes compétences en langages informatiques"
        className="mb-10"
      />

      <ProgressBar texte="Python" valeur="70" />
      <ProgressBar texte="HTML" valeur="85" />
      <ProgressBar texte="CSS" valeur="75" />
      <ProgressBar texte="Tailwindcss" valeur="50" />
      <ProgressBar texte="JavaScript" valeur="30" />
      <ProgressBar texte="React" valeur="50" />
      <ProgressBar texte="SQL" valeur="40" />
      <ProgressBar texte="PHP" valeur="5" />

      <Texte
        tag="h2"
        balise="h2"
        texte="Mes autres compétences :"
        className="my-10"
      />

      <Texte
        tag="h3"
        balise="h3"
        texte="Développement web"
        className="mt-10"
      />
      <ProgressBar texte="WordPress & Elementor" valeur="45" />
      <ProgressBar texte="Git et GitHub" valeur="65" />
      <ProgressBar texte="Figma" valeur="60" />

      <Texte tag="h3" balise="h3" texte="Graphisme" className="mt-10" />
      <ProgressBar texte="Canva" valeur="85" />
      <ProgressBar texte="PhotoShop" valeur="30" />
      <ProgressBar texte="Illustrator" valeur="30" />
      <ProgressBar texte="InDesign" valeur="30" />

      <Texte tag="h3" balise="h3" texte="Communication" className="mt-10" />
      <ProgressBar texte="Trello" valeur="30" />

      <Texte
        tag="h3"
        balise="h3"
        texte="Traitements de texte"
        className="mt-10"
      />
      <ProgressBar texte="Word" valeur="90" />
      <ProgressBar texte="Power Point" valeur="80" />
      <ProgressBar texte="Exel" valeur="30" />

      <Texte
        tag="h1"
        balise="h1"
        texte="Mes certifications :"
        className="mt-30"
      />

      <div className=" m-auto flex flex-row flex-wrap justify-around">
        <CardRV
          titleRecto="Apprendre le JavaScript"
          image="../../img/logo-grafikart.png"
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
          image="../../img/logo-grafikart.png"
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
          titleRecto="Apprenez les bases du langage Python"
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-openclasseroom.jpg"
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
          image="../../img/logo-pix.png"
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
