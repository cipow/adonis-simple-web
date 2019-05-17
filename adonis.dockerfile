FROM node:carbon-alpine
RUN adduser -D -h /home/adonis adonis adonis \
    && npm i -g @adonisjs/cli
RUN mkdir /home/adonis/app
WORKDIR /home/adonis/app
USER adonis
EXPOSE 3333