import { Tag } from "./tags-projet";
import { Texte } from "../components/texte";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoLogoGithub } from "react-icons/io";

export const Projet = ({
  id,
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
  const [photoOuverte, setphotoOuverte] = useState(false);
  const [indexAffiche, setindexAffiche] = useState(0); 

  let OrdreImage = id % 2 === 0 ? true : false; 

  let triImage;
  if (image.length === 1) {
    triImage = (
      <img
        src={image[0]}
        alt={nomImg[0]}
        className="max-w-[300px] md:max-w-[450px] w-auto mx-auto mt-5 rounded-[15px] cursor-pointer"
        onClick={() => { setindexAffiche(0); setphotoOuverte(true); }} 
      />
    );
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
        className="w-[90%] max-w-[300px] md:max-w-[450px] lg:max-w-[600px] mx-auto mt-5"
      >
        {image.map((src, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex justify-center items-center w-full h-[300px] relative cursor-pointer"
              onClick={() => { setindexAffiche(index); setphotoOuverte(true); }}
            >
              <img src={src} alt={nomImg[index]} className="max-h-full max-w-full rounded-[15px]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  return (
    <>
      <article className={`lg:flex justify-center items-center mt-8 lg:bg-bleu_clair lg:dark:bg-bleu_fonce w-full pb-6 lg:w-11/12 lg:rounded-2xl border-b-2 border-black dark:border-white lg:border-none lg:m-auto lg:mb-20 p-5 ${OrdreImage ? 'md:flex-row-reverse' : 'md:flex-row'}`}>

        <div className="flex flex-col space-y-5 lg:w-1/2 pb-3 lg:pb-0">
          <Texte tag="h2" balise="h2" texte={titleProjet} marge="auto"/>
          <Texte tag="p" balise="p" texte={description} marge="auto"/>

          {lienSiteWeb && (
            <Texte tag="a" balise="a" texte={texteLienSiteWeb} lien={lienSiteWeb} className="mx-auto text-wrap" /> 
          )}
          
          <Texte tag="p" balise="p" texte={date} marge="auto"/>

          <div className="flex flex-row flex-wrap justify-center text-center w-[95%] m-auto">
            {tags &&
              tags.map((tag, indice) => {
                return <Tag tag={tag} key={indice} />;
              })}
          </div>
        </div>

        <div className="flex flex-col space-y-5 lg:w-1/2 m-auto">
          {triImage}
          {repoHref && (
            <>
              <Texte tag="p" balise="p" texte="Pour plus d’informations sur le codage, cliquez sur l’icône GitHub :" className="text-center" />
              <a href={repoHref} title="Lien vers le repository GitHub">
                <IoLogoGithub className="text-black dark:text-white m-auto w-10 md:w-20 h-auto"/>
              </a>
            </>
          )}
        </div>
      </article>

    {photoOuverte && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 cursor-pointer" onClick={() => setphotoOuverte(false)} >
        
        <div className="flex justify-center items-center max-w-[90vw] max-h-[80vh] cursor-default" onClick={(e) => e.stopPropagation()} >
          <Swiper
            style={{
              "--swiper-navigation-color": "#4269b1",
              "--swiper-pagination-color": "#4269b1",
            }}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            initialSlide={indexAffiche}
            className="max-w-full max-h-full"
          >
            {image.map((src, index) => (
              <SwiperSlide key={index}>
                  <div className="flex justify-center items-center h-[80vh]">
                  <img src={src} alt={`Agrandie ${index}`} className="max-h-[80vh] max-w-[90vw] m-auto z-40" />
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
          <button onClick={(e) => { setphotoOuverte(false); }} className="absolute top-40 right-3 lg:top-20 lg:right-10 bg-white p-2 rounded-full text-black border-solid border-black border-2 z-40" >
          <RxCross2 className="w-5 h-auto"/>
          </button>
      </div>
    )}
    </>
  );
};
