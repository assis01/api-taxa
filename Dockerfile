FROM node:14-alpine as build

WORKDIR /usr/app/src

COPY package*.json ./
RUN npm i

COPY . .

RUN npm run build

FROM node:14-alpine as production

EXPOSE 3000

WORKDIR /usr/app

COPY package*.json ./

RUN npm i --only=prod

COPY --from=build /usr/app/src/dist ./dist
COPY --from=build /usr/app/src/ormconfig.js ./

CMD [ "npm", "run", "start:prod" ]