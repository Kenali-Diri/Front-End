'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Section } from '@/components/core/Section';
import { Footer } from '@/components/Footer';
import { ChevronLeft, Game, Medal } from '@/components/icons';
import { Diamond } from '@/components/icons/Diamond';
import { Navbar } from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { RoadmapTopic } from '@/interfaces/RoadmapTopic';
import { UserInformation } from '@/interfaces/UserInformation';
import { Level } from '@/interfaces/Level';
import { Badge } from '@/interfaces/Badge';

interface RoadmapTopicItemConfig {
    [position: number]: {
        justifyContent: string;
        connectingLine: {
            [lineDirection: string]: React.ReactNode;
        };
    };
}

const roadmapTopicItemConfig: RoadmapTopicItemConfig = {
    0: {
        justifyContent: 'justify-start',
        connectingLine: {
            VERTICAL: (
                <div className="absolute top-[calc(50%-1.5px)] left-16 border-[3px] border-l-0 border-b-0 z-10 border-dashed border-dark-slate rounded-tr-3xl w-[calc(50%-4rem+1.5px)] h-[calc(23rem)] md:h-[calc(25rem)]"></div>
            ),
            HORIZONTAL: (
                <div className="absolute top-[calc(50%)] left-16 border-[3px] border-r-0 border-t-0 z-10 border-dashed border-dark-slate rounded-bl-3xl w-[calc(50%-4rem+3px)] h-[calc(23rem+3px)] md:h-[calc(25rem+3px)]"></div>
            ),
        },
    },
    1: {
        justifyContent: 'justify-center',
        connectingLine: {
            VERTICAL: (
                <div className="absolute top-[calc(50%-1.5px)] left-[calc(50%-1.5px)] border-[3px] border-r-0 border-t-0 z-10 border-dashed border-dark-slate rounded-bl-3xl w-[calc(50%-4rem)] h-[calc(23rem+3px)] md:h-[calc(25rem+3px)]"></div>
            ),
            HORIZONTAL: (
                <div className="absolute top-[calc(50%-1.5px)] right-[calc(4rem-1.5px)] border-[3px] border-l-0 border-b-0 z-10 border-dashed border-dark-slate rounded-tr-3xl w-[calc(50%-4rem+3px)] h-[calc(23rem+3px)] md:h-[calc(25rem+3px)]"></div>
            ),
        },
    },
    2: {
        justifyContent: 'justify-end',
        connectingLine: {
            VERTICAL: (
                <div className="absolute top-[calc(50%)] right-[calc(4rem)] border-[3px] border-l-0 border-t-0 z-10 border-dashed border-dark-slate rounded-br-3xl w-[calc(50%-4rem)] h-[calc(11.5rem+1.5px)] md:h-[calc(12.5rem+1.5px)]"></div>
            ),
            HORIZONTAL: (
                <div className="absolute top-[calc(50%-1.5px)] right-[calc(4rem-1.5px)] border-[3px] border-l-0 border-t-0 z-10 border-dashed border-dark-slate rounded-br-3xl w-[calc(50%-4rem+3px)] h-[calc(11.5rem+3px)] md:h-[calc(12.5rem+3px)]"></div>
            ),
        },
    },
};

export default function Explore() {
    let centerLineDirection = 'VERTICAL';

    const [userInfo, setUserInfo] = useState<UserInformation>({
        email: '',
        gender: '',
        id: 1,
        name: '',
        profileImage: '',
        score: 0,
        badge: [],
        userProgress: {
            lastRoadmapTopicID: 1,
            lastLevelModuleID: 1,
            lastLevelID: 1,
            lastMiniGameID: 1,
            lastMainGameQuizID: 1,
            completeAt: null,
        },
    });

    const [roadmapTopics, setRoadmapTopics] = useState<Array<RoadmapTopic>>([]);
    const [badges, setBadges] = useState<Array<Badge>>([]);
    const [error, setError] = useState('');
    const router = useRouter();

    const fetchData = async () => {
        // Check if the window is defined (client-side)
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('jwt'); // Retrieve token from localStorage
            if (token) {
                try {
                    const response = await fetch('/api/roadmapTopics', {
                        method: 'GET',
                        headers: {
                            Authorization: `Bearer ${token}`, // Include the token in the request
                        },
                    });

                    if (!response.ok) {
                        throw new Error('Failed to fetch roadmap topics');
                    }

                    const data = await response.json();
                    setRoadmapTopics(data); // Assuming your response returns the roadmap topics
                } catch (err) {
                    setError('Error fetching data');
                    console.error(err);
                }
            } else {
                setError('No authentication token found');
                // Use router.push inside useEffect for client-side navigation
                router.push('/masuk'); // Redirect to login page if no token is found
            }
        }
    };

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

                if (response.ok) {
                    const userInfo: UserInformation = await response.json();
                    if (userInfo.gender === '') {
                        userInfo.gender = 'Male';
                    }

                    setUserInfo(userInfo);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    };

    const getCompletedLevelCountPerTopic = (levels: Array<Level>): number => {
        if (userInfo) {
            const previousCompletedLevels = levels.filter(
                (level) => level.id <= userInfo.userProgress.lastLevelID,
            );

            if (!userInfo.userProgress.completeAt) {
                previousCompletedLevels.pop();
            }

            return previousCompletedLevels.length;
        }

        return 0;
    };

    const fetchBadgeCount = async () => {
        const token = localStorage.getItem('jwt'); // Retrieve token from localStorage
        if (token) {
            try {
                const response = await fetch('/api/badge', {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`, // Include the token in the request
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch Badges');
                }

                const data = await response.json();
                setBadges(data); // Assuming your response returns the roadmap topics
            } catch (err) {
                setError('Error fetching data');
                console.error(err);
            }
        } else {
            setBadges([]);
        }
    };

    // Fetching data on component mount
    useEffect(() => {
        AOS.init();

        fetchData();
        fetchUserInformation();
        fetchBadgeCount();
    }, []);

    return (
        <>
            <Navbar />
            <Section className="bg-soft-cream py-12 md:py-20 overflow-y-hidden">
                <div className="col-span-12 flex flex-col">
                    <Link
                        href="/"
                        className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline"
                        data-aos="fade"
                    >
                        <ChevronLeft className="fill-dark-slate" />
                        <span>Kembali</span>
                    </Link>
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 md:col-span-8 lg:col-span-9">
                            <h1
                                className="text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.1] font-bold mt-6 bg-gradient-to-r from-blue to-pink w-fit bg-clip-text text-transparent"
                                data-aos="fade"
                                data-aos-delay="150"
                            >
                                Peta belajarmu
                            </h1>
                            <p
                                className="text-sm lg:text-base mt-2"
                                data-aos="fade"
                                data-aos-delay="300"
                            >
                                Mulai petualangan eksplorasi untuk mengenal
                                dirimu yang seru di sini!
                            </p>
                        </div>
                        <div className="col-span-12 md:col-span-4 lg:col-span-3 mt-10 md:mt-0">
                            <div
                                className="relative bg-dark-slate text-soft-cream font-bold text-sm text-left md:text-base md:text-right py-3 px-4 before:size-10 before:rotate-45 before:bg-soft-cream before:top-[calc(50%-1.5px)] before:-translate-y-1/2 before:right-0 before:translate-x-1/2 md:before:left-0 md:before:-translate-x-1/2 before:absolute"
                                data-aos="fade"
                            >
                                <span>Progres-mu</span>
                                <div className="w-[calc(100%-1.5rem)] h-[calc(100%-8px)] absolute top-[calc(50%)] -translate-y-1/2 left-1 md:left-auto md:right-1 border-2 border-dashed border-r-0 border-l-2 md:border-l-0 md:border-r-2 border-medium-slate before:size-7 before:rotate-45 before:bg-transparent before:top-[calc(50%-1.5px)] before:-translate-y-1/2 before:translate-x-1/2 before:right-0 md:before:-translate-x-1/2 md:before:left-0 before:absolute before:border-l-2 before:border-b-2 before:border-r-0 before:border-t-0 md:before:border-r-2 md:before:border-t-2 md:before:border-b-0 md:before:border-l-0 before:border-dashed before:border-medium-slate"></div>
                            </div>
                            <div className="mt-4 md:mt-6 flex items-start md:items-end flex-col gap-y-3 md:gap-y-4">
                                <div
                                    className="flex flex-row-reverse md:flex-row gap-2 items-center"
                                    data-aos="fade"
                                    data-aos-delay="150"
                                >
                                    <span className="text-sm md:text-base font-semibold">
                                        {userInfo.score}
                                    </span>
                                    <Diamond className="fill-dark-slate" />
                                </div>
                                <div
                                    className="flex flex-row-reverse md:flex-row gap-2 items-center"
                                    data-aos="fade"
                                    data-aos-delay="300"
                                >
                                    <span className="text-sm md:text-base font-semibold ">
                                        {userInfo.badge.length}/{badges.length}{' '}
                                        badge
                                    </span>
                                    <Medal className="fill-dark-slate" />
                                </div>
                                <div
                                    className="flex flex-row-reverse md:flex-row gap-2 items-center"
                                    data-aos="fade"
                                    data-aos-delay="450"
                                >
                                    <span className="text-sm md:text-base font-semibold ">
                                        0/
                                        {roadmapTopics.reduce(
                                            (prev, topic) =>
                                                prev + topic.levels.length,
                                            0,
                                        )}{' '}
                                        level
                                    </span>
                                    <Game className="fill-dark-slate" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-y-64 pb-8 pt-16 md:pt-0"
                        data-aos="fade"
                    >
                        {roadmapTopics.map((topic, index) => {
                            if (index % 3 == 0 && index > 0) {
                                centerLineDirection =
                                    centerLineDirection == 'VERTICAL'
                                        ? 'HORIZONTAL'
                                        : 'VERTICAL';
                            }

                            return (
                                <div
                                    className={`${
                                        roadmapTopicItemConfig[index % 3]
                                            .justifyContent
                                    } flex relative`}
                                    key={topic.name}
                                >
                                    {index % 3 == 0 && index > 0 && (
                                        <div className="absolute top-[calc(50%-1.5px)] -translate-y-full left-16 border-[3px] border-r-0 border-b-0 z-10 border-dashed border-dark-slate rounded-tl-3xl w-[calc(50%-4rem)] h-[calc(11.5rem+1.5px)] md:h-[calc(12.5rem+1.5px)]"></div>
                                    )}

                                    <Link
                                        href={`/eksplor/${
                                            topic.id >
                                            userInfo.userProgress
                                                .lastRoadmapTopicID
                                                ? ''
                                                : topic.slug
                                        }`}
                                        className={`z-20 relative ${
                                            topic.id >
                                            userInfo.userProgress
                                                .lastRoadmapTopicID
                                                ? 'cursor-default'
                                                : 'cursor-pointer'
                                        }`}
                                        data-aos="zoom-in-up"
                                    >
                                        <div className="bg-soft-cream w-fit h-fit">
                                            <Image
                                                src={topic.image}
                                                width={1000}
                                                height={1000}
                                                className={`h-28 md:h-36 w-fit ${
                                                    topic.id >
                                                    userInfo.userProgress
                                                        .lastRoadmapTopicID
                                                        ? 'grayscale'
                                                        : ''
                                                }`}
                                                alt={topic.name}
                                            />
                                        </div>

                                        <div
                                            className={`absolute w-max ps-1 pe-8 md:pe-0 top-0 ${
                                                index % 3 == 2
                                                    ? 'text-right top-full mt-4 right-24'
                                                    : 'left-full'
                                            }`}
                                        >
                                            <h4 className="text-base md:text-xl font-bold ">
                                                {topic.name}
                                            </h4>
                                            <p className="text-sm md:text-base mt-1">
                                                {getCompletedLevelCountPerTopic(
                                                    topic.levels,
                                                )}
                                                /{topic.levels.length} level
                                                diselesaikan
                                            </p>
                                        </div>
                                    </Link>

                                    {
                                        roadmapTopicItemConfig[index % 3]
                                            .connectingLine[centerLineDirection]
                                    }
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}
