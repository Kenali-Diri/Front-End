import { Level } from "./Level";

export interface RoadmapTopic {
    id: number,
    name: string,
    slug: string,
    levels: Array<Level>,
    image: string,
    bannerImage: string
}