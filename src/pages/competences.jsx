import { ProgressBar } from "../components/progressbar";
import { CardRV } from "../components/cardrectoverso";
import { Texte } from "../components/texte";

function Competences() {
  return (
    <>
      <Texte tag="h1" variant="h1" texte="Mes compétences :" />

      <Texte
        tag="h2"
        variant="h2"
        texte="Mes compétences en langages informatiques"
      ></Texte>

      <ProgressBar texte="Python" valeur="70" />
      <ProgressBar texte="HTML" valeur="80" />
      <ProgressBar texte="CSS" valeur="70" />
      <ProgressBar texte="Tailwindcss" valeur="20" />
      <ProgressBar texte="JavaScript" valeur="20" />
      <ProgressBar texte="React" valeur="15" />
      <ProgressBar texte="SQL" valeur="45" />
      <ProgressBar texte="PHP" valeur="5" />

      <Texte tag="h2" variant="h2" texte="Mes autres compétences :"></Texte>

      <Texte tag="h3" variant="h3" texte="Développement web"></Texte>
      <ProgressBar texte="WordPress & Elementor" valeur="45" />
      <ProgressBar texte="Git et GitHub" valeur="60" />
      <ProgressBar texte="Figma" valeur="25" />

      <Texte tag="h3" variant="h3" texte="Graphisme"></Texte>
      <ProgressBar texte="Canva" valeur="85" />
      <ProgressBar texte="PhotoShop" valeur="30" />
      <ProgressBar texte="Illustrator" valeur="35" />
      <ProgressBar texte="InDesign" valeur="30" />

      <Texte tag="h3" variant="h3" texte="Communication"></Texte>
      <ProgressBar texte="Trello" valeur="30" />

      <Texte tag="h3" variant="h3" texte="Traitements de texte"></Texte>
      <ProgressBar texte="Word" valeur="90" />
      <ProgressBar texte="Power Point" valeur="80" />
      <ProgressBar texte="Exel" valeur="30" />

      <Texte tag="h1" variant="h1" texte="Mes certifications :"></Texte>

      <div className="w-[90%]  m-auto flex flex-row flex-wrap justify-around">
        <CardRV
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
          titleRecto="Utilisez ChatGPT pour améliorer votre productivité"
          image="logo-verti-sans-nom.png"
          descriptionImage="test"
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
      </div>
    </>
  );
}

export default Competences;
