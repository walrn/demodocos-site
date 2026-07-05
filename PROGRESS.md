# Suivi — Demodocos Books

État d'avancement du site. Mis à jour au fil de l'eau.

## ✅ Fait

### Page « Livres & cadeaux » (`books.html`) — page de test, `noindex`
- Catalogue **piloté par données** : 3 listes par langue `LIVRES.el/.en/.fr` dans la
  ZONE À MODIFIER ; rendu par un script local à la page (le `site.js` partagé n'est pas touché).
- Mise en page **éditoriale** (couverture + titre/auteur/commentaire multi-paragraphes) ;
  **carte de repli** (illustration « livre ») quand pas de couverture ; **lightbox**.
- **Contenu réel de Christophe** intégré (lot du 23/06) : EN 5 livres, FR 6, EL 2.
- **Règles appliquées** : commentaire → page de sa langue ; titre + couverture dans la langue
  de la page ; photo entière (non recadrée) ; une photo montrant 2 éditions → même image sur
  les 2 pages (Circé EN/EL).
- **Traductions** : commentaire de Circé EN → FR et EN → EL (grec).
- **Corrections** non discutables appliquées (Circé EN, Mendelsohn EN).
- Couvertures dans `assets/books/`.

### Organisation / process
- `work-local/` rangé : `inbox/` (réception), `processed/2026-06-23-livres-christophe/`
  (lot archivé + `meta.md`), `README.md` (workflow), `RULES.md` (règles de contenu).
- Règles mémorisées (assistant) pour les prochaines mises à jour.

### Autres (antérieur)
- Illustrations du moodboard sur `preview.html` (livre au trait, tasse) + catalogue
  `assets/ILLUSTRATIONS.md`.

### Mise en ligne complète — 05/07/2026 (commit 778fb3e)
- **Nouvel accueil publié** : `index.html` = ex-`preview.html` nettoyé (illustrations du
  moodboard + 3 cartes cliquables), sans repère « PAGE DE TEST », en-tête public restauré.
- **Sous-pages publiques** : `noindex` retiré de `books.html`, `coffee.html`, `road.html`.
  Seul `preview.html` reste `noindex` (bac à sable).
- **`coffee.html`** : 5 photos Agora (bannière + grille 2×2), intro traduite EL/EN.
- **`road.html`** : section « Livres » (Footpaths, The Odyssey Map + carte panoramique,
  Island of Echoes avant/arrière) + section « Carnets » (7, grille sans légende).

## ⏳ À faire

- [ ] **Relecture Christophe — `road.html`** : commentaires + titres des 3 livres et titres de
      section = **brouillons** (FR/EN/EL) rédigés par l'assistant, à valider/corriger.
      Détail dans `work-local/processed/2026-07-05-pour-la-route/meta.md`.
- [ ] **Relecture Christophe** : valider les **traductions Circé** (FR + grec) et les **4 points
      stylistiques discutables** listés dans `processed/2026-06-23-livres-christophe/meta.md`.
- [ ] **Couvertures déjà recadrées** (herodote, castoriadis-fr/el, vernant, cartledge,
      odyssey-mendelsohn, circe FR) : décider si on les **ré-extrait entières** (nouvelle règle
      « ne pas recadrer ») ou si on les garde telles quelles.
- [ ] **Porter les styles scopés** de `books.html` / `road.html` vers `styles.css`.
- [ ] `preview.html` = copie de l'ex-accueil ; **diverge maintenant** du nouvel `index.html`.
      Resynchroniser ou redéfinir son rôle de bac à sable.
- [ ] (Option) CMS léger (Pages CMS) par-dessus les données si l'édition de fichier devient pénible.

## Repères
- Workflow de réception d'un nouvel envoi → `work-local/README.md`.
- Règles de contenu (dont archivage systématique des `inbox*`) → `work-local/RULES.md`.
- Déploiement : `git push origin main` → GitHub Pages (~1 min). Tout est public sauf
  `preview.html` (`noindex`).
