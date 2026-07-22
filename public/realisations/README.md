# Visuels des réalisations

Déposez ici les captures d'écran des projets, en respectant **exactement** ces noms de fichier :

| Fichier          | Projet affiché |
| ---------------- | -------------- |
| `notas.png`      | Notas          |
| `auxilia.png`    | Auxilia        |
| `projet-3.png`   | Projet 3       |
| `projet-4.png`   | Projet 4       |

## Format conseillé

- **Dimensions** : 1600 × 1000 px (ratio 16/10)
- **Format** : PNG ou JPG
- **Poids** : idéalement sous 400 Ko (les images sont ensuite optimisées automatiquement par Next.js)

Tant qu'un fichier est absent, la carte affiche un cadre « Visuel à venir » avec le chemin
attendu — la mise en page ne bouge pas quand vous ajoutez la vraie image.

## Modifier les titres et descriptions

Ils se trouvent dans le tableau `realisations` de
[`src/components/sections/Portfolio.tsx`](../../src/components/sections/Portfolio.tsx),
repérable via les commentaires `REMPLACER : image réalisation X`.
Vous pouvez aussi y ajouter un champ `lien` pour afficher un bouton « Voir le site ».
