'use client';

import Link from "next/link";
import Image from "next/image";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/core/Section";
import { ChevronLeft } from "@/components/icons";
import { useEffect, useState } from "react";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import Dialog from "@/components/Dialog";
import { useRouter } from "next/navigation";
import { SERVER_URL } from "@/configs/app";
import { UserInformation } from "@/interfaces/UserInformation";

interface BossProps {
    params: {
        roadmapTopicSlug: string;
    }
}

interface MainGameQuizDto {
    id: number;
    image?: string;
    question: string;
    answer: string;
    options: Array<MaingameQuizOptionDto>
}

interface MaingameQuizOptionDto {
    id: number;
    option: string;
}

interface EarnedBadgeDto {
    id: number;
    name: string;
    image: string;
}

export default function BossLevel({ params }: BossProps) {
    const router = useRouter();

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
            completeAt: null,
        },
    });

    const [confettiConductor, setConfettiConductor] = useState<TConductorInstance>();
    const initConfetti = ({ conductor }: { conductor: TConductorInstance }) => {
        setConfettiConductor(conductor);
    }

    const [isWrong, setIsWrong] = useState(false);

    const [currentQuizNumber, setCurrentQuizNumber] = useState(1);
    const [questions, setQuestions] = useState<Array<MainGameQuizDto>>([]);
    const [selectedOption, setSelectedOption] = useState('');

    const [isBadgeUnlocked, setIsBadgeUnlocked] = useState(false);
    const [earnedBadge, setEarnedBadge] = useState<EarnedBadgeDto>({
        id: 1,
        name: '',
        image: ''
    });

    const fetchData = async () => {
        const token = localStorage.getItem('jwt');
        
        if(token) {
            const roadmapTopicID = params.roadmapTopicSlug.split('-').pop();
            const response = await fetch(`/api/boss/${roadmapTopicID}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            
            const responseBody = await response.json();
            setQuestions(responseBody.data);
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

    const handleNextQuestion = async () => {
        const token = localStorage.getItem('jwt');

        if(selectedOption !== questions[currentQuizNumber  - 1].answer) {
            setIsWrong(true);
            return;
        }

        confettiConductor?.run({ speed: 3, duration: 500 });

        if(currentQuizNumber + 1 > questions.length) {
            // Submit
            const response = await fetch(`/api/userProgress/roadmapTopic/${userInfo.id}?roadmapTopicId=${params.roadmapTopicSlug.split('-').pop()}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if(response.ok) {
                const responseBody = await response.json();

                setIsBadgeUnlocked(true);
                setEarnedBadge(responseBody.data);
            } else {
                router.push(`/eksplor/${params.roadmapTopicSlug}`);
            }
        } else {
            // Next Question
            setCurrentQuizNumber(prev => prev + 1);
        }

        setSelectedOption('');
    }

    const handleCloseBoss = () => {
        setIsBadgeUnlocked(false);
        router.push(`/eksplor/${params.roadmapTopicSlug}`);
    }

    useEffect(() => {
        fetchData();
        fetchUserInformation();
    }, []);

    return (
        <>
            <Navbar />
            <Section className="bg-soft-cream py-12 pb-20 md:py-20">
                <div className="col-span-12">
                    <Link href={`/eksplor/${params.roadmapTopicSlug}`} className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline" data-aos='fade'>
                        <ChevronLeft className="fill-dark-slate" />
                        <span>Kembali</span>
                    </Link>

                    <div className={`bg-white mt-8 rounded-md p-8 relative drop-shadow-sm ${isWrong ? 'animate-shake' : ''}`} onAnimationEnd={() => setIsWrong(false)}>
                        {questions.length > 0 && (
                            <>
                                <div className="bg-blue absolute transition-all duration-300 h-1.5 rounded-t-md top-0 left-0" style={{
                                    width: `${(currentQuizNumber / questions.length) * 100}%`
                                }}></div>

                                <h3 className="text-blue text-base md:text-lg font-bold text-center">Quiz {currentQuizNumber} / {questions.length}</h3>
                                <p className="text-base md:text-lg font-bold text-center mt-2">{questions[currentQuizNumber - 1].question}</p>

                                <div className="flex flex-col gap-y-2 w-full items-center mt-8">
                                    {questions[currentQuizNumber - 1].options.map(option => (
                                        <div key={option.option} className="flex w-full">
                                            <label htmlFor={`option-${option.id}`} className={`border-[3px] border-blue rounded-md text-center p-2 text-sm md:text-base cursor-pointer w-full ${selectedOption === option.option ? 'bg-blue text-white hover:bg-blue-hovered' : 'text-blue hover:bg-light-slate/30'}`}>
                                                {option.option}
                                            </label>
                                            <input type="radio" name="quiz-option" id={`option-${option.id}`} value={option.option} className="hidden" onChange={() => {
                                                setSelectedOption(option.option);
                                            }} />
                                        </div>
                                    ))}

                                    {selectedOption !== '' && (
                                        <button className="bg-pink hover:bg-pink-hovered text-white text-sm w-full py-3 px-4 font-bold rounded-md mt-6" onClick={handleNextQuestion}>
                                            Cek Jawaban
                                        </button>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </Section>

            <Fireworks onInit={initConfetti} className="pointer-events-none fixed size-full top-0 left-0 z-20"/>
            <Dialog type="badge" open={isBadgeUnlocked} handleClose={handleCloseBoss} src={earnedBadge.image} badgeContent={earnedBadge.name}/>
            <Footer />
        </>
    );
}