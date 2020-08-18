FROM node:11.14.0-alpine AS builder

ENV NO_PROXY nexus.apps.bcc.kz,$NO_PROXY

WORKDIR /app
COPY package*.json /app/

RUN npm config set registry http://registry.npmjs.org/

RUN npm install


COPY ./ /app/
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["bin/sh", "-c", "envsubst < /usr/share/nginx/html/env.template.js > /usr/share/nginx/html/env.config.js && exec nginx -g 'daemon off;'"]
