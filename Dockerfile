FROM node:19.6.0-slim

WORKDIR /app

COPY . /app

RUN apt-get update \
    && npm install
