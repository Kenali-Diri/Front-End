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
            <Section className="items-center sm:min-h-dvh 2xl:min-h-fit 2xl:max-h-fit py-36 lg:py-16 2xl:py-24 bg-soft-cream">
                <div className="col-span-12 sm:col-span-7 flex justify-center flex-col text-dark-slate">
                    <h1 className="text-5xl lg:text-7xl font-extrabold bg-gradient-to-r from-blue to-pink w-fit bg-clip-text text-transparent">
                        <p>Kenali diri,</p>
                        <p>kenali kamu.</p>
                    </h1>
                    <p className="mt-6 text-sm lg:text-base leading-relaxed">
                        Belajar seksualitas dengan cara yang asyik, tanpa rasa
                        malu, dan pastinya{' '}
                        <span className="font-bold">#AntiTabuTabuClub</span>
                        <br />
                        <br />
                        Ayo, mulai petualangan belajarmu sekarang juga!
                    </p>

                    <Link
                        href="/eksplor"
                        className="mt-16 bg-pink hover:bg-pink-hovered text-white py-3 lg:py-4 px-10 lg:px-12 text-sm lg:text-base font-semibold rounded-md w-fit"
                    >
                        Eksplor Sekarang!
                    </Link>
                </div>
                <div className="hidden sm:block sm:col-span-5">
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
                <div className="hidden items-end justify-end md:flex md:col-span-6 lg:col-span-5 pt-32">
                    <Image
                        src="/assets/thinking.png"
                        width={486}
                        height={572}
                        className="w-11/12 drop-shadow-lg"
                        alt="Thinking image"
                    />
                </div>
                <div className="flex flex-col justify-center col-span-12 md:col-span-6 lg:col-span-7 py-16">
                    <h2 className="font-bold text-4xl lg:text-5xl">
                        <p>Hmm...,</p>
                        <p>Kenali.Diri??</p>
                    </h2>
                    <p className="leading-relaxed mt-8 text-sm lg:text-base">
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
                        className="mt-16 bg-blue hover:bg-blue-hovered text-white py-3 lg:py-4 px-10 lg:px-12 text-sm lg:text-base font-semibold rounded-md w-fit"
                    >
                        Cari tahu yuk!
                    </Link>
                </div>
            </Section>
            <Section className="bg-soft-cream text-dark-slate py-20 lg:py-32">
                <h2 className="col-span-12 text-center text-blue text-4xl lg:text-5xl font-bold">
                    Kenapa Kenali.Diri?
                </h2>
                <p className="col-span-12 text-center mt-8 mb-12 text-sm lg:text-base leading-relaxed">
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
                <div className='grid grid-cols-12 col-span-12 gap-4'>
                <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                        <div className="p-4 rounded-full bg-pink/30 w-fit">
                            <Article className="fill-pink lg:size-10" />
                        </div>
                        <p className="text-pink font-bold text-lg mt-4">Artikel</p>
                        <p className="mt-1 text-sm">
                            Artikel informatif dan mudah dipahami tentang edukasi
                            seks
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
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
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
                        <div className="p-4 rounded-full bg-dark-slate/30 w-fit">
                            <Roadmap className="fill-dark-slate lg:size-10 p-0.5" />
                        </div>
                        <p className="text-dark-slate font-bold text-lg mt-4">
                            Roadmap
                        </p>
                        <p className="mt-1 text-sm">
                            Panduan langkah demi langkah dalam perjalanan edukasi
                            seksual
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col bg-white rounded-md shadow-md p-6">
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
                            className="mt-8 lg:mt-16 bg-pink hover:bg-pink-hovered text-white py-3 lg:py-4 px-10 lg:px-12 text-sm lg:text-base font-semibold rounded-md w-fit"
                        >
                            Kenali kami juga
                        </Link>
                    </div>
                </div>
            </Section>
            <Section className="bg-soft-cream relative">
                <div className="col-span-12 flex justify-end items-end relative z-20 mt-16 pb-8">
                    <Image src="/assets/painter.png" width={463} height={463} className="size-[100px] sm:size-[160px] md:size-[220px] lg:size-[360px] opacity-0" alt="Painter image" />
                    <Image src="/assets/painter.png" width={463} height={463} className="size-[100px] sm:size-[160px] md:size-[220px] lg:size-[360px] absolute left-0 bottom-8 z-20 drop-shadow-lg" alt="Painter image" />

                    <div className="flex flex-col lg:gap-1">
                        <p className="text-soft-cream text-right text-base md:text-2xl lg:text-4xl font-bold">Kenali diri, kenali kamu</p>
                        <p className="text-soft-cream text-right text-xs md:text-xl lg:text-2xl font-light">bangun masa depan yang cerah</p>
                    </div>
                </div>
                <Image src="/assets/wave.png" width={4320} height={1389} className="absolute w-full h-full top-0 left-0 z-0" alt="Wave image" />
            </Section>
            <Footer />
        </>
    );
}
