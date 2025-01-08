import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function UserHandler(req: NextApiRequest, res: NextApiResponse) {
    const { userID } = req.query;

    const response = await fetch(`${API_URL}/User/${userID}`, {
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