'use client';

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/core/Section"
import { ChevronDown, ChevronLeft } from "@/components/icons"

import { Quiz } from "@/components/games/Quiz";
import { ShortAnswer } from "@/components/games/ShortAnswer";
import { ScrambledWord } from "@/components/games/ScrambledWord";
import { Material } from "@/interfaces/Material";
import { useRouter } from "next/navigation";
import { UserInformation } from "@/interfaces/UserInformation";

interface LevelDetailProps {
    params: {
        roadmapTopicSlug: string;
        levelSlug: string
    }
}

interface LevelDto {
    id: number;
    name: string;
    description: string;
    shortDescription: string;
    score: number;
    image: string;
    modules: Array<LevelModuleDto>;
}

interface LevelModuleDto {
    id: number;
    title: string;
    materials: Array<LevelModuleMaterialDto>;
}

interface LevelModuleMaterialDto {
    id: number;
    type: string;
    assetURL?: string;
    material?: string;
    miniGameID: number;
    miniGameQuiz: MiniGameQuizDto;
    miniGameStack: MiniGameStackDto;
    miniGameEssay: MiniGameEssayDto;
}

interface MiniGameQuizDto {
    id: number;
    type: string;
    image?: string;
    score: number;
    question: string;
    answer: string;
    options: Array<MiniGameQuizOptionDto>
}

interface MiniGameQuizOptionDto {
    id: number;
    option: string;
}

interface MiniGameStackDto {
    id: number;
    type: string;
    image?: string;
    score: number;
    question: string;
    answer: string;
    randomizedAnswer: string;
}

interface MiniGameEssayDto {
    id: number;
    type: string;
    image?: string;
    score: number;
    question: string;
    answer: string;
}

export default function LevelDetail({ params }: LevelDetailProps) {
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

    const [level, setLevel] = useState<LevelDto>({
        id: 0,
        name: '',
        description: '',
        shortDescription: '',
        modules: [],
        score: 0,
        image: ''
    });
    const [openedMaterial, setOpenedMaterial] = useState('');

    const handleOpenMaterial = (materialToBeOpen: string) => {
        if (openedMaterial === materialToBeOpen) {
            setOpenedMaterial('');
        } else {
            setOpenedMaterial(materialToBeOpen);
        }
    }

    const handleGameCompletion = async (miniGameID: number) => {
        //TODO: Add point ke player
        const token = localStorage.getItem('jwt');

        await fetch(`/api/userProgress/lastMiniGame/${userInfo.id}?miniGameId=${miniGameID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        await fetchUserInformation();
    }

    const handleFinishLevel = () => {
        router.push(`/eksplor/${params.roadmapTopicSlug}`);
    }

    const fetchData = async () => {
        const token = localStorage.getItem('jwt');

        if (!token) {
            return;
        }

        const levelID = params.levelSlug.split('-').pop();
        const response = await fetch(`/api/levels/${levelID}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const responseBody = await response.json();
        setLevel(responseBody.data);
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

    useEffect(() => {
        AOS.init();
        fetchData();
        fetchUserInformation();
    }, []);

    return (
        <>
            <Navbar />
            <Section className="bg-dark-slate py-12 md:py-20">
                <div className="col-span-12 md:col-span-6 text-white">
                    <Link href={`/eksplor/${params.roadmapTopicSlug}`} className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-white" data-aos='fade'>
                        <ChevronLeft className="fill-white" />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-3xl lg:text-5xl font-bold drop-shadow-lg mt-10" data-aos='fade' data-aos-delay='150'>{level.name}</h1>
                    <p className="mt-6 text-sm lg:text-base" data-aos='fade' data-aos-delay='300'>{level.description}</p>
                </div>
                <div className="col-span-12 md:col-span-6 mt-6 md:mt-0 flex items-center justify-center">
                    {level.image && level.image !== '' && (
                        <Image width={2100} height={1400} src={level.image} alt={level.name} className="w-3/4 md:w-full h-fit drop-shadow-xl" data-aos='fade-down' data-aos-delay='225' />
                    )}
                </div>
            </Section>
            <Section className="bg-soft-cream py-20">
                <div className="col-span-12 flex flex-col gap-y-8 items-center">
                    {level.modules.map(module => (
                        <div className="flex flex-col gap-y-6 p-6 md:p-8 bg-white rounded-md shadow-md leading-relaxed w-full" key={module.title} data-aos='fade-up' data-aos-anchor-placement="top-bottom">
                            <div className="flex justify-between items-center cursor-pointer gap-x-2" onClick={() => handleOpenMaterial(module.title)}>
                                <h1 className="font-bold text-lg md:text-xl">{module.title}</h1>
                                <ChevronDown className="flex-none" />
                            </div>
                            {openedMaterial === module.title && (
                                <div className="flex flex-col gap-y-10">
                                    {module.materials.map(material => {
                                        if (material.type === 'material-only') {
                                            return (
                                                <div className="text-sm md:text-base leading-relaxed" key={material.material}>
                                                    {material.material?.split("\n").map(text => (
                                                        <p className="mt-4" key={text}>{text}</p>
                                                    ))}
                                                </div>
                                            )
                                        } else if (material.type === 'with-illustration' && material.assetURL) {
                                            return (
                                                <div className="flex flex-col items-center md:items-start md:flex-row gap-y-6 md:gap-x-12 md:gap-y-0 text-sm md:text-base leading-relaxed" key={material.material}>
                                                    <div>
                                                        {material.material?.split("\n").map(text => (
                                                            <p className="mt-4" key={text}>{text}</p>
                                                        ))}
                                                    </div>
                                                    <Image src={material.assetURL ? material.assetURL : ''} width={486} height={572} alt="Illustration" className="flex-none w-1/2 md:w-1/4 h-fit drop-shadow-md" />
                                                </div>
                                            )
                                        } else if (material.type === 'with-image' && material.assetURL) {
                                            return (
                                                <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-y-6 md:gap-x-12 md:gap-y-0 text-sm md:text-base leading-relaxed" key={material.material}>
                                                    <Image src={material.assetURL ? material.assetURL : ''} width={1064} height={1064} alt="Image" className="h-fit md:col-span-1" />
                                                    <div>
                                                        {material.material?.split("\n").map(text => (
                                                            <p className="mt-4" key={text}>{text}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            )
                                        } else if (material.type === 'with-video' && material.assetURL) {
                                            return (
                                                <div className="flex flex-col gap-y-8 text-sm md:text-base leading-relaxed" key={material.material}>
                                                    <div>
                                                        {material.material?.split("\n").map(text => (
                                                            <p className="mt-4" key={text}>{text}</p>
                                                        ))}
                                                    </div>
                                                    <iframe className="w-full h-[480px] rounded-md" src={material.assetURL} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                                </div>
                                            )
                                        } else if (material.type.startsWith('mini-game')) {
                                            if (material.type === 'mini-game-quiz') {
                                                return (
                                                    <Quiz question={material.miniGameQuiz.question} answer={material.miniGameQuiz.answer} point={material.miniGameQuiz.score} onComplete={() => handleGameCompletion(material.miniGameQuiz.id)} options={material.miniGameQuiz.options.map(option => option.option)} key={material.material} isCompletedByUser={material.miniGameQuiz.id < userInfo.userProgress.lastMiniGameID} />
                                                )
                                            } else if (material.type === 'mini-game-stack') {
                                                return (
                                                    <ScrambledWord question={material.miniGameStack.question} answer={material.miniGameStack.answer} image={material.miniGameStack.image ? material.miniGameStack.image : ''} point={material.miniGameStack.score} onComplete={() => handleGameCompletion(material.miniGameStack.id)} scrambledWord={material.miniGameStack.randomizedAnswer} key={material.material} isCompletedByUser={material.miniGameStack.id < userInfo.userProgress.lastMiniGameID} />
                                                )
                                            } else if (material.type === 'mini-game-essay') {
                                                return (
                                                    <ShortAnswer question={material.miniGameEssay.question} answer={material.miniGameEssay.answer} image={material.miniGameEssay.image ? material.miniGameEssay.image : ''} point={material.miniGameEssay.score} onComplete={() => handleGameCompletion(material.miniGameEssay.id)} key={material.material} isCompletedByUser={material.miniGameEssay.id < userInfo.userProgress.lastMiniGameID} />
                                                )
                                            }
                                        }
                                    })}

                                    {/* {module.materials.map(materialItem => {
                                        if (materialItem.type === 'game') {
                                            if (materialItem.gameType === 'quiz' && materialItem.gameProps !== undefined && 'options' in materialItem.gameProps) {
                                                return (
                                                    <Quiz question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} options={materialItem.gameProps.options} />
                                                )
                                            } else if (materialItem.gameType === 'scrambled-word' && materialItem.gameProps !== undefined && 'scrambledWord' in materialItem.gameProps) {
                                                return (
                                                    <ScrambledWord question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} image={materialItem.gameProps.image} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} scrambledWord={materialItem.gameProps.scrambledWord} />
                                                )
                                            } else if (materialItem.gameType === 'short-answer' && materialItem.gameProps !== undefined) {
                                                return (
                                                    <ShortAnswer question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} image={materialItem.gameProps.image!} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} />
                                                )
                                            }
                                        } else {
                                            let materialText;

                                            if(materialItem.textType === 'list') {
                                                materialText = (
                                                    <ol className="list-decimal ps-5 text-sm md:text-base leading-relaxed">
                                                        {materialItem.text?.split('\n').map(line => (
                                                            <li>{line}</li>
                                                        ))}
                                                    </ol>
                                                );
                                            } else {
                                                materialText = (
                                                    <p className="text-sm md:text-base leading-relaxed">{materialItem.text}</p>
                                                );
                                            }

                                            if (materialItem.type === 'with-illustration' && materialItem.image !== undefined) {
                                                return (
                                                    <div className="flex flex-col items-center md:items-start md:flex-row gap-y-6 md:gap-x-12 md:gap-y-0">
                                                        {materialText}
                                                        <Image src={materialItem.image} width={486} height={572} alt="Illustration" className="flex-none w-1/2 md:w-1/4 h-fit drop-shadow-md" />
                                                    </div>
                                                );
                                            } else if (materialItem.type === 'with-image' && materialItem.image !== undefined) {
                                                return (
                                                    <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-y-6 md:gap-x-12 md:gap-y-0">
                                                        <Image src={materialItem.image} width={1064} height={1064} alt="Image" className="h-fit md:col-span-1" />
                                                        {materialText}
                                                    </div>
                                                );
                                            } else if (materialItem.type === 'with-video' && materialItem.video !== undefined) {
                                                return (
                                                    <div className="flex flex-col gap-y-8">
                                                        <iframe className="w-full h-[480px] rounded-md" src={materialItem.video} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                                        {materialText}
                                                    </div>
                                                );
                                            }
                                        }
                                    })} */}
                                </div>
                            )}
                        </div>
                    ))}

                    {userInfo && level.modules.length > 0 && userInfo.userProgress.lastMiniGameID > level.modules.flatMap(x => x.materials.filter(y => y.type.startsWith('mini-game'))).pop()!.miniGameID && (
                        <button className="bg-blue hover:bg-blue-hovered text-white text-sm py-4 px-8 font-bold rounded-md mt-6" onClick={handleFinishLevel}>
                            Lanjut
                        </button>
                    )}
                </div>
            </Section>
            <Footer />
        </>
    )
}