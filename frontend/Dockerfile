# Stage 1: Builder
FROM node:22-slim AS builder

WORKDIR /app

# Copia apenas package.json e yarn.lock (cache layer)
COPY package.json yarn.lock ./

# Instala dependências (dev + prod)
RUN yarn install --frozen-lockfile || yarn install --check-files

# Copia todo o código
COPY . .

# Stage 2: Runtime
FROM node:22-slim

WORKDIR /app

# Copia node_modules do builder
COPY --from=builder /app/node_modules ./node_modules
# Copia o restante do app
COPY --from=builder /app .

# Ajusta permissão para o usuário node
RUN chown -R node:node /app

USER node

EXPOSE 5173

CMD ["yarn", "dev"]
