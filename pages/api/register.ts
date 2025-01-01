import { SERVER_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";

export default async function Register(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch(`${SERVER_URL}/Auth/Register`, {
        method: req.method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });

    const responseBody = await response.text();

    res.status(response.status).json({
        'message': responseBody
    });
}