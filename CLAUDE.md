# Demodocos Books — contexte projet

Vitrine trilingue (grec / anglais / français) pour **Demodocos Books**
(Δημόδοκος Βιβλία), librairie-café sur l'île d'Ios, tenue par Cécile et
Christophe.

Contexte complet, identité de marque et procédure de mise à jour du contenu :

@README.md

## Règles non négociables

1. **Esthétique minimale.** Moins de photos, mises en page épurées, aucun
   élément superflu. En cas de doute, retirer plutôt qu'ajouter.
2. **Séparation contenu / code.** La `ZONE À MODIFIER` (en haut de
   `index.html`) doit rester éditable par une personne non technique. Toute
   évolution la préserve.
3. **Vérifier avant de livrer.** Tout correctif de mise en page est validé
   avec Playwright/Chromium à plusieurs breakpoints AVANT livraison — jamais
   « à l'aveugle ».
4. **Source unique dans Git.** Les changements de design se génèrent dans le
   chat de design ; les opérations Git et déploiement se font dans Claude Code.

## Repères techniques

- **Un seul fichier livré : `index.html`** (autonome, sans build). `index-v1.html`
  est une ancienne version archivée — ne pas l'éditer, ce n'est pas le site en ligne.
- **Contenu = objet `CONTENT`** dans la `ZONE À MODIFIER`. Chaque entrée a trois
  langues `el` / `en` / `fr` : les modifier ensemble pour rester cohérent.
- **Gros SVG du porteur de rame** au milieu d'`index.html` (centaines de lignes de
  coordonnées) : localiser le code avec `grep`, ne pas relire tout le fichier.
- **Fichiers statiques :** photos dans `assets/` ; favicons (`favicon.svg`,
  `favicon.ico`, `apple-touch-icon.png`) à la racine.
- **Déploiement :** `git push origin main` → Netlify republie tout seul
  (https://demodocos-books.netlify.app), en ~1–2 min.
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
