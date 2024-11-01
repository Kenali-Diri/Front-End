import { Section } from '@/components/core/Section';
import { Footer } from '@/components/Footer';
import { Article, Game, Medal, Roadmap } from '@/components/icons';
import { Navbar } from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Navbar />
            <Section className="items-center min-h-dvh 2xl:min-h-fit 2xl:max-h-fit py-8 lg:py-16 2xl:py-24 bg-soft-cream">
                <div className="flex justify-center flex-col col-span-7 text-dark-slate">
                    <h1 className="text-7xl font-extrabold bg-gradient-to-r from-blue to-pink w-fit bg-clip-text text-transparent">
                        <p>Kenali diri,</p>
                        <p>kenali kamu.</p>
                    </h1>
                    <p className="mt-6 text-base leading-relaxed">
                        Belajar seksualitas dengan cara yang asyik, tanpa rasa
                        malu, dan pastinya{' '}
                        <span className="font-bold">#AntiTabuTabuClub</span>
                        <br />
                        <br />
                        Ayo, mulai petualangan belajarmu sekarang juga!
                    </p>

                    <Link
                        href="/eksplor"
                        className="mt-16 bg-pink hover:bg-pink-hovered text-white py-4 px-12 text-base font-semibold rounded-md w-fit"
                    >
                        Eksplor Sekarang!
                    </Link>
                </div>
                <div className="col-span-5">
                    <Image
                        src="/assets/home.png"
                        width={611}
                        height={567}
                        className="w-full"
                        alt="Home image"
                    />
                </div>
            </Section>
            <Section className="text-soft-cream bg-dark-slate">
                <div className="flex items-end col-span-5 pt-32">
                    <Image
                        src="/assets/thinking.png"
                        width={486}
                        height={572}
                        className="w-full drop-shadow-lg"
                        alt="Thinking image"
                    />
                </div>
                <div className="flex flex-col justify-center col-span-7">
                    <h2 className="font-bold text-5xl">
                        <p>Hmm...,</p>
                        <p>Kenali.Diri??</p>
                    </h2>
                    <p className="leading-relaxed mt-8 text-base">
                        <span className="font-bold">Kenali.Diri</span> adalah
                        sebuah layanan{' '}
                        <span className="font-bold">pembelajaran</span> terkait{' '}
                        <span className="font-bold">edukasi seksual</span> di
                        Indonesia.
                        <br />
                        <br />
                        Kenali.Diri akan membantu generasi muda untuk
                        mendapatkan <span className="font-bold">
                            informasi
                        </span>{' '}
                        mengenai{' '}
                        <span className="font-bold">edukasi seksual</span>{' '}
                        dengan cara yang{' '}
                        <span className="font-bold">sehat</span> dan pastinya{' '}
                        <span className="font-bold">seru!</span>
                    </p>
                    <Link
                        href="/eksplor"
                        className="mt-16 bg-blue hover:bg-blue-hovered text-white py-4 px-12 text-base font-semibold rounded-md w-fit"
                    >
                        Cari tahu yuk!
                    </Link>
                </div>
            </Section>
            <Section className="bg-soft-cream text-dark-slate py-32">
                <h2 className="col-span-12 text-center text-blue text-5xl font-bold">
                    Kenapa Kenali.Diri?
                </h2>
                <p className="col-span-12 text-center mt-8 mb-12 leading-relaxed">
                    <span className="font-bold">Kenali.Diri</span> menghadirkan{' '}
                    <span className="font-bold">pengalaman</span> yang{' '}
                    <span className="font-bold">menarik</span> bagi kalian para
                    remaja dalam{' '}
                    <span className="font-bold">
                        mempelajari edukasi seksual.
                    </span>{' '}
                    Tentunya dengan{' '}
                    <span className="font-bold">fitur-fitur</span> yang{' '}
                    <span className="font-bold">menarik</span> dan{' '}
                    <span className="font-bold">menyenangkan!</span>
                </p>
                <div className="col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                    <div className="p-4 rounded-full bg-pink/30 w-fit">
                        <Article className="fill-pink lg:size-10" />
                    </div>
                    <p className="text-pink font-bold text-lg mt-4">Artikel</p>
                    <p className="mt-1 text-sm">
                        Artikel informatif dan mudah dipahami tentang edukasi
                        seks
                    </p>
                </div>
                <div className="col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                    <div className="p-4 rounded-full bg-teal-500/30 w-fit">
                        <Game className="fill-teal-500 lg:size-10" />
                    </div>
                    <p className="text-teal-500 font-bold text-lg mt-4">
                        Gamifikasi
                    </p>
                    <p className="mt-1 text-sm">
                        Belajar melalui permainan interaktif yang edukatif
                    </p>
                </div>
                <div className="col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                    <div className="p-4 rounded-full bg-dark-slate/30 w-fit">
                        <Roadmap className="fill-dark-slate lg:size-10 p-1.5" />
                    </div>
                    <p className="text-dark-slate font-bold text-lg mt-4">
                        Roadmap
                    </p>
                    <p className="mt-1 text-sm">
                        Panduan langkah demi langkah dalam perjalanan edukasi
                        seksual
                    </p>
                </div>
                <div className="col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                    <div className="p-4 rounded-full bg-amber-400/30 w-fit">
                        <Medal className="fill-amber-400 lg:size-10" />
                    </div>
                    <p className="text-amber-400 font-bold text-lg mt-4">
                        Penghargaan
                    </p>
                    <p className="mt-1 text-sm">
                        Lencana dan poin atas pencapaian untuk memotivasi
                        belajar lebih lanjut
                    </p>
                </div>
                <div className="col-span-12 flex justify-center">
                    <Link
                        href="/tentang-kami"
                        className="mt-16 bg-pink hover:bg-pink-hovered text-white py-4 px-12 text-base font-semibold rounded-md w-fit"
                    >
                        Kenali kami juga
                    </Link>
                </div>
            </Section>
            <Section className="bg-soft-cream">
                <Image
                    src="/assets/wave.png"
                    width={4320}
                    height={1389}
                    className="w-full"
                    alt="Wave image"
                />
            </Section>
            <Footer />
        </>
    );
}
