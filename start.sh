#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
exec npm run dev -- -p 8080
