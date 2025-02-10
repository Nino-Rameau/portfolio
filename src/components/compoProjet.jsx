import { Tag } from "./tags-projet";

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
  return (
    <div
      className="flex justify-center m-auto mt-8 bg-bleu_fonce text-white w-11/12 rounded-2xl p-6 space-x-6 "
      style={{ flexDirection: ordre }}
    >
      <div className="flex flex-col space-y-5 w-1/2 ">
        <h2 className="text-2xl text-center">{titleProjet}</h2>

        <p className="text-base m-3">{description}</p>

        {/* le lien site web s'affiche que si lienSiteWeb est defini sinon ne s'affiche pas grace a lienSiteWeb && (condition) */}
        {lienSiteWeb && (
          <a href={lienSiteWeb} className="underline">
            Le site web
          </a>
        )}

        <p className="m-3">{date}</p>

        {/* .map(...) --> parcours tout les elt id par id de tags */}

        <div className="flex flex-row flex-wrap m-auto text-center justify-center">
          {tags &&
            tags.map(function (tag, indice) {
              return <Tag tag={tag} key={indice} />;
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-5 w-1/2 m-auto">
        if (image.lenght === 1)
        {<img src={image} alt={nomImg} className="w-1/2 m-auto" />} else
        {
          // TODO carrousel a ajouter
        }
        {/*GitHub affichée que si une url est donné */}
        {repoHref && (
          <>
            <p className="text-center">
              Pour plus d’informations sur le codage, cliquez sur l’icône GitHub
              :
            </p>
            <a
              href={repoHref}
              className="p-4 text-white shadow-lg shadow-bleu_fonce rounded-xl px-5 py-2"
            >
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
