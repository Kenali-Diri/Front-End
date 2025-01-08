import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Boss(req: NextApiRequest, res: NextApiResponse) {
    const { roadmapTopicID } = req.query;

    const response = await fetch(`${API_URL}/Boss/${roadmapTopicID}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization || ''
        }
    });

    const responseBody = await response.json();
    res.status(response.status).json(responseBody);
}