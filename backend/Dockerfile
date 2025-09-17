FROM node:22

WORKDIR /app

# Copia apenas package.json e yarn.lock para aproveitar cache
COPY package.json yarn.lock ./

# Instala dependências (incluindo dev)
RUN yarn install --frozen-lockfile --production=false

# Copia esquema Prisma e gera o client
COPY prisma ./prisma
RUN npx prisma generate

# Copia o resto do código
COPY . .

EXPOSE 3000

# Entrypoint para aplicar migrations e iniciar o servidor
ENTRYPOINT ["sh", "-c", "npx prisma migrate deploy && yarn dev"]
