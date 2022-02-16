# BUILD APP REACT
FROM node:16.14-alpine3.15 AS build
WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# SERVER NGINX

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# config enrutador
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]