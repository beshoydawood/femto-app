import { NextApiRequest, NextApiResponse } from "next";
import { conn } from "../../lib/db";
import { createHash } from 'node:crypto'
import { format } from 'date-fns'

export default async function (req: NextApiRequest, res: NextApiResponse) {
    const {method, body} = req;

    switch (method) {
        case "POST":
            try {
                const { username, password } = body;
                const now = new Date();
                const query =
                    "INSERT INTO users(username, password, created_on) VALUES ($1, $2, $3) RETURNING *";
                let _username = username,
                    _password = createHash('md5').update(password).digest('hex'),
                    created_on = now.toISOString();
                const values = [_username, _password, created_on];
                const response = await conn.query(query, values);

                return res.status(200).json(response.rows[0]);
            } catch (e) {
                return res.status(400).json({ message: e.message });
            }
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}

