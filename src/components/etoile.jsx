import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // icone etoile pleine, vide et demi 

export const AffichageEtoile = ({ note }) => {
    const pleines = Math.floor(note); // floor() permet de garder l'entier uniquement --> etoile pleine
    const demi = note % 1 === 0.5; // on regarde si la note a un reste e 0.5 
    const vides = 5 - pleines - (demi ? 1 : 0); // ternaire pour compter la demi etoile si il y en a 
    const etoiles = [];

    for (let i = 0; i < pleines; i++) {
        etoiles.push(<FaStar className="text-amber-300" />);
    }

    if (demi) {
        etoiles.push(<FaStarHalfAlt className="text-amber-300" />);
    }

    for (let i = 0; i < vides; i++) {
        etoiles.push(<FaRegStar className="text-amber-300" />);
    }

    return etoiles;
};