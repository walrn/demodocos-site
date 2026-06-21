# Demodocos Books — Δημόδοκος Βιβλία

Site vitrine de **Demodocos Books**, librairie-café sur l'île d'Ios, tenue par
Cécile et Christophe. Le nom rend hommage à Démodocos, l'aède aveugle de
l'*Odyssée* dont le chant fait pleurer Ulysse.

**En ligne :** https://demodocos-books.eu
Site trilingue : grec · anglais · français.

## Identité de marque

- **Couleur :** cobalt `#104898` (extrait du logo).
- **Typographie :** Playfair Display (titres), Cormorant Garamond (corps).
- **Élément signature :** le porteur de rame (Ulysse portant sa rame vers
  l'intérieur des terres).
- **Motifs récurrents :** œil, lyre, amphore, chat.

## Structure technique

- Site statique, **sans outil de build**.
- Pages : `index.html` (accueil) + `books.html`, `coffee.html`, `road.html`
  (rubriques détaillées).
- Design et logique mutualisés : `styles.css` et `site.js`, partagés par toutes
  les pages.
- `preview.html` : page de test (`noindex`, hors navigation publique), copie de
  l'accueil avec les liens des cartes actifs + un repère « PAGE DE TEST ». Sert
  de bac à sable pour de nouvelles propositions de design. Les cartes de
  l'accueil public sont, elles, non cliquables tant que les images des
  sous-pages ne sont pas prêtes.
- Photos dans `assets/` ; favicons à la racine.
- Le texte des trois langues vit dans un objet **`ZONE À MODIFIER`** en haut de
  **chaque page** — c'est la seule partie à éditer pour changer le contenu.

## Mettre à jour le contenu (Cécile et Christophe)

1. Ouvrir la page concernée sur GitHub (`index.html` pour l'accueil, ou
   `books.html` / `coffee.html` / `road.html`), cliquer sur l'icône crayon pour
   passer en édition.
2. Modifier **uniquement le texte situé à l'intérieur de la `ZONE À MODIFIER`** —
   ne pas toucher au code en dessous.
3. Enregistrer (bouton « Commit changes »).
4. GitHub Pages republie le site automatiquement, en ~1 minute.

## Déploiement

Git → GitHub (`walrn/demodocos-site`, branche `main`) → **GitHub Pages**,
déploiement continu à chaque push sur `main`. Hébergement gratuit et non métré,
sans étape de build. Les fichiers `CNAME` (domaine custom) et `.nojekyll`
(servir les fichiers tels quels) à la racine font partie de cette config — ne
pas les supprimer.

## Infrastructure

- **Hébergement :** **GitHub Pages** (repo `walrn/demodocos-site`, branche
  `main`, racine `/`). HTTPS Let's Encrypt automatique + « Enforce HTTPS ».
  *(Migré depuis Netlify — voir l'historique Git.)*
- **Domaine :** `demodocos-books.eu`, registrar **OVH**. Titulaire = l'entité
  légale « Agora & Demodocos Ios - Coffee & Books I.K.E. ».
- **DNS :** géré chez OVH (non délégué) — apex `A` vers les 4 IP GitHub Pages
  (`185.199.108.153` à `185.199.111.153`) + `www CNAME` vers `walrn.github.io`.
  Domaine principal = l'apex (le `www` redirige dessus).
- **Email :** redirection gratuite OVH `contact@demodocos-books.eu` →
  `demodocosbooks.ios@gmail.com` (réception seule).

## Rôles

- **Cécile** — boss lady.
- **Christophe** — stratégie.
- **Walrn** — coordination du site.
