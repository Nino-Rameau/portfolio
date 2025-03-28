import { Texte } from "./texte";

const BtnTelechargement = ({ texte, lien }) => {
    return (
        <a
            href={lien}
            className="relative w-[250px] h-[45px] flex items-center p-4 mt-5 mx-auto rounded-xl bg-bleu_clair dark:bg-bleu_milieu overflow-hidden group shadow-[0px_0px_20px_#8cd0f2] dark:shadow-[0px_0px_20px_#3000f0]"
        >
            {/* texte btn */}
            <Texte
                tag="p"
                balise="btn_xs"
                className="m-2 text-black dark:text-white transition-all"
                texte={texte}
            />

            {/* icone btn  avec animation au hover*/}
            <div className="absolute right-0 w-10 h-full flex items-center justify-center rounded-xl bg-bleu_milieu dark:bg-bleu_fonce group-hover:w-full group-hover:bg-bleu_fonce transition-all duration-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 35 35"
                    className="w-5 text-bleu_clair transition-all"
                >
                    <path
                        fill="currentColor"
                        d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"
                    ></path>
                    <path
                        fill="currentColor"
                        d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"
                    ></path>
                </svg>
            </div>
        </a>
    );
};

export default BtnTelechargement;
