'use client';

import Link from "next/link";
import { Container } from "./core/Container";
import { Menu, Close } from "./icons";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathName = usePathname();

    return (
        <header className="relative">
            <Container>
                <div className="py-4 lg:py-6 flex items-center justify-between">
                    <Link href="/" className="text-blue text-lg lg:text-3xl font-bold">Kenali.Diri</Link>

                    {/* Desktop Navbar Items */}
                    <div className="hidden lg:flex flex-row items-center justify-center gap-6">
                        <Link href="/" className={`${pathName === '/' ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Beranda</Link>
                        <Link href="/eksplor" className={`${pathName?.startsWith('/eksplor') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Eksplor</Link>
                        <Link href="/tentang-kami" className={`${pathName?.startsWith('/tentang-kami') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Tentang Kami</Link>
                        <Link href="/leaderboard" className={`${pathName?.startsWith('/leaderboard') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Leaderboard</Link>
                        <Link href="/masuk" className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md">Masuk</Link>
                    </div>

                    <input type="checkbox" id="toggleMenu" name="toggleMenu" className="hidden peer/menu" />
                    <label htmlFor="toggleMenu" className="lg:hidden peer-checked/menu:hidden cursor-pointer">
                        <Menu className="lg:hidden fill-dark-slate" />
                    </label>
                    <label htmlFor="toggleMenu" className="hidden peer-checked/menu:block z-40 cursor-pointer">
                        <Close className="lg:hidden fill-dark-slate" />
                    </label>

                    {/* Mobile Navbar Items */}
                    <div className="fixed hidden w-full h-dvh peer-checked/menu:flex flex-col lg:flex-row items-center justify-center gap-6 top-0 left-0 bg-white/85 backdrop-blur-sm z-30">
                        <Link href="/" className={`${pathName === '/' ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Beranda</Link>
                        <Link href="/eksplor" className={`${pathName?.startsWith('/eksplor') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Eksplor</Link>
                        <Link href="/tentang-kami" className={`${pathName?.startsWith('/tentang-kami') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Tentang Kami</Link>
                        <Link href="/leaderboard" className={`${pathName?.startsWith('/leaderboard') ? 'text-blue font-semibold' : 'text-dark-slate'} hover:font-semibold hover:text-blue`}>Leaderboard</Link>
                        <Link href="/masuk" className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md">Masuk</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}