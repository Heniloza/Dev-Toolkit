#!/usr/bin/env bash

# Install dependencies
npm install --prefix server
npm install --prefix client

# Build client
npm run build --prefix client

# Build server (TypeScript)
npm run build --prefix server
