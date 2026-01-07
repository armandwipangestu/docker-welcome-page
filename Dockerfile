# --------
# 1. Builder
# --------
FROM oven/bun:1.2.23-alpine AS builder

# Add the link to your new repository here
LABEL org.opencontainers.image.source="https://github.com/armandwipangestu/docker-welcome-page"

WORKDIR /app

# Install dependencies using cached layer
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy all source
COPY . .

# Build Vite app
RUN bun run build

# --------
# 2. Runner
# --------
FROM nginx:alpine AS runner

# Copy nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy build artifacts from builder
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
