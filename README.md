### Adonis Tryout

To Test This, 

- Create .env
```sh
$ cd tm-adonis-cc
$ touch .env
```

- Update .env
```sh
DB_CONNECTION=<YOUR_DB_TYPE>
DB_HOST=<YOUR_DB_HOST>
DB_PORT=<YOUR_DB_PORT>
DB_USER=<YOUR_DB_USERNAME>
DB_PASSWORD=<YOUR_DB_PASSWORD>
DB_DATABASE=<YOUR_DB_NAME>
```

- Install Package Dependencies
```sh
$ cd tm-adonis-cc
$ yarn install
# or, with npm
$ npm install
```

- Run App in PROD Mode
```sh
$ cd tm-adonis-cc
$ yarn start
```

- Run App in DEV Mode
```sh
$ cd tm-adonis-cc
$ adonis serve --dev
```
