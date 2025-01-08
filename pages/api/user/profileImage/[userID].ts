import { API_URL } from "@/configs/app";
import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';

export default async function UpdateProfileImageHandler(req: NextApiRequest, res: NextApiResponse) {
    const { userID } = req.query;
    const url = `${API_URL}/User/ProfileImage/${userID}`;
    console.log(url);

    try {
        const response = await axios({
            url: `${API_URL}/User/ProfileImage/${userID}`,
            method: req.method,
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: req.headers.authorization || '',
            },
            data: req.body,
        });

        res.status(response.status).json({ message: response.data });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}