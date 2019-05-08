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
