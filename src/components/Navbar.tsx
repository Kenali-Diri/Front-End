'use client';

import Link from 'next/link';
import { Container } from './core/Container';
import { Menu, Close } from './icons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';

interface DecodedToken {
    [key: string]: string; // Use a flexible type for claims
}

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

    const session = localStorage.getItem('jwt');

    const fetchData = async (id: string) => {
        const response = await fetch(
            `http://localhost:5215/api/UserInformation/${id}`,
        );
        const data = await response.json();
        setData(data);
    };

    useEffect(() => {
        if (session) {
            const decoded: DecodedToken = jwtDecode(session);
            const userId =
                decoded[
                    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
                ];
            fetchData(userId);
        }
    }, [session]);

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
