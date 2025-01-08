import slug from 'slug';
import { API_URL as API_URL_CONFIG } from '@/configs/app';
import { NextApiRequest, NextApiResponse } from 'next';

const API_URL = `${API_URL_CONFIG}/RoadmapTopic`

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
            id: topic.id,
            name: topic.title,
            slug: slug(`${topic.title} ${topic.id}`),
            levels: topic.levels.map((level: any) => ({
                id: level.id,
                name: level.name,
                slug: slug(`${level.name} ${level.id}`),
                subtitle: level.shortDescription
            })),
            image: topic.image,
            bannerImage: topic.bannerImage
        }));

        // Return the transformed data to the frontend
        return res.status(200).json(transformedData);
    } catch (error) {
    // Handle errors (e.g., network errors, JSON parsing errors)
    console.error('Error fetching roadmap topics:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
    }
}
