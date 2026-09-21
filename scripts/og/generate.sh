#!/usr/bin/env bash
# OG 이미지와 JSON-LD용 로고 PNG를 헤드리스 크롬으로 렌더링합니다.
# 일회성 스크립트라 런타임 의존성이 없습니다. 로고(logo-1024.png)가 바뀌면 다시 실행하세요.
set -euo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
DIR="$(cd "$(dirname "$0")" && pwd)"
OUT="$DIR/../../public"

"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=1200,630 --screenshot="$OUT/og/og.png" "file://$DIR/og.html"

"$CHROME" --headless=new --hide-scrollbars --force-device-scale-factor=1 \
  --window-size=512,512 --screenshot="$OUT/brand/logo-512.png" "file://$DIR/logo.html"

echo "생성 완료:"
sips -g pixelWidth -g pixelHeight "$OUT/og/og.png" "$OUT/brand/logo-512.png"
