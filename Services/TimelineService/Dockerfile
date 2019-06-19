FROM node:latest

USER root
WORKDIR /usr/app

COPY . .
RUN npm i -g typescript ts-node && \
    npm i

VOLUME ["/usr/app/Config/ENV.json", "/usr/app/ormconfig.json"]

CMD ts-node src/index.ts
