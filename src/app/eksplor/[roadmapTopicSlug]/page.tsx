'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Level } from "@/components/cards/Level";
import { Section } from "@/components/core/Section";
import { Footer } from "@/components/Footer";
import { ChevronLeft } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import { Level as ILevel } from "@/interfaces/Level";
import { RoadmapTopic } from "@/interfaces/RoadmapTopic";
import slug from "slug";
import { UserInformation } from "@/interfaces/UserInformation";
import { useRouter } from "next/navigation";

interface ExploreDetailProps {
    params: {
        roadmapTopicSlug: string
    }
}

export default function ExploreDetail({ params }: ExploreDetailProps) {
    const router = useRouter();

    const [roadmapTopic, setRoadmapTopic] = useState<RoadmapTopic>({
        id: 1,
        name: '',
        slug: '',
        image: '',
        levels: [],
        bannerImage: '',
        lastMainGameQuizID: 0
    });

    const [userInfo, setUserInfo] = useState<UserInformation>({
        email: '',
        gender: '',
        id: 0,
        name: '',
        profileImage: '',
        score: 0,
        badge: [],
        userProgress: {
            lastRoadmapTopicID: 1,
            lastLevelModuleID: 1,
            lastLevelID: 1,
            lastMiniGameID: 1,
            completeAt: null,
        },
    });

    const [levels, setLevels] = useState<Array<ILevel>>([]);

    const fetchData = async () => {
        const token = localStorage.getItem('jwt');
        
        if(token) {
            const roadmapTopicID = params.roadmapTopicSlug.split('-').pop();

            const response = await fetch(`/api/roadmapTopics/${roadmapTopicID}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseBody = await response.json();

            setRoadmapTopic({
                id: responseBody.data.id,
                name: responseBody.data.title,
                slug: slug(`${responseBody.data.title} ${responseBody.data.id}`),
                image: responseBody.data.image,
                bannerImage: responseBody.data.bannerImage,
                levels: responseBody.data.levels,
                lastMainGameQuizID: responseBody.data.mainGameQuizzes.pop().id
            });

            setLevels([
                ...responseBody.data.levels.map((level: any): ILevel => ({
                    id: level.id,
                    name: level.name,
                    slug: slug(`${level.name} ${level.id}`),
                    subtitle: `${level.shortDescription}`,
                    point: level.score
                })),
                {
                    id: 0,
                    name: 'Boss',
                    slug: `boss`,
                    subtitle: 'Level Boss',
                    point: responseBody.data.score
                }
            ]);
        }
    }

    const fetchUserInformation = async () => {
        const token = localStorage.getItem('jwt');
        if (token) {
            try {
                // Send JWT to API route to fetch user data
                const response = await fetch('/api/userInformation', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    cache: 'no-store', // Ensures no caching
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch roadmap topics');
                }

                const userInfo: UserInformation = await response.json();
                if (userInfo.gender === '') {
                    userInfo.gender = 'Male';
                }

                setUserInfo(userInfo);
            } catch (error) {
                localStorage.removeItem('jwt');
                router.replace('/');
                
                console.error('Error fetching user data:', error);
            }
        }
    };

    const getLevelCompleteStatus = (level: ILevel): boolean => {
        if(level.name === 'Boss') {
            if(roadmapTopic.id < userInfo.userProgress.lastRoadmapTopicID) {
                return true;
            }
        } else {
            if(level.id < userInfo.userProgress.lastLevelID) {
                return true;
            }
        }

        return false;
    }

    const getLevelDisabledStatus = (level: ILevel): boolean => {
        if(level.name === 'Boss') {
            const lastLevelInRoadmap = levels.filter(level => level.name !== 'Boss').pop()!;

            if(userInfo.userProgress.lastLevelID <= lastLevelInRoadmap.id) {
                return true;
            }
        } else {
            if(level.id > userInfo.userProgress.lastLevelID) {
                return true;
            }
        }

        return false;
    }

    useEffect(() => {
        AOS.init();
        fetchData();
        fetchUserInformation();
    }, []);

    return (
        <>
            <Navbar />
            <Section className="bg-dark-slate py-12 pb-20 md:py-20">
                <div className="col-span-12">
                    <Link href="/eksplor" className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-white" data-aos='fade'>
                        <ChevronLeft className="fill-white" />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-bold text-center text-white drop-shadow-lg mt-10" data-aos='fade-down'>{roadmapTopic.name}</h1>
                    <Image width={4800} height={1600} src={roadmapTopic.bannerImage ? roadmapTopic.bannerImage : '/assets/tubuhku-banner.png'} alt="Banner" className="w-full mt-6" data-aos='fade-up' />
                </div>
            </Section>
            <Section className="bg-soft-cream rounded-tr-[50%_100%] rounded-tl-[50%_100%] h-20 md:h-36 -mt-28 md:-mt-32 lg:-mt-36"></Section>
            <Section className="bg-soft-cream">
                <div className="col-span-12 flex flex-col items-center pb-20">
                    {levels.map((level, index) => (
                        <span className="w-full flex flex-col items-center" key={level.id}>
                            <Level level={level} roadmapTopicSlug={params.roadmapTopicSlug} variant={index === levels.length - 1 ? 'pink' : 'blue'} type={index === levels.length - 1 ? 'boss' : 'normal'} complete={userInfo ? getLevelCompleteStatus(level) : false} disabled={userInfo ? getLevelDisabledStatus(level) : false} />

                            {index < levels.length - 1 && (
                                <div className="border-dashed border-l-2 border-dark-slate h-12" data-aos='fade-up'></div>
                            )}
                        </span>
                    ))}
                </div>
            </Section>
            <Footer />
        </>
    )
}