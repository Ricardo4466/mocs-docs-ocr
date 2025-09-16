FROM node:20

WORKDIR /app/backend

COPY backend/package.json backend/yarn.lock ./

RUN yarn install 

COPY backend/. .

EXPOSE 3000

CMD ["yarn", "dev"]
