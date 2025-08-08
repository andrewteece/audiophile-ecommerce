FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Optional system dependencies
RUN apt-get update && apt-get install -y \
    libvips \
    && rm -rf /var/lib/apt/lists/*

# Enable Corepack + prepare pnpm at build time
RUN corepack enable && corepack prepare pnpm@10.14.0 --activate
