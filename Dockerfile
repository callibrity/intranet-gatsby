FROM node:13-buster-slim as build

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production

COPY [".", "./"]
RUN npm run build

FROM nginx:1.19-alpine
COPY --from=build /app/public /usr/share/nginx/html
COPY ["/config/nginx/nginx.conf", "/etc/nginx/nginx.conf"]

EXPOSE 80

CMD ["nginx"]