import { Tag } from "./tags-projet";
import { Texte } from "../components/texte";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Projet = ({
  ordre,
  titleProjet,
  description,
  texteLienSiteWeb,
  lienSiteWeb,
  date,
  tags,
  image,
  nomImg,
  repoHref,
}) => {
  let triImage;
  if (image.length === 1) {
    triImage = <img src={image[0]} alt={nomImg} className="w-[600px] m-auto" />;
  } else {
    triImage = (
      <Swiper
        style={{
          "--swiper-navigation-color": "#4269b1",
          "--swiper-pagination-color": "#4269b1",
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-lg"
      >
        {image.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center w-full h-96 relative">
              <img
                src={src}
                alt={nomImg[index]}
                className="max-w-full max-h-96 object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div
      className="lg:flex justify-center items-center m-auto mt-8 lg:bg-bleu_clair lg:dark:bg-bleu_fonce text-white lg:w-11/12 lg:rounded-2xl p-6 space-x-6 border-b-2 border-black dark:border-white lg:border-none"
      style={{ flexDirection: ordre }}
    >
      <div className="flex flex-col space-y-5 lg:w-1/2 ">
        <Texte tag="h2" variant="h2" texte={titleProjet} />

        <Texte tag="p" variant="p" texte={description} />

        {/* le lien site web s'affiche que si lienSiteWeb est defini sinon ne s'affiche pas grace a lienSiteWeb && (condition) */}
        {lienSiteWeb && (
          <Texte
            tag="a"
            variant="a"
            texte={texteLienSiteWeb}
            lien={lienSiteWeb}
          />
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

      <div className="flex flex-col space-y-5 lg:w-1/2 m-auto">
        {triImage}
        {/*GitHub affichée que si une url est donné */}
        {repoHref && (
          <>
            <p className="text-center"></p>
            <Texte
              tag="p"
              variant="p"
              texte=" Pour plus d’informations sur le codage, cliquez sur l’icône GitHub :"
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
