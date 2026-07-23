#!/usr/bin/env bash
# Génère les WebP à partir des JPG de assets/ (le repli <picture> est déjà dans le HTML).
# Usage : ./bin/webp.sh   → ne (re)convertit que les images nouvelles ou modifiées.
set -euo pipefail
cd "$(dirname "$0")/.."
command -v cwebp >/dev/null || { echo "cwebp introuvable → brew install webp libtiff"; exit 1; }
n=0
while IFS= read -r f; do
  webp="${f%.jpg}.webp"
  if [ ! -f "$webp" ] || [ "$f" -nt "$webp" ]; then
    cwebp -q 82 "$f" -o "$webp" >/dev/null 2>&1 && { echo "  → $webp"; n=$((n+1)); }
  fi
done < <(find assets -type f -iname '*.jpg')
echo "$n image(s) (re)converties."
