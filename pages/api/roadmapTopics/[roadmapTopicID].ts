import { SERVER_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function RoadmapTopicDetail(req: NextApiRequest, res: NextApiResponse) {
    const { roadmapTopicID } = req.query;

    const response = await fetch(`${SERVER_URL}/RoadmapTopic/${roadmapTopicID}`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': req.headers.authorization || ''
        }
    });

    const responseBody = await response.json();
    res.status(response.status).json(responseBody);
}