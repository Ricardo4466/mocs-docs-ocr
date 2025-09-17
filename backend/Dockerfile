FROM node:22

WORKDIR /app

# Copia apenas package.json e yarn.lock para aproveitar cache
COPY package.json yarn.lock ./

# Instala dependências (incluindo dev, porque Prisma precisa delas em tempo de build)
RUN yarn install --frozen-lockfile

# Copia schema Prisma e gera client
COPY prisma ./prisma
RUN npx prisma generate

# Copia o resto do código
COPY . .

EXPOSE 3000

# Usa migrate deploy (produção) em vez de dev
# "yarn dev" troca por "yarn start" se quiser rodar compilado (mais leve em prod)
CMD npx prisma migrate deploy && yarn dev
