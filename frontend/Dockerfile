FROM node:22-slim AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile || yarn install --check-files

COPY . .

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules

COPY --from=builder /app .

RUN chown -R node:node /app

USER node

EXPOSE 5173

CMD ["yarn", "dev"]
