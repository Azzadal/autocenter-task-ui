FROM node:16.20.2-alpine3.18 as build

WORKDIR /app

COPY package*.json .

RUN npm i
COPY . .

RUN npm run build



FROM nginx:latest as prod

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]