import { Container } from "./core/Container";

export function Navbar() {
    return (
        <header>
            <Container>
                <div className="py-6 flex items-center justify-between">
                    <h1 className="text-blue text-3xl font-bold">Kenali.Diri</h1>
                    <div className="flex items-center gap-x-6">
                        <a className="text-dark-slate">Beranda</a>
                        <a className="text-dark-slate">Eksplor</a>
                        <a className="text-dark-slate">Tentang Kami</a>
                        <a className="text-dark-slate">Leaderboard</a>
                        <a className="bg-pink text-white py-2 px-4 font-bold rounded-md">Masuk</a>
                    </div>
                </div>
            </Container>
        </header>
    )
}