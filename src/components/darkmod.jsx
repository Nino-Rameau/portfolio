import { useState, useEffect } from "react";

export function Darkmod() {
  const [darkMode, setDarkMode] = useState(true);    // variable etat du mode sombre initialisé à true pour avoir le mode sombre par défaut

  useEffect(() => {
    if (darkMode) {                                             // si darkMode est true 
      document.documentElement.classList.add("dark");           // on ajoute la classe dark à l'élément racine
      localStorage.setItem("theme", "dark");                    // on enregistre le thème sombre dans le localStorage pour avoir le sombre en changant de page
    } else {                                                    // sinon on est en mode clair
      document.documentElement.classList.remove("dark");        // on enlève la classe dark à l'élément racine
      localStorage.setItem("theme", "light");                   // on enregistre le thème clair dans le localStorage pour avoir le clair en changant de page
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];                // renvoie un tab avec l'etat de darkMode (true/false) et la fonction setDarkMode pour changer l'etat
}
