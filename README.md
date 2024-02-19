# YouCode

Bienvenue dans youCode ! Ce projet a pour but de me perfectionner dans l'utilisation de Next.js V13 en suivant les cours dispensés par Melvyn Malherbe : https://codelynx.dev/nextreact

## Technologies utilisées

- [React](https://reactjs.org/): Bibliothèque JavaScript pour la construction d'interfaces utilisateur,
- [TypeScript](https://www.typescriptlang.org/): Superset typé de JavaScript,
- [Next.js](https://nextjs.org/): framework React pour le rendu côté serveur et le routage,
- [Tailwind CSS](https://tailwindcss.com/): framework CSS utilitaire,
- [Shadcn UI](https://shadcn-ui.com/): bibliothèque pour les styles et les composants d'interface utilisateur,
- [TanStackQuery](https://react-query.tanstack.com/): gestion des données côté client,
- [React Hook Form](https://react-hook-form.com/): bibliothèque pour la gestion des formulaires React.
- [Recharts](https://recharts.org/): bibliothèque de graphiques pour React,
- [Lucide](https://lucide.netlify.app/): bibliothèque d'icônes SVG,
- [Zod](https://github.com/colinhacks/zod): validation des schémas en TypeScript,
- [NextAuth.js](https://next-auth.js.org/): solution d'authentification pour Next.js,
- [Prisma](https://www.prisma.io/): ORM (Object-Relational Mapping) pour interagir avec la base de données et éviter l'injection de code,
- [PostgreSQL](https://www.postgresql.org/): Système de gestion de base de données relationnelle,

## Installation

1. Clonez le repository sur votre machine:
   ```bash
   git clone https://github.com/ElodieRoy/youcode.git
   ```
2. Accédez au répertoire du projet:
   ```bash
   cd youcode
   ```
3. Installez les dépendances:
   ```bash
   npm install
   # ou
   pnpm install
   ```

## Configuration

1. Créer votre base de données `youcode` avec postgresql.

2. Configurez le fichier `.env`:

- `DATABASE_URL` : accès à la base de données,
- `NEXTAUTH_URL` et `NEXTAUTH_SECRET` : les paramètres d'authentification de NextAuth,
- `GITHUB_ID`et `GITHUB_SECRET`: les paramètres de connexion au serveur Github

## Lancement de l'Application

Exécutez l'application en mode développement avec la commande suivante :

```bash
npm run dev
```

_L'application sera disponible à l'adresse http://localhost:3000_

N'hésitez pas à explorer le code source pour découvrir davantage sur la mise en œuvre de chaque technologie dans ce projet !
