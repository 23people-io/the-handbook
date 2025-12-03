#!/bin/bash
set -euo pipefail

WEBHOOK_URL="$1"
STATUS="$2"
VERSION="$3"
COMMIT="$4"
AUTHOR="$5"

if [[ "$STATUS" == "success" ]]; then
  COLOR="3066993"  # Green
  TITLE="✅ Handbook Deployed Successfully"
else
  COLOR="15158332"  # Red
  TITLE="❌ Handbook Deployment Failed"
fi

PAYLOAD=$(cat <<EOF
{
  "embeds": [{
    "title": "$TITLE",
    "color": $COLOR,
    "fields": [
      {"name": "Version", "value": "$VERSION", "inline": true},
      {"name": "Commit", "value": "${COMMIT:0:7}", "inline": true},
      {"name": "Author", "value": "$AUTHOR", "inline": true},
      {"name": "URL", "value": "https://manual.23people.io", "inline": false}
    ],
    "timestamp": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
  }]
}
EOF
)

curl -H "Content-Type: application/json" -d "$PAYLOAD" "$WEBHOOK_URL"
