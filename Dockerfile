FROM node:14 as builder

WORKDIR /app

COPY . .

RUN npm i && npm run build

FROM node:alpine

WORKDIR /app

COPY --from=builder /app/dist ./dist

RUN npm i --production

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]