# Illustrations dessinées (moodboard) — `assets/*-demodocos.png`

Jeu d'illustrations à la main (encre cobalt, texture craie) extraites du
moodboard de la marque, détourées sur **fond transparent** pour se poser sur
n'importe quel fond (papier `--paper` ou lavis `--wash`). Réutilisables pour
habiller les pages.

## Source

- **Moodboard :** `work-local/Demodocos_Idées.pdf` (1 page).
  ⚠️ `work-local/` est **gitignoré** (non versionné) : le PDF vit en local
  seulement. **Garder une copie de sauvegarde** — c'est la source pour ré-extraire
  ou découper d'autres éléments (amphore, porteur de rame, œil-livre…).
- **Complément :** `work-local/moodboard add-on.pdf` (1 page, gitignoré aussi) —
  3 dessins de la même main : livre ouvert au trait + 2 tasses (grande tasse type
  cappuccino / petite tasse-soucoupe type espresso). Sources du **livre au trait**
  et de la **tasse** actuels. La grande tasse n'a pas été retenue.
- **Méthode d'extraction :** rendu du PDF en PNG (`qlmanage -t -s 4000`), recadrage
  de l'élément, passage du blanc en transparence (clé « blanc → alpha »), puis
  quantification du PNG. Outil ad hoc (Pillow) — pas de dépendance dans le repo.

## Catalogue

| Fichier | Élément | Position dans le moodboard | Utilisé dans `preview.html` |
|---|---|---|---|
| `oeil-demodocos.png` | Œil (courbe au-dessus, pupille blanche) | ligne 1, 2ᵉ depuis la gauche | séparateur `.eye-divider` |
| `livre-demodocos.png` | Livre **ouvert au trait** (pages transparentes laissant voir le fond) | add-on, 1ᵉʳ depuis la gauche | carte « Books and Gifts » |
| `tasse-demodocos.png` | Tasse + soucoupe (espresso) **bleu plein**, **pleine vapeur** qui monte | add-on, 3ᵉ depuis la gauche | carte « Coffee » |
| `lyre-demodocos.png` | Lyre | ligne 1, 2ᵉ depuis la droite | carte « For the road » |
| `porte-demodocos.png` | Porte + marches (arche complète) | bas-droite | section « Find us » |
| `chat-demodocos.png` | Chat (loaf, yeux blancs) | milieu-droite | pied de page (affiché ×1.5) |
| `table-demodocos.png` | Table + 2 chaises + livre (libellé « Demodocos » retiré) | bas-gauche | **non utilisé** — gardé de côté (jugé trop détaillé pour une icône de carte) |

## Conventions d'intégration

- Insérées en `<img>` détouré, `aria-hidden="true"`, dimensionnées en **inline
  style** pour ne pas toucher au CSS partagé (`styles.css`) — ainsi `index.html`
  n'est pas impacté. Ex. icônes de carte : `style="width:auto;height:54px"`.
- Pour l'instant elles ne vivent que dans **`preview.html`** (page de test
  `noindex`). Quand un parti pris est validé, porter l'`<img>` + l'asset dans
  `index.html` (et, le cas échéant, retirer le symbole SVG d'origine).
- La **tasse** de la carte « Coffee » est désormais une illustration dessinée
  (`tasse-demodocos.png`, croquis de la même main), en remplacement de l'ancien
  **SVG au trait** `#i-cup`. Image conservée avec sa **pleine vapeur** : la tasse
  elle-même rend donc plus petite que le livre et la lyre, ce qui est assumé (jugé
  visuellement cohérent). Icône à `height:54px` comme les autres → titres alignés.
  Le symbole SVG `#i-cup` n'est plus référencé dans `preview.html`.
- Le **livre** a été remplacé : l'ancien livre bleu plein → le **livre ouvert au
  trait** de l'add-on. Ses pages sont transparentes (le fond papier/lavis passe au
  travers), ce qui s'intègre bien sur les cartes.
