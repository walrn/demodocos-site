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
- **Méthode d'extraction :** rendu du PDF en PNG (`qlmanage -t -s 4000`), recadrage
  de l'élément, passage du blanc en transparence (clé « blanc → alpha »), puis
  quantification du PNG. Outil ad hoc (Pillow) — pas de dépendance dans le repo.

## Catalogue

| Fichier | Élément | Position dans le moodboard | Utilisé dans `preview.html` |
|---|---|---|---|
| `oeil-demodocos.png` | Œil (courbe au-dessus, pupille blanche) | ligne 1, 2ᵉ depuis la gauche | séparateur `.eye-divider` |
| `livre-demodocos.png` | Livre **bleu plein** (chevron) | ligne 2, 3ᵉ depuis la gauche | carte « Books and Gifts » |
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
- La **tasse** de la carte « Coffee » est restée en **SVG au trait** (`#i-cup`) :
  l'essai « tasse craie » n'était pas concluant — à reprendre depuis un vrai
  croquis de la même main.
