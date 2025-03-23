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
  // Si une seule image, on affiche l'image
  if (image.length === 1) {
    triImage = (
      <img
        src={image[0]}
        alt={nomImg}
        className="w-[90%] max-w-[600px] m-auto rounded-[15px] lg:m-5"
      />
    );
    // si plusieurs images, on affiche avec un carrousel
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
        className="w-[90%] max-w-[300px] md:max-w-[450px] lg:max-w-[600px] lg:m-5"
      >
        {image.map((src, index) => (
          <SwiperSlide key={index}>
          <div className="flex justify-center items-center w-full h-[300px] relative">
            <img
              src={src}
              alt={nomImg[index]}
              className="max-h-full max-w-full object-contain rounded-[15px]"
            />
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <div
      className="lg:flex justify-center items-center mt-8 lg:bg-bleu_clair lg:dark:bg-bleu_fonce w-full pb-6 lg:w-11/12 lg:rounded-2xl border-b-2 border-black dark:border-white lg:border-none lg:m-auto lg:mb-20"
      style={{ flexDirection: ordre }}
    >
      <div className="flex flex-col space-y-5 lg:w-1/2 pb-3 lg:pb-0">

        {/* titre de projet */}
        <Texte tag="h2" balise="h2" texte={titleProjet} className="w-[90%]" marge="auto"/>

        {/* description du projet */}
        <Texte tag="p" balise="p" texte={description} className="text-justify w-[90%]" marge="auto"/>

        {/* si il y a un lien vers un site web */}
        {lienSiteWeb && (
          // lien vers le site web
          <Texte
            tag="a"
            balise="a"
            texte={texteLienSiteWeb}
            lien={lienSiteWeb}
            className="w-[90%]" 
            marge="auto"
          />
        )}
        
        {/* date du projet */}
        <Texte tag="p" balise="p" texte={date} className="w-[90%]" marge="auto"/>

        {/* si il y a des tags */}
        <div className="flex flex-row flex-wrap justify-center text-center w-[95%] m-auto">
          {tags &&
            tags.map((tag, indice) => {
              return <Tag tag={tag} key={indice} />;
            })}
        </div>
      </div>

      <div className="flex flex-col space-y-5 lg:w-1/2 m-auto">
        {/* affichage de ou des images */}
        {triImage}
        
        {/* si il y a un lien vers le repo GitHub */}
        {repoHref && (
          <>
            <Texte
              tag="p"
              balise="p"
              texte="Pour plus d’informations sur le codage, cliquez sur l’icône GitHub :"
              className="text-center"
            />
            {/* svg du logo github */}
            <a href={repoHref}>
              <svg
                width="70"
                height="70"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-black dark:text-white m-auto"
              >
                <path
                  fill="currentColor"
                  d="M11.963 2.382C.554 2.621-1.82 17.93 8.852 21.602c.498.093.684-.219.684-.478v-1.68c-2.79.601-3.38-1.317-3.38-1.317a2.6 2.6 0 0 0-1.121-1.442c-.902-.612.072-.602.072-.602a2.07 2.07 0 0 1 1.536 1.038a2.167 2.167 0 0 0 2.924.819c.052-.5.275-.965.633-1.317c-2.23-.25-4.564-1.1-4.564-4.875a3.76 3.76 0 0 1 1.038-2.645a3.46 3.46 0 0 1 .103-2.634s.84-.26 2.76 1.037a9.6 9.6 0 0 1 5.02 0c1.908-1.276 2.748-1.038 2.748-1.038c.365.828.398 1.763.093 2.614a3.75 3.75 0 0 1 1.037 2.645c0 3.786-2.344 4.626-4.574 4.865c1.038.55.602 4.086.664 4.522c0 .259.176.57.695.477c10.642-3.64 8.152-18.97-3.257-19.209"
                ></path>
              </svg>
            </a>
          </>
        )}
      </div>
    </div>
  );
};
