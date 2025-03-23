import { Texte } from "../components/texte";

function Contact() {
  return (
    <>
      <div>
        <Texte tag="h1" balise="h1" texte="Contactez-moi ! " />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 rounded-2xl bg-bleu_clair dark:bg-bleu_fonce md:w-full px-12 md:px-24 m-3 md:m-auto">

          <div className="flex flex-col items-center px-12 md:px-24 sm:py-8">
            <div className="flex items-center p-10 gap-4">
              {/* svg enveloppe email */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-bleu_fonce dark:text-bleu_clair">
                <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14H4V8l8 5l8-5zm-8-7L4 6h16z"></path>
              </svg>
              <Texte tag="a" balise="a" texte="nrameau@normandiewebschool.fr" couleur="couleur" href="mailto:nrameau@normandiewebschool.fr" className="text-nowrap"/>
            </div>

            <div className="flex items-center p-10 gap-4">
              {/* svg telephone */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-bleu_fonce dark:text-bleu_clair">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.215-5.669c-1.268-.73-3.009-2.17-4.343-.767"></path>
              </svg>
              <Texte tag="p" balise="p" couleur="couleur" texte="+33 6 66 70 05 91" className="text-nowrap" />
            </div>
          </div>
          
          <div className="flex flex-col items-center px-12 md:px-24 sm:py-8">
            <div className="flex items-center p-10 gap-4">
              {/* svg maison */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-bleu_fonce dark:text-bleu_clair">
                <path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"></path>
              </svg>
              <Texte tag="p" balise="p" couleur="couleur" texte="Rouen (76)" className="text-nowrap"/>
            </div>

            <div className="flex items-center p-10 gap-4">
              {/* svg maison */}
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="text-bleu_fonce dark:text-bleu_clair">
                <path fill="currentColor" d="M5 20v-9.15L2.2 13L1 11.4L12 3l4 3.05V4h3v4.35l4 3.05l-1.2 1.6l-2.8-2.15V20h-5v-6h-4v6zm5-9.975h4q0-.8-.6-1.313T12 8.2t-1.4.513t-.6 1.312"></path>
              </svg>
              <Texte tag="p" balise="p" couleur="couleur" texte="Evreux (27)" className="text-nowrap"/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Contact;
