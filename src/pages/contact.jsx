import Texte from "../components/texte";
import SEO from "../components/seo";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

import { MdOutlineMailOutline } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const captchaKey = import.meta.env.VITE_RECAPTCHA_PUBLIC_KEY;

const Contact = () => {
  const [infoForm, setinfoForm] = useState({ nom: "", email: "", objet: "", message: "" });
  const [envoieMsg, setChargement] = useState(false); // false si pas d'envoi en cours et true si envoi en cours
  const [statutMessage, setStatutMessage] = useState({ texte: "", type: "" }); // type = "succès" ou "erreur"
  const [valeurCaptcha, setValeurCaptcha] = useState(null);
  const refCaptcha = useRef(null);    // utiliser pour reset le captcha après envoi

  // Quand un champ est complété / modifié
  const envoyerDonnee = (e) => {
    const { name, value } = e.target;              // e.target permet de récupérer le contenu du champ 
    setinfoForm({ ...infoForm, [name]: value });   // copier les valeurs de infoForm puis mes a jour la valeur de la clé qui a changé
  };

  // Quand captcha est coché 
  const envoyerCaptcha = (valeur) => {   // stocke le boolean de l'etat du captcha d'apres google
    setValeurCaptcha(valeur);
  };

  // envoi du formulaire
  const EnvoyerForm = async (e) => {
    e.preventDefault();   // desactive le rechargement de la page quand on envoie le formulaire

    if (!valeurCaptcha) {  // verifie si le captcha est coché sinon message d'erreur
      setStatutMessage({ texte: "Veuillez valider le reCAPTCHA.", type: "erreur" });
      return;
    }

    setChargement(true);  // change l'etat du btn par "envoi en cours"
    setStatutMessage({ texte: "", type: "" });     // supprime l'ancien message si il y en a un 

    try {
      const reponse = await emailjs.sendForm(  // envoi du formulaire a emailJS
        serviceID,
        templateID,
        e.target,
        publicKey
      );
      if (reponse.status === 200) { 
        setStatutMessage({ texte: "Votre message a été envoyé avec succès !", type: "succès" });   // affiche le message de succès d'envoie sous le btn
        setinfoForm({ nom: "", email: "", objet: "", message: "" });                               // vide le formulaire
        refCaptcha.current.reset();                                                                // reset le captcha
        setValeurCaptcha(null);
      } else {
        setStatutMessage({ texte: "Une erreur s'est produite lors de l'envoi du message.", type: "erreur" });
      }
    } catch (erreur) {
      setStatutMessage({ texte: "Erreur : " + erreur.text, type: "erreur" });
    } finally {
      setChargement(false);                         // reset le btn a "envoyer" dans tous les cas
    }
  };

  return (
    <>
      <SEO
        title="Contact | Nino Rameau | Étudiant Développeur Web à la NWS de Rouen"
        description={`Contacter moi ! Nino Rameau, étudiant en développement web à la Normandie Web School de Rouen.`}
        keywords="Nino Rameau, développeur web, portfolio, Rouen, Evreux, Normandie Web School, NWS, étudiant, alternance, contact, email, téléphone, adresse"
        canonical="https://nino-rameau.fr/contact"
      />

      <Texte tag="h1" balise="h1" texte="Contactez-moi ! " />

      <div className="flex flex-col lg:flex-row rounded-2xl items-center gap-20 lg:gap-25 bg-bleu_clair dark:bg-bleu_fonce p-2 w-[90%] md:w-full md:py-3 md:px-20 lg:py-10 lg:px-20 xl:px-40 xl:gap-40 m-auto">

        <div>
          <Texte tag="h2" balise="h2" texte="Formulaire de contact" couleur="couleur" className="pb-5 text-center" />

          <form onSubmit={EnvoyerForm} className="flex flex-col items-center m-auto space-y-4">

            <input type="text" name="nom" value={infoForm.nom} onChange={envoyerDonnee} placeholder="Nom et prénom" className="p-2 rounded w-80 lg:w-full dark:bg-gray-700 dark:text-white" required />

            <input type="email" name="email" value={infoForm.email} onChange={envoyerDonnee} placeholder="Adresse email" className="p-2 rounded w-80 lg:w-full dark:bg-gray-700 dark:text-white" required />

            <input type="text" name="objet" value={infoForm.objet} onChange={envoyerDonnee} placeholder="Objet" className="p-2 rounded w-80 lg:w-full dark:bg-gray-700 dark:text-white" required />

            <textarea name="message" value={infoForm.message} onChange={envoyerDonnee} placeholder="Message" className="p-2 rounded w-80 lg:w-full dark:bg-gray-700 dark:text-white" rows="3" required />

            <ReCAPTCHA ref={refCaptcha} sitekey={captchaKey} onChange={envoyerCaptcha} className="pt-4" />  

            <button type="submit" className={`w-80 p-2 bg-bleu_milieu text-white rounded ${envoieMsg ? "opacity-50 cursor-not-allowed" : ""}`} disabled={envoieMsg} >
              {envoieMsg ? "Envoi en cours..." : "Envoyer"}
            </button>

          </form>

          {statutMessage.texte && (
            <div className={`mt-4 text-center ${statutMessage.type === "succès" ? "text-green-500" : "text-red-500"}`}>
              {statutMessage.texte}
            </div>
          )}
        </div>

        <address className="flex flex-col items-center justify-center not-italic">

          <div className="flex items-center gap-4 p-5 pt-10 md:pt-0">
            <MdOutlineMailOutline className="w-8 h-auto text-bleu_fonce dark:text-bleu_clair" />
            <Texte tag="a" balise="a" texte="nrameau@normandiewebschool.fr" couleur="couleur" className="text-nowrap" lien="mailto:nrameau@normandiewebschool.fr" />
          </div>

          <div className="flex items-center gap-4 p-5">
            <FaHome className="w-8 h-auto text-bleu_fonce dark:text-bleu_clair" />
            <Texte tag="p" balise="p" couleur="couleur" texte="Rouen (76)" className="text-nowrap" />
          </div>

          <div className="flex items-center gap-4 p-5">
            <FaHome className="w-8 h-auto text-bleu_fonce dark:text-bleu_clair" />
            <Texte tag="p" balise="p" couleur="couleur" texte="Evreux (27)" className="text-nowrap" />
          </div>
        </address>

      </div>
    </>
  );
}

export default Contact;
