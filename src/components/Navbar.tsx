'use client';

import Link from 'next/link';
import { Container } from './core/Container';
import { Menu, Close } from './icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Badge {
    id: number;
    name: string;
    image: string;
}

interface UserInformation {
    email: string;
    gender: string;
    id: number;
    name: string;
    profileImage: string;
    score: number;
    badge: Badge[]; // Updated to use Badge[]
    userProgress: {
        completeAt: string;
        lastMainGameQuizID: number;
        lastMiniGameID: number;
    };
}

export function Navbar() {
    const pathName = usePathname();
    const [data, setData] = useState<UserInformation>();
    const [session, setSession] = useState<string | null>('');

    const fetchData = async () => {
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
                });

                if (response.ok) {
                    const userInfo: UserInformation = await response.json();
                    // console.log(`last main game quiz id: ${userInfo.userProgress.lastMainGameQuizID}`);
                    setData(userInfo);
                } else {
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        setSession(token);

        if (token) {
            fetchData();
        }
    }, []);

    return (
        <header className="relative dark:bg-white">
            <Container>
                <div className="py-4 lg:py-6 flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-blue text-lg lg:text-3xl font-bold"
                    >
                        Kenali.Diri
                    </Link>

                    {/* Desktop Navbar Items */}
                    <div className="hidden lg:flex flex-row items-center justify-center gap-6">
                        <Link
                            href="/"
                            className={`${
                                pathName === '/'
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/eksplor"
                            className={`${
                                pathName?.startsWith('/eksplor')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Eksplor
                        </Link>
                        <Link
                            href="/tentang-kami"
                            className={`${
                                pathName?.startsWith('/tentang-kami')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/leaderboard"
                            className={`${
                                pathName?.startsWith('/leaderboard')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Leaderboard
                        </Link>
                        {session ? (
                            <Link href="/profil">
                                <Image
                                    src={
                                        data && data.profileImage
                                            ? data.profileImage
                                            : '/assets/hello.png'
                                    }
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                    alt="profile picture"
                                />
                            </Link>
                        ) : (
                            <Link
                                href="/masuk"
                                className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md"
                            >
                                Masuk
                            </Link>
                        )}
                    </div>

                    <input
                        type="checkbox"
                        id="toggleMenu"
                        name="toggleMenu"
                        className="hidden peer/menu"
                    />
                    <label
                        htmlFor="toggleMenu"
                        className="lg:hidden peer-checked/menu:hidden cursor-pointer"
                    >
                        <Menu className="lg:hidden fill-dark-slate" />
                    </label>
                    <label
                        htmlFor="toggleMenu"
                        className="hidden peer-checked/menu:block z-40 cursor-pointer"
                    >
                        <Close className="lg:hidden fill-dark-slate" />
                    </label>

                    {/* Mobile Navbar Items */}
                    <div className="fixed hidden w-full h-dvh peer-checked/menu:flex flex-col lg:flex-row items-center justify-center gap-6 top-0 left-0 bg-white/85 backdrop-blur-sm z-30">
                        <Link
                            href="/"
                            className={`${
                                pathName === '/'
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/eksplor"
                            className={`${
                                pathName?.startsWith('/eksplor')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Eksplor
                        </Link>
                        <Link
                            href="/tentang-kami"
                            className={`${
                                pathName?.startsWith('/tentang-kami')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Tentang Kami
                        </Link>
                        <Link
                            href="/leaderboard"
                            className={`${
                                pathName?.startsWith('/leaderboard')
                                    ? 'text-blue font-semibold'
                                    : 'text-dark-slate'
                            } hover:font-semibold hover:text-blue`}
                        >
                            Leaderboard
                        </Link>
                        {session ? (
                            <Link
                                href="/profil"
                                className={`${
                                    pathName?.startsWith('/leaderboard')
                                        ? 'text-blue font-semibold'
                                        : 'text-dark-slate'
                                } hover:font-semibold hover:text-blue`}
                            >
                                Profil
                            </Link>
                        ) : (
                            <Link
                                href="/masuk"
                                className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md"
                            >
                                Masuk
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );
}
