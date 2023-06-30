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
                    "SELECT * FROM users WHERE username = $1 and password = $2 ";
                const values = [username, password];
                const response = await conn.query(query, values);
                if (response.rowCount === 0) {
                    return res.status(404).json({ message: "User is not found !" });
                }

                return res.status(200).json(response.rows[0]);
            } catch (e) {
                return res.status(400).json({ message: e.message });
            }
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}

