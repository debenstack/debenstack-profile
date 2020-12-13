FROM node:lts-buster

#RUN mkdir /setup
#WORKDIR /setup
#RUN apt-get -y update && apt-get upgrade -y
#RUN apt-get install -y curl wget apt-utils python make build-essential git
#RUN curl https://nodejs.org/dist/latest-v4.x/node-v4.9.1.tar.gz --output ./node-v4.9.1.tar.gz
#RUN tar -xvf ./node-v4.9.1.tar.gz
#RUN cd ./node-v4.9.1 && ./configure && make && make install

RUN mkdir /app
WORKDIR /app

ENV NODE_ENV="production"

ENTRYPOINT ["/bin/bash", "./startup.sh"]