import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function UpdateLastMiniGame(req: NextApiRequest, res: NextApiResponse) {
    const { userID, miniGameId } = req.query;

    const response = await fetch(`${API_URL}/UserProgress/LastMiniGame/${userID}?miniGameId=${miniGameId}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization || ''
        },
        body: JSON.stringify(req.body)
    });

    const responseBody = await response.json();
    res.status(response.status).json(responseBody);
}