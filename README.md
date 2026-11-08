# Portfolio

Ce projet est mon portfolio personnel, développé avec Vite, React 19 et Tailwind CSS 3. Il présente mon parcours, mes compétences et mes réalisations dans le domaine du développement web.

Le projet est conteneurisé avec Docker et est déployé sur un VPS via un reverse proxy avec Traefik.

## Sommaire

1. [Technologies utilisées](#technologies-utilisées)
2. [Architecture & Déploiement Docker](#architecture--déploiement-docker)
   - [Prérequis](#prérequis)
   - [Lancement en Local](#lancement-en-local)
   - [Lancement en Local sans Docker](#lancement-en-local-sans-docker)
   - [Déploiement en Production (VPS)](#déploiement-en-production-vps)
3. [Pages](#pages)
4. [Auteur](#auteur)
5. [Licence](#licence)

## Technologies utilisées

- **[React](https://react.dev/)** : Bibliothèque JavaScript pour construire l'interface utilisateur
- **[Tailwind CSS](https://tailwindcss.com/)** : Framework CSS pour le design
- **[Tailwind Variant](https://www.tailwind-variants.org/docs/introduction)** : Création de variants dans certains composants comme les boutons
- **[React Router DOM](https://reactrouter.com/home)** : Gestion de la navigation entre les pages
- **[Swiper](https://swiperjs.com/react)** : carrousel de la page projet
- **[simple typewriter](https://react-simple-typewriter.vercel.app/?path=/story/introduction--page)** : texte animé sur la page d'accueil
- **[React icons](https://react-icons.github.io/react-icons/)** : icônes
- **[emailJS](https://www.emailjs.com/docs/tutorial/overview/)** : Permet de faire fonctionner mon formulaire
- **[react google recaptcha](https://github.com/dozoisch/react-google-recaptcha)** : Permet l'ajout d'un captcha dans le formulaire
- **[react head](https://github.com/tizmagik/react-head)** : Permet un meilleur SEO avec des balises uniques par page
- **[Docker](https://www.docker.com/)** : Conteneurisation de l'application
- **[Traefik](https://doc.traefik.io/traefik/)** : Reverse Proxy et gestion SSL

## Architecture & Déploiement Docker

### Prérequis

Pour lancer ce projet, vous avez besoin de :
- **Docker**
- **Git**

### Lancement en Local

Pour tester le projet en local :

1. Cloner le repository dans un dossier :
   ```bash
      git clone https://github.com/Nino-Rameau/portfolio.git .
   ```

2. Modifier le fichier `docker-compose.yml` pour ajouter les lignes suivantes entre `networks:` et `labels:` dans la section `services: portfolio:` (Ce n'est pas mis de base pour des raisons de sécurité en production) :

   ```yaml
      ports:
         - "8080:8080"
   ```

3. Lancer le conteneur via Docker Compose (-d pour lancer en arrière-plan et donc ne pas afficher les logs en continu et --build pour forcer la reconstruction de l'image) :

   ```bash
      docker compose up -d --build   
   ```

4. L'application est maintenant accessible sur : [http://localhost:8080/](http://localhost:8080/)

### Lancement en Local sans Docker

Pour développer sans Docker (avec rechargement automatique à chaque modification) :

1. Prérequis : **Node.js 22** (version utilisée dans le `Dockerfile`) et **npm**.

2. Cloner le repository puis installer les dépendances :
   ```bash
      git clone https://github.com/Nino-Rameau/portfolio.git .
      npm install
   ```

3. Créer le fichier `.env` à la racine à partir du modèle, puis renseigner les clés EmailJS et reCAPTCHA (nécessaires au formulaire de contact) :
   ```bash
      cp .env.example .env
   ```

   ```env
      VITE_EMAILJS_SERVICE_ID=
      VITE_EMAILJS_TEMPLATE_ID=
      VITE_EMAILJS_PUBLIC_KEY=
      VITE_RECAPTCHA_PUBLIC_KEY=
   ```

   Le fichier `.env` est ignoré par Git et ne doit jamais être commité.

4. Lancer le serveur de développement :
   ```bash
      npm run dev
   ```
   L'application est accessible sur : [http://localhost:5173/](http://localhost:5173/)

5. (Optionnel) Tester la version de production :
   ```bash
      npm run build     # génère le dossier dist/
      npm run preview   # sert dist/ sur http://localhost:4173/
   ```

### Déploiement en Production (VPS)

Sur le serveur de production, l'application fonctionne derrière un reverse proxy Traefik.

1. Cloner le repository sur le VPS dans un dossier de votre choix :
   ``` bash
      git clone https://github.com/Nino-Rameau/portfolio.git .
   ```

2. Réseau Docker : Assurez-vous que le réseau externe pour Traefik existe :

   ```bash
      docker network create traefik
   ```

3. Mise en ligne :
   ``` bash
      docker compose up -d --build
   ```

L'application est alors accessible sur : [nino-rameau.fr](https://nino-rameau.fr)

## Pages

- **Page d'accueil**
- **Page de compétences et certifications**
- **Page de présentation de mes projets**
- **Page par projet**
- **Page avec mon CV**
- **Page de contact**
- **Page de mentions légales**

## Auteur

**[Nino Rameau](https://nino-rameau.fr)** - [LinkedIn](https://www.linkedin.com/in/nino-rameau-1a0636332/) - [GitHub](https://github.com/Nino-Rameau)

## Licence

Réalisé dans le cadre scolaire et personnel en février 2025 et est mis à jour régulièrement.

