# Demodocos Books — site web

Site vitrine de la librairie **Demodocos Books / Δημόδοκος Βιβλία**, sur l'île d'Ios (Cyclades).
Une seule page, trilingue (grec · anglais · français), sans étape de construction :
le fichier `index.html` se suffit à lui-même.

---

## Contenu du dossier

```
demodocos-site/
├── index.html      ← le site entier (à ouvrir d'un double-clic dans un navigateur)
├── assets/         ← les images (photos de la librairie, etc.)
├── .gitignore      ← liste des fichiers techniques à ne pas archiver
└── README.md       ← ce fichier
```

---

## Modifier les textes

Tout le texte du site vit dans **un seul endroit** : en haut de `index.html`, dans le bloc
encadré par les commentaires `ZONE À MODIFIER` … `FIN DE LA ZONE À MODIFIER`.

Chaque ligne donne les trois langues côte à côte :

```js
card_cafe_b: { el:"Έναν καφέ…", en:"A coffee, a chair…", fr:"Un café, une chaise…" }
```

- On ne change que le texte **entre les guillemets** `" "`.
- Les éléments marqués `[ À COMPLÉTER ]` attendent une information (adresse, horaires, saison).
- On ne touche jamais au reste du fichier (le design est ailleurs et reste stable).

Après modification : enregistrer le fichier, puis le rouvrir dans le navigateur pour vérifier.

---

## Ajouter des photos

1. Déposer les images dans le dossier `assets/` (par ex. `assets/devanture.jpg`).
2. Les relier au site se fait dans `index.html` — la marche à suivre sera ajoutée au moment
   où les photos seront intégrées.

Conseil : viser des images de moins de ~300 Ko chacune pour garder le site rapide.

---

## Mettre en ligne (gratuit)

Hébergement recommandé : **Netlify**.

- Première mise en ligne : déposer ce dossier sur https://app.netlify.com/drop
- Pour conserver le site : créer un compte gratuit et le « réclamer » (sinon il s'efface après 1 h).
- Mises à jour : redéposer le dossier dans l'onglet *Deploys*, ou — si le dépôt est sur GitHub —
  connecter Netlify au dépôt pour que chaque modification se publie automatiquement.

---

## Archiver avec Git (sauvegarde + historique)

Ce dossier est prévu pour être suivi par Git. Démarche dans VS Code :

1. Ouvrir ce dossier (`Fichier > Ouvrir le dossier…`).
2. Vue **Source Control** (Contrôle de code source) → **Initialiser le dépôt**.
3. Saisir un message (ex. « Première version du site ») → **Valider** (commit).
4. **Publier sur GitHub** pour créer la sauvegarde en ligne.

Ensuite, après chaque modification : un message de commit + un *push*, et tout est historisé.
On peut revenir à n'importe quelle version précédente.

---

*Δημόδοκος Βιβλία · Demodocos Books · Ios · Cyclades*
