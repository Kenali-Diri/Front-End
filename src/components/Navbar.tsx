import Link from "next/link";
import { Container } from "./core/Container";
import { Menu, Close } from "./icons";

export function Navbar() {
    return (
        <header className="relative">
            <Container>
                <div className="py-4 lg:py-6 flex items-center justify-between">
                    <Link href="/" className="text-blue text-lg lg:text-3xl font-bold">Kenali.Diri</Link>
                    
                    {/* Desktop Navbar Items */}
                    <div className="hidden lg:flex flex-row items-center justify-center gap-6">
                        <Link href="/" className="text-dark-slate hover:font-semibold">Beranda</Link>
                        <Link href="/explore" className="text-dark-slate hover:font-semibold">Eksplor</Link>
                        <Link href="/about-us" className="text-dark-slate hover:font-semibold">Tentang Kami</Link>
                        <Link href="/leaderboard" className="text-dark-slate hover:font-semibold">Leaderboard</Link>
                        <Link href="/login" className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md">Masuk</Link>
                    </div>

                    <input type="checkbox" id="toggleMenu" name="toggleMenu" className="hidden peer/menu"/>
                    <label htmlFor="toggleMenu" className="lg:hidden peer-checked/menu:hidden cursor-pointer">
                        <Menu className="lg:hidden fill-dark-slate"/>
                    </label>
                    <label htmlFor="toggleMenu" className="hidden peer-checked/menu:block z-20 cursor-pointer">
                        <Close className="lg:hidden fill-dark-slate"/>
                    </label>

                    {/* Mobile Navbar Items */}
                    <div className="fixed hidden w-full h-dvh peer-checked/menu:flex flex-col lg:flex-row items-center justify-center gap-6 top-0 left-0 bg-white/85 backdrop-blur-sm z-10">
                        <Link href="/" className="text-dark-slate hover:font-semibold">Beranda</Link>
                        <Link href="/eksplor" className="text-dark-slate hover:font-semibold">Eksplor</Link>
                        <Link href="/tentang-kami" className="text-dark-slate hover:font-semibold">Tentang Kami</Link>
                        <Link href="/leaderboard" className="text-dark-slate hover:font-semibold">Leaderboard</Link>
                        <Link href="/login" className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md">Masuk</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}