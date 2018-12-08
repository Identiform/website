FROM node:11-alpine as build-deps

LABEL version="1.0"
LABEL description="React Nginx."

ENV NODE_ENV=production

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i
RUN npm run build

FROM jwilder/dockerize as config
COPY ./.env /ENVFILE
COPY ./nginx.conf /TEMPLATE
RUN sh -c "export $(cat /ENVFILE | xargs) && dockerize -template /TEMPLATE > /NGINX.CONF"

FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
COPY --from=config /NGINX.CONF /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
