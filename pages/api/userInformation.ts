import type { NextApiRequest, NextApiResponse } from 'next';
import {jwtDecode} from 'jwt-decode';
import { API_URL } from '@/configs/app';

interface DecodedToken {
    [key: string]: string;
}

interface Badge {
    id: number;
    name: string;
    image: string;
}

interface UserInformation {
    email: string;
    gender: string;
    id: number;
    name: string;
    profileImage: string;
    score: number;
    badge: Badge[];
    userProgress: {
        completedAt: string;
        lastMainGameQuizID: number;
        lastMiniGameID: number;
    };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const token = req.headers.authorization?.split(' ')[1]; // Get token from Authorization header
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        try {
            res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');

            const decoded: DecodedToken = jwtDecode(token);
            const userId = decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

            const response = await fetch(`${API_URL}/User/${userId}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                    // cache: 'no-store'
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user information');
            }

            const userInfo: UserInformation = await response.json();
            res.status(200).json(userInfo);
        } catch (error) {
            // console.error('Error fetching user data:', error);
            res.status(500).json({ message: 'Error fetching user data' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
