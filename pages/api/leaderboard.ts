import { SERVER_URL } from '@/configs/app';
import { NextApiRequest, NextApiResponse } from 'next';

interface UserInfo {
    rank: number;
    name: string;
    profileImage: string;
    score: number;
}

const API_URL = `${SERVER_URL}/Leaderboard`;

export default async function leaderboardHandler(req: NextApiRequest, res: NextApiResponse){
    try {
        res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

        // Fetch the data from the backend API
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
            'accept': '*/*',
            cache: 'no-store'
        }});

        // If the response is not OK, throw an error
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch leaderboard' });
        }

        const userInfo: UserInfo = await response.json();

        return res.status(200).json(userInfo);
    } catch (error) {
        console.error('Error fetching badges:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}