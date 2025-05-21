import { Tag } from "./tags-projet";
import { Texte } from "../components/texte";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoLogoGithub } from "react-icons/io";


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
        alt={nomImg[0]}
        className="h-[90%] max-h-[250px] mx-auto mt-5 rounded-[15px]"
      />
    );
    // si plusieurs images, on affiche avec un carrousel
  } else {
    triImage = (
      <Swiper
        style={{
          "--swiper-navigation-color": "#4269b1",
          "--swiper-pagination-color": "#4269b1",
        }}                      // couleur des flèches et des points
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}       // espace entre les images
        slidesPerView={1}       // 1 image visible a la fois
        navigation              // flèches gauche / droite    
        pagination={{ clickable: true }}  // points en bas clickables
        autoplay={{ delay: 5000, disableOnInteraction: false }}   // défilement automatique toutes les 5sec
        loop={true}             // boucle infinie   
        className="w-[90%] max-w-[300px] md:max-w-[450px] lg:max-w-[600px] mx-auto mt-5"
      >
        {image.map((src, index) => (  // parcours toutes les images 
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
    <div className="lg:flex justify-center items-center mt-8 lg:bg-bleu_clair lg:dark:bg-bleu_fonce w-full pb-6 lg:w-11/12 lg:rounded-2xl border-b-2 border-black dark:border-white lg:border-none lg:m-auto lg:mb-20" style={{ flexDirection: ordre }} >

      {/* COLONE 1 */}
      <div className="flex flex-col space-y-5 lg:w-1/2 pb-3 lg:pb-0">

        {/* titre de projet */}
        <Texte tag="h2" balise="h2" texte={titleProjet} className="w-[90%]" marge="auto"/>

        {/* description du projet */}
        <Texte tag="p" balise="p" texte={description} className="text-justify w-[90%]" marge="auto"/>

        {/* si il y a un lien vers un site web */}
        {lienSiteWeb && (
          <Texte tag="a" balise="a" texte={texteLienSiteWeb} lien={lienSiteWeb} className="w-[90%]"  marge="auto" /> 
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

      {/* COLONE 2 */}
      <div className="flex flex-col space-y-5 lg:w-1/2 m-auto">

        {/* affichage de ou des images */}
        {triImage}
        
        {/* si il y a un lien vers le repo GitHub */}
        {repoHref && (
          <>
            <Texte tag="p" balise="p" texte="Pour plus d’informations sur le codage, cliquez sur l’icône GitHub :" className="text-center" />
            {/* svg du logo github */}
            <a href={repoHref}>
              <IoLogoGithub className="text-black dark:text-white m-auto w-10 md:w-20 h-auto"/>
            </a>
          </>
        )}
      </div>
    </div>
  );
};
