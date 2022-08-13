FROM node:12.18.1-slim

ARG NODEMON_APP
ARG PORT

ENV NODEMON_APP $NODEMON_APP
ENV NODEMON_ENV development

RUN apt-get -y update
RUN apt-get install -y ffmpeg

WORKDIR /root/app

COPY package.json /root/app

RUN npm install
RUN npm install -g nodemon

COPY . /root/app

EXPOSE $PORT