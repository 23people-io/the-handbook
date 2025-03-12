#!/bin/sh

# script/rebuild-vector-index: Delete the vector index and create an empty one.

set -e

VECTOR_INDEX_NAME="handbook-index"
VECTOR_INDEX_DIMENSIONS=768
VECTOR_INDEX_METRIC="cosine"

cd "$(dirname "$0")/.."

# Include scripts/colors.sh
. scripts/colors.sh

echo "${YELLOW}Rebuilding vector index...${RESET}"

echo "${MAGENT}Deleting vector index...${RESET}"

# Try to delete the index but don't fail if it doesn't exist
if npx wrangler vectorize delete $VECTOR_INDEX_NAME 2>/dev/null; then
  echo "${GREEN}Successfully deleted existing index.${RESET}"
else
  echo "${YELLOW}No existing index found or couldn't delete. Continuing...${RESET}"
fi

echo "${MAGENT}Creating an empty one...${RESET}"
npx wrangler vectorize create ${VECTOR_INDEX_NAME} --dimensions=${VECTOR_INDEX_DIMENSIONS} --metric=${VECTOR_INDEX_METRIC}

echo "${GREEN}✔ Vector index rebuilt successfully.${RESET}"