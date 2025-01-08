import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function UpdateLastRoadmapTopicHandler(req: NextApiRequest, res: NextApiResponse) {
    const { userID, roadmapTopicId } = req.query;

    const response = await fetch(`${API_URL}/UserProgress/RoadmapTopic/${userID}?roadmapTopicId=${roadmapTopicId}`, {
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