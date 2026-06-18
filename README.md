# Demodocos Books — Δημόδοκος Βιβλία

Site vitrine de **Demodocos Books**, librairie-café sur l'île d'Ios, tenue par
Cécile et Christophe. Le nom rend hommage à Démodocos, l'aède aveugle de
l'*Odyssée* dont le chant fait pleurer Ulysse.

**En ligne :** https://demodocos-books.netlify.app
Site trilingue : grec · anglais · français.

## Identité de marque

- **Couleur :** cobalt `#104898` (extrait du logo).
- **Typographie :** Playfair Display (titres), Cormorant Garamond (corps).
- **Élément signature :** le porteur de rame (Ulysse portant sa rame vers
  l'intérieur des terres).
- **Motifs récurrents :** œil, lyre, amphore, chat.

## Structure technique

- Un seul fichier `index.html`, autonome, **sans outil de build**.
- `index-v1.html` : ancienne version (sans photos), conservée comme archive.
- Photos dans `assets/` ; favicons à la racine.
- Tout le texte des trois langues est regroupé dans un objet **`ZONE À MODIFIER`**
  en haut de `index.html` — c'est la seule partie à éditer pour changer le contenu.

## Mettre à jour le contenu (Cécile et Christophe)

1. Ouvrir `index.html` sur GitHub, cliquer sur l'icône crayon pour passer en
   édition.
2. Modifier **uniquement le texte situé à l'intérieur de la `ZONE À MODIFIER`** —
   ne pas toucher au code en dessous.
3. Enregistrer (bouton « Commit changes »).
4. Netlify republie le site automatiquement, en une à deux minutes.

## Déploiement

Git → GitHub (`walrn/demodocos-site`, branche `main`) → Netlify, déploiement
continu à chaque push sur `main`.

## Rôles

- **Cécile** — boss lady.
- **Christophe** — stratégie.
- **Walr** — coordination du site.
