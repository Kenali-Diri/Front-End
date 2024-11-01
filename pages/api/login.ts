import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        try {
            const response = await fetch('http://localhost:5215/api/Users/Login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Backend response status: ', response.status);

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            const { token } = data;

            // Set cookie with JWT token
            res.setHeader('Set-Cookie', serialize('jwt', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            }));

            res.status(200).json({ message: 'Login successful' });
        } catch (error) {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
