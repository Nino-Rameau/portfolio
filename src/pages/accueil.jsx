import { Titre } from "../components/titre";
import { Container } from "../components/container2col";

function Accueil() {
  return (
    <>
      <img
        src="../../img/photo_nino.jpg"
        alt="Nino Rameau"
        className="m-auto rounded-full w-40 mb-10 shadow-[0px_0px_20px] shadow-bleu_fonce2"
      />
      <Titre titre="Nino Rameau" />
      <Container
        para1="Je m'appelle Nino Rameau, j'ai 18 ans, et je suis étudiant en première année du Bachelor Chef de Projets Digitaux à la Normandie Web School de Rouen. Passionné par le numérique, j'ai découvert l'univers du développement web au lycée, où j'ai obtenu un baccalauréat général avec les spécialités Numérique et Sciences de l'Informatique (NSI) et mathématiques au lycée Modeste Leroy à Évreux en 2024."
        para2="J'ai ainsi acquis mes premières connaissances en HTML, CSS, SQL et Python, des langages qui me permettent aujourd'hui de réaliser des projets variés, tant en développement front-end qu'en back-end. Mon parcours m'a permis d'explorer différents aspects du développement web qui me passionne en créant des sites web interactifs. Ce sont des projets qui allient à la fois technique, design et créativité."
        img="../../img/image-deco-site/image-codage-1.jpg"
        altimg="Image de codage"
        direction="row"
      />
      <Container
        para1="Je suis curieux, motivé, à l'écoute et déterminé. Je m'efforce d'apprendre continuellement et me tiens au courant des nouvelles technologies. Mon objectif est de pouvoir combiner la rigueur technique et la créativité afin de livrer des projets numériques qui sont à la fois fonctionnels et esthétiques."
        para2="Actuellement en recherche d'un stage de deux mois en développement web alterné de mars à juin et d'une alternance pour la rentrée 2025 sur les secteurs d'Evreux ou de Rouen. J'aimerais pouvoir contribuer à la création de sites variés (e-commerce, blog, événement, communautaire...). Je souhaite saisir de nouvelles opportunités pour mettre en pratique mes compétences dans un environnement professionnel, tout en approfondissant mes connaissances en développement."
        img="../../img/image-deco-site/image-codage-2.jpg"
        altimg="Image de codage"
        direction="row-reverse"
      />
    </>
  );
}

export default Accueil;
