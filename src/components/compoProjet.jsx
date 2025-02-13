import { Tag } from "./tags-projet";
import { Texte } from "../components/texte";

export const Projet = ({
  ordre,
  titleProjet,
  description,
  lienSiteWeb,
  date,
  tags,
  image,
  nomImg,
  repoHref,
}) => {
  let triImage;
  if (image.length === 1) {
    triImage = <img src={image[0]} alt={nomImg} className="w-1/2 m-auto" />;
  } else {
    // carrousel
  }

  return (
    <div
      className="flex justify-center m-auto mt-8 bg-bleu_clair dark:bg-bleu_fonce text-white w-11/12 rounded-2xl p-6 space-x-6 "
      style={{ flexDirection: ordre }}
    >
      <div className="flex flex-col space-y-5 w-1/2 ">
        <Texte tag="h2" variant="h2" texte={titleProjet} />

        <Texte tag="p" variant="p" texte={description} />

        {/* le lien site web s'affiche que si lienSiteWeb est defini sinon ne s'affiche pas grace a lienSiteWeb && (condition) */}
        {lienSiteWeb && (
          <Texte tag="a" variant="a" texte="Le site web" lien={lienSiteWeb} />
        )}

        <Texte tag="p" variant="p" texte={date} />

        {/* .map(...) --> parcours tout les elt id par id de tags */}

        <div className="flex flex-row flex-wrap m-auto text-center justify-center">
          {tags &&
            tags.map(function (tag, indice) {
              return <Tag tag={tag} key={indice} />;
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-5 w-1/2 m-auto">
        {triImage}
        {/*GitHub affichée que si une url est donné */}
        {repoHref && (
          <>
            <p className="text-center"></p>
            <Texte
              tag="p"
              variant="p"
              texte="
              Pour plus d’informations sur le codage, cliquez sur l’icône GitHub
              :"
            />
            <a href={repoHref} className="p-4 text-white rounded-xl px-5 py-2">
              <img
                src="../../img/github.png"
                alt="Logo de GitHub qui renvoie vers le code."
                className="w-16 m-auto"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
};
