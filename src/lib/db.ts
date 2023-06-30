import { Pool } from "pg";

let conn: any;

const { DATABASE_URL } = process.env;


if (!conn) {
    conn = new Pool({
        connectionString: DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
}


export { conn };