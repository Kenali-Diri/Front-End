import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_HOST}:${process.env.NEXT_PUBLIC_PORT}/api/RoadmapTopic`

// API handler function
export default async function roadmapTopicHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        res.setHeader('Cache-Control', 'no-store, max-age=0, must-revalidate');  // Prevent caching

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
            return res.status(response.status).json({ error: 'Failed to fetch roadmap topics' });
        }

        // Parse the response as JSON
        const data = await response.json();

        // Map the data into the format needed by the frontend
        const transformedData = data.map((topic: any) => ({
            name: topic.title,
            slug: topic.title,
            completedLevelCount: `${topic.levels.length.toString()}/${topic.levels.length.toString()} level diselesaikan`, // Completed level count
            image: topic.image,
        }));

        // Return the transformed data to the frontend
        return res.status(200).json(transformedData);
    } catch (error) {
    // Handle errors (e.g., network errors, JSON parsing errors)
    console.error('Error fetching roadmap topics:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
    }
}
