import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

import { jwtDecode } from 'jwt-decode';
import { API_URL } from '@/configs/app';

interface DecodedToken {
    [key: string]: string; // Use a flexible type for claims
}

export default async function loginHandler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const authUrl = `${API_URL}/Auth/Login`;
            console.log(authUrl);

            // const authUrl = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/Auth/Login`;
            // console.log(`AUTH URL: ${authUrl}`);

            const response = await fetch(authUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Backend response status: ', response.status);

            if (!response.ok) {
                const errorResponse = await response.json();
                console.error('Backend error response:', errorResponse);
                throw new Error(errorResponse.message || 'Login failed');
            }

            const data = await response.json();
            const { message, token } = data;

            console.log('message: ', message);
            console.log('token: ', token);

            // Decode the JWT token to get userId (nameidentifier claim)
            const decoded: DecodedToken = jwtDecode(token);
            const userId =
                decoded[
                    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
                ];
            console.log('Decoded User ID:', userId);

            // Set cookie with JWT token
            res.setHeader(
                'Set-Cookie',
                serialize('jwt', token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === 'production',
                    maxAge: 60 * 60 * 24, // 1 day
                    path: '/',
                }),
            );

            res.status(200).json({
                message: message,
                token: token,
            });
        } catch (error) {
            res.status(401).json({ message: 'Email atau password kamu salah' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
