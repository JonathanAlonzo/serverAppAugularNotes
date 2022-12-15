FROM node:16-alpine

RUN npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install -g nodemon

RUN npm install

ENV NODE_ENV=production

EXPOSE 3001

CMD ["npm", "start"]