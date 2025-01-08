import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function UpdateProfileImageHandler(req: NextApiRequest, res: NextApiResponse) {
    const { userID } = req.query;
    
    const response = await fetch(`${API_URL}/User/ProfileImage/${userID}`, {
        method: req.method,
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': req.headers.authorization || ''
        },
        body: req.body
    });

    const responseBody = await response.text();
    res.status(response.status).json({ message: responseBody });
}