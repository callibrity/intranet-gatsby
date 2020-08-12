FROM node:13-buster-slim as build

RUN npm i -g gatsby-cli

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm i

COPY [".", "./"]

EXPOSE 8000

CMD ["gatsby", "develop", "-H", "0.0.0.0"]