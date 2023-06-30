## Femto App Task
Simple financial goal calculator app built with nextjs and postgres 

## Getting Started
To run the app local clone this repo and then run the following command:
```
npm install
```
once the packages installed you can run
```
npm run dev
```
then visit http://localhost:3000 however you won't be able to login until you configure the database

## Database Configuration
To create local postgres we have added docker yml file to create one just run
```
docker compose build
```
then run
```
docker compose up
```
Keep in mind that: The pool is connecting to neon database which is configred at .env.local to run the docker database change the pool connection at lib/db.ts to
```
conn = new Pool({
        user: "root",
        password: "root",
        host: "localhost",
        port: 5432,
        database: "root",
});
```
Database schema can be found at database folder make sure to create the tables first

## Testing
Tests can be found inside tests folder to run the test use:
```
npm run test
```
## License
MIT License

Copyright (c) 2023 Beshoy Dawood

