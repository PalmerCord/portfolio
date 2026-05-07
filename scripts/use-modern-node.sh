#!/bin/sh

set -eu

MIN_NODE_MAJOR=20
MIN_NODE_MINOR=9

version_meets_minimum() {
  version="$1"
  major="${version%%.*}"
  rest="${version#*.}"
  minor="${rest%%.*}"

  if [ "$major" -gt "$MIN_NODE_MAJOR" ]; then
    return 0
  fi

  if [ "$major" -eq "$MIN_NODE_MAJOR" ] && [ "$minor" -ge "$MIN_NODE_MINOR" ]; then
    return 0
  fi

  return 1
}

pick_node_bin_dir() {
  if command -v node >/dev/null 2>&1; then
    current_version="$(node -p 'process.versions.node' 2>/dev/null || true)"
    if [ -n "$current_version" ] && version_meets_minimum "$current_version"; then
      dirname "$(command -v node)"
      return 0
    fi
  fi

  for candidate in \
    "$HOME/.nvm/versions/node/v22.22.2/bin/node" \
    "$HOME/.nvm/versions/node/v22.18.0/bin/node" \
    "$HOME/.nvm/versions/node/v20.9.0/bin/node" \
    "/usr/local/opt/node/bin/node"
  do
    if [ ! -x "$candidate" ]; then
      continue
    fi

    candidate_version="$("$candidate" -p 'process.versions.node' 2>/dev/null || true)"
    if [ -n "$candidate_version" ] && version_meets_minimum "$candidate_version"; then
      dirname "$candidate"
      return 0
    fi
  done

  echo "Unable to find Node.js >= 20.9.0. Install a newer Node version or update scripts/use-modern-node.sh." >&2
  exit 1
}

NODE_BIN_DIR="$(pick_node_bin_dir)"
export PATH="$NODE_BIN_DIR:$PATH"

exec "$@"
