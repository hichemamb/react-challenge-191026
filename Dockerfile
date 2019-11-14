FROM node:10 as build

WORKDIR /home/node

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM nginx:alpine

COPY ./default.conf /etc/nginx/conf.d/default.conf

COPY --from=build /home/node/build /usr/share/nginx/html
