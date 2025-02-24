import { Texte } from "../components/texte";

function MentionsLegales() {
  return (
    <>
      <div className="m-10">
        <Texte tag="h1" variant="h1" texte="Mentions Légales" />

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="1. Informations générales"
          className="text-left pt-6"
        />
        <ul>
          <Texte
            tag="li"
            variant="li"
            texte="Propriétaire du site : Nino Rameau"
          />
          <Texte
            tag="li"
            variant="li"
            texte="Étudiant en Bachelor Chef de Projets Digitaux"
          />
          <Texte tag="li" variant="li" texte="Normandie Web School, Rouen" />
          <Texte
            tag="li"
            variant="li"
            texte="adresse mail : nrameau@normandiewebschool.fr"
          />
        </ul>

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="2. Propriété intellectuelle"
          className="text-left pt-6"
        />
        <Texte
          tag="p"
          variant="p"
          texte="Tous les éléments présents sur ce site (textes, images, vidéos, graphismes, logos, icônes, etc.) sont la propriété exclusive de Nino Rameau, sauf mention contraire. Toute reproduction, représentation, modification, publication, transmission ou adaptation de tout ou partie de ces éléments, sous quelque forme que ce soit, est interdite sans l'accord écrit et signé préalable de Nino Rameau."
        />

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="3. Responsabilité"
          className="text-left pt-6"
        />
        <Texte
          tag="p"
          variant="p"
          texte="Le propriétaire du site s’efforce de fournir des informations fiables et mises à jour. Cependant, aucune garantie n'est donnée quant à l'exactitude, la précision ou l'exhaustivité des informations disponibles sur le site. Le propriétaire décline toute responsabilité en cas d'erreur ou d'omission dans les contenus, ainsi qu’en cas de dommage direct ou indirect résultant de l’utilisation du site."
        />

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="4. Liens hypertextes"
          className="text-left pt-6"
        />
        <Texte
          tag="p"
          variant="p"
          texte="Le site peut contenir des liens hypertextes redirigeant vers des sites tiers. Le propriétaire du site n'exerce aucun contrôle sur ces contenus externes et décline toute responsabilité quant à leur disponibilité, contenu ou utilisation."
        />

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="5. Données personnelles et cookies"
          className="text-left pt-6"
        />
        <Texte
          tag="p"
          variant="p"
          texte="Ce site ne possède aucun cookie. Ce site ne collecte aucune donnée personnelle sans le consentement explicite des utilisateurs."
        />

        <Texte
          tag="h2"
          variant="h2"
          marge="s"
          texte="6. Contact"
          className="text-left pt-6"
        />
        <Texte
          tag="p"
          variant="p"
          texte="Pour toute question relative au site ou à son contenu, veuillez contacter : nrameau@normandiewebschool.fr"
        />
      </div>
    </>
  );
}

export default MentionsLegales;
