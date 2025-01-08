import { Badge } from "./Badge";

export type Gender = 'Male' | 'Female' | '';

export interface UserInformation {
    email: string;
    gender: Gender;
    id: number;
    name: string;
    profileImage: string;
    score: number;
    badge: Badge[]; // Updated to use Badge[]
    userProgress: {
        lastRoadmapTopicID: number;
        lastLevelID: number;
        lastLevelModuleID: number;
        lastMiniGameID: number;
        completeAt: string | null;
    };
}