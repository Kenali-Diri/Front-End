import { SERVER_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function LevelDetail(req: NextApiRequest, res: NextApiResponse) {
    const { levelID } = req.query;

    const response = await fetch(`${SERVER_URL}/Levels/${levelID}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization || ''
        }
    });

    const responseBody = await response.json();
    res.status(response.status).json(responseBody);
}