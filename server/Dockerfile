FROM node:10

WORKDIR /home/node

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "start"]

