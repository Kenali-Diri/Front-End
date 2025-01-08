import { API_URL as API_URL_CONFIG } from '@/configs/app';
import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `${API_URL_CONFIG}/Badge`;

export default async function badgeHandler(req: NextApiRequest, res: NextApiResponse){
    try {
        res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

        // Fetch the data from the backend API
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
            'accept': '*/*',
            Authorization: req.headers.authorization || '', // Pass
            cache: 'no-store'
        }});

        // If the response is not OK, throw an error
        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch badges' });
        }

        const data = await response.json();

        const mapData = data.map((badge: any) => ({
            id: badge.id,
            name: badge.name,
            image: badge.image
        }));

        return res.status(200).json(mapData);

    } catch (error) {
        console.error('Error fetching badges:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}