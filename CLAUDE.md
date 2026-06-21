# Demodocos Books — contexte projet

Vitrine trilingue (grec / anglais / français) pour **Demodocos Books**
(Δημόδοκος Βιβλία), librairie-café sur l'île d'Ios, tenue par Cécile et
Christophe.

Contexte complet, identité de marque et procédure de mise à jour du contenu :

@README.md

## Règles non négociables

1. **Esthétique minimale.** Moins de photos, mises en page épurées, aucun
   élément superflu. En cas de doute, retirer plutôt qu'ajouter.
2. **Séparation contenu / code.** La `ZONE À MODIFIER` (en haut de chaque page)
   doit rester éditable par une personne non technique. Toute évolution la
   préserve.
3. **Vérifier avant de livrer.** Tout correctif de mise en page est validé
   avec Playwright/Chromium à plusieurs breakpoints AVANT livraison — jamais
   « à l'aveugle ».
4. **Source unique dans Git.** Les changements de design se génèrent dans le
   chat de design ; les opérations Git et déploiement se font dans Claude Code.

## Repères techniques

- **Site statique multi-pages, sans build.** `index.html` (accueil) +
  `books.html` / `coffee.html` / `road.html` (rubriques détaillées). Design dans
  `styles.css`, logique commune dans `site.js`, partagés par toutes les pages.
- **Cartes de l'accueil sans liens (état actuel).** En attendant les images de
  C&C, les 3 cartes de « La librairie » sont des `<div class="card">` non
  cliquables (CTA « En savoir plus » retiré). Pour remettre les liens : repasser
  en `<a class="card" href="…">` + `<span class="more" data-i18n="card_more">`,
  et retirer le `noindex` des sous-pages concernées.
- **`preview.html` = page de test (bac à sable), `noindex`, hors navigation
  publique.** Copie de l'accueil avec les liens des cartes **actifs** + repère
  « PAGE DE TEST » ; sert à essayer de nouvelles propositions de design. Accès
  par URL directe seulement (`/preview.html`). ⚠️ C'est une **copie** : si le
  contenu de `index.html` change, `preview.html` diverge — resynchroniser au
  besoin. Quand un design est validé, le porter dans `index.html`.
- **Contenu = objet `CONTENT`** dans la `ZONE À MODIFIER`, propre à **chaque page**.
  Chaque entrée a trois langues `el` / `en` / `fr` : les modifier ensemble.
- **Langue mémorisée** via `localStorage` (`site.js`) : le choix EL/EN/FR suit
  d'une page à l'autre.
- **Gros SVG du porteur de rame** au milieu d'`index.html` (centaines de lignes de
  coordonnées) : localiser le code avec `grep`, ne pas relire tout le fichier.
- **Fichiers statiques :** photos dans `assets/` ; favicons (`favicon.svg`,
  `favicon.ico`, `apple-touch-icon.png`) à la racine.
- **Déploiement :** `git push origin main` → Netlify republie tout seul
  (https://demodocos-books.eu), en ~1–2 min.
- **Piège CSS connu :** un élément qui combine `.wrap` avec une autre classe ne doit
  pas utiliser le raccourci `padding:` — il écrase le padding horizontal de `.wrap`.
  Utiliser `padding-top` / `padding-bottom`.
- **Des éditions arrivent directement sur GitHub** (Cécile / Christophe via l'éditeur
  web). Toujours faire `git fetch` / `git pull --rebase` avant de commiter, pour
  éviter les collisions de push.

## Conventions éditoriales (style Christophe)

- **Pas de point final** sur les textes courts d'accroche, dans les trois langues :
  l'épigraphe d'accueil (Cavafy) et les descriptions des cartes de « La librairie »
  (Livres, Café, Pour la route). Toute nouvelle accroche suit cette règle.
- **Les paragraphes plus longs gardent leur point** : « Le nom » (`name_body`),
  citation d'Homère, « Nous trouver » (`find_body`), tagline du pied de page.

## Infrastructure (externe — ne pas modifier depuis le code)

- **Domaine `demodocos-books.eu`** chez **OVH** (titulaire : « Agora & Demodocos
  Ios - Coffee & Books I.K.E. »).
- **DNS chez OVH** (non délégué à Netlify) : apex `A 75.2.60.5` + `www CNAME`
  vers `demodocos-books.netlify.app`. **Domaine principal Netlify = l'apex**
  (sans `www`) → le `href` canonical et les `og:url` doivent pointer sur l'apex.
- **Email :** redirection OVH `contact@demodocos-books.eu` → Gmail (réception
  seule). Ne pas afficher `contact@…` dans le contenu tant que la redirection
  n'est pas confirmée (décision de contenu pour Cécile, dans la `ZONE À MODIFIER`).
