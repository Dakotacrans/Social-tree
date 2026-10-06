#!/bin/bash
set -e

echo "🌲 Deploying Social Tree for Family & Friends..."

# Check Docker
if command -v docker >/dev/null 2>&1 && command -v docker-compose >/dev/null 2>&1; then
    echo "🐳 Docker detected. Building and launching container..."
    mkdir -p data uploads
    docker-compose up -d --build
    echo "✅ Social Tree is live at http://localhost:3000"
else
    echo "📦 Node.js setup detected..."
    npm install
    mkdir -p data uploads
    npm start
fi
