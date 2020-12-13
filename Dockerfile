FROM node:lts-buster

RUN mkdir /app
WORKDIR /app

COPY . /app

ENV NODE_ENV="production"

ENTRYPOINT ["/bin/bash", "./startup.sh"]