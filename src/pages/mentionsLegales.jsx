import Texte from "../components/texte";
import Liste from "../components/liste-ul-li";
import SEO from "../components/seo"

function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales | Nino Rameau | Étudiant Développeur Web à la NWS de Rouen"
        description={`Voici les mentions légales de mon portfolio.`}
        keywords="Nino Rameau, développeur web, portfolio, Rouen, Normandie Web School, NWS, étudiant, mentions légales"
        canonical="https://nino-rameau.fr/"
      />

      <div className="m-10">
        <Texte tag="h1" balise="h1" texte="Mentions Légales" />

        <Texte tag="h2" balise="h2" marge="s" texte="1. Informations générales" className="text-left pt-6" />

        <Liste variant="point" marge="left"
          items={[
            "Propriétaire du site : Nino Rameau",
            "Étudiant en Bachelor Chef de Projets Digitaux",
            "Normandie Web School, Rouen",
            "Adresse mail : nrameau@normandiewebschool.fr",
          ]}
        />

        <Texte tag="h2" balise="h2" marge="s" texte="2. Propriété intellectuelle" className="text-left pt-6" />
        <Texte tag="p" balise="p" texte="Tous les éléments présents sur ce site (textes, images, vidéos, graphismes, logos, icônes, etc.) sont la propriété exclusive de Nino Rameau, sauf mention contraire. Toute reproduction, représentation, modification, publication, transmission ou adaptation de tout ou partie de ces éléments, sous quelque forme que ce soit, est interdite sans l'accord écrit et signé préalable de Nino Rameau." />

        <Texte tag="h2" balise="h2" marge="s" texte="3. Responsabilité" className="text-left pt-6" />
        <Texte tag="p" balise="p" texte="Le propriétaire du site s’efforce de fournir des informations fiables et mises à jour. Cependant, aucune garantie n'est donnée quant à l'exactitude, la précision ou l'exhaustivité des informations disponibles sur le site. Le propriétaire décline toute responsabilité en cas d'erreur ou d'omission dans les contenus, ainsi qu’en cas de dommage direct ou indirect résultant de l’utilisation du site." />

        <Texte tag="h2" balise="h2" marge="s" texte="4. Liens hypertextes" className="text-left pt-6" />
        <Texte tag="p" balise="p" texte="Le site peut contenir des liens hypertextes redirigeant vers des sites tiers. Le propriétaire du site n'exerce aucun contrôle sur ces contenus externes et décline toute responsabilité quant à leur disponibilité, contenu ou utilisation." />

        <Texte tag="h2" balise="h2" marge="s" texte="5. Données personnelles et cookies" className="text-left pt-6" />
        <Texte tag="p" balise="p" texte="Ce site ne dépose aucun cookie." />
        <Texte tag="p" balise="p" texte="Concernant les données personnelles : ce site ne collecte aucune donnée personnelle sans le consentement explicite des utilisateurs." />
        <Texte tag="p" balise="p" texte="Le formulaire de contact disponible sur le site permet aux utilisateurs de transmettre volontairement des informations (nom, prénom, adresse email, message) uniquement dans le but d’être recontactés. Ces données ne sont pas stockées sur le site ou dans une base de données et sont uniquement utilisées pour répondre aux demandes." />
      
        <Texte tag="h2" balise="h2" marge="s" texte="6. Contact" className="text-left pt-6" />
        <Texte tag="p" balise="p" texte="Pour toute question relative au site ou à son contenu, veuillez contacter : nrameau@normandiewebschool.fr" />
      </div>
    </>
  );
}

export default MentionsLegales;
