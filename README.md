# Portfolio

Ce projet est mon portfolio personnel, développé par Create React App avec React 19 et Tailwind CSS 3. Il présente mon parcours, mes compétences et mes réalisations dans le domaine du développement web.

Le projet est conteneurisé avec Docker et est déployé sur un VPS via un reverse proxy avec Traefik.

## Sommaire

1. [Technologies utilisées](#technologies-utilisées)
2. [Architecture & Déploiement Docker](#architecture--déploiement-docker)
   - [Prérequis](#prérequis)
   - [Lancement en Local](#lancement-en-local)
   - [Déploiement en Production (VPS)](#déploiement-en-production-vps)
3. [Pages](#pages)
4. [Auteur](#auteur)
5. [Licence](#Licence)

## Technologies utilisées

- **React** : Bibliothèque JavaScript pour construire l'interface utilisateur
- **Tailwind CSS** : Framework CSS pour le design
- **Tailwind Variant** : Création de variants dans certains composants comme les boutons
- **React Router DOM** : Gestion de la navigation entre les pages
- **Swiper** : carrousel de la page projet
- **simple typewriter** : texte animé sur la page d'accueil
- **React icons** : icones
- **emailJS** : Permet de faire fonctionner mon formulaire
- **react google recaptcha** : Permet l'ajout d'un captcha dans le formulaire
- **react head** : Permet un meilleurs SEO avec des balise unique par page
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

2. Lancer le conteneur via Docker Compose (-d pour lancer en arrière-plan et donc ne pas afficher les logs en continu et --build pour forcer la reconstruction de l'image) :

   ```bash
      docker compose up -d --build   
   ```

3. L'application est maintenant accessible sur : [http://localhost:8080/](http://localhost:8080/)

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
- **Page de compétence et certification**
- **Page de présentation de mes projets**
- **Page de présentation de ma charte graphique**
- **Page avec mon CV**
- **Page de contact**
- **Page de mentions légales**

## Auteur

**[Nino Rameau](https://nino-rameau.fr)** - [LinkedIn](https://www.linkedin.com/in/nino-rameau-1a0636332/) - [GitHub](https://github.com/Nino-Rameau)

## Licence

Réalisé dans le cadre scolaire et personel en février 2025 et est mis a jour régulièrement.

