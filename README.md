# Adonis Simple Web

Simple Web with AdonisJS, PostgreSQL, Bulma.io, JQuery.

## Requirements

- Node >= 8.0.0
- NPM >= 3.0.0
- AdonisJS CLI >= 4.0.0
- PostgreSQL

## Installation

```bash
npm install
```

cp `.env.example` to `.env` and configure database

```
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=adonis
DB_PASSWORD=adonis
DB_DATABASE=adonis
```

do this

```bash
adonis key:generate
adonis migration:run
```

## Run

```bash
adonis serve --dev
```

running on `127.0.0.1:3333`

### Dockerize

pull [kankuu/adonis:alpha](https://hub.docker.com/r/kankuu/adonis) images, to manage your adonis apps.

> install `node_modeules`
```sh
docker run --rm -v $(pwd):/home/adonis/app kankuu/adonis:alpha npm install
```

> genereate the key with docker
```sh
docker run --rm -v $(pwd):/home/adonis/app kankuu/adonis:alpha adonis key:generate
```

> migrate database
```sh
docker run --rm -v $(pwd):/home/adonis/app kankuu/adonis:alpha adonis migration:run
```

then, copy `*-stack.yml.example` to `*-stack.yml` and running database postgresSQL, then configure your compose.
you can make no change if you run it on development by default configuration. but dont do that on production.
if configure is done, then run this.

```sh
docker-compose -f postgres-stack.yml up -d && docker-compose -f adonis-stack.yml up -d
```

your apps will be accessable on [localhost:9900](http://localhost:9900)