'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/core/Section';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutUs() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <Navbar />
            <Section className="items-center bg-soft-cream py-20 overflow-hidden ">
                {/* Bagian Header paling atas */}
                <div className="col-span-12 h-[300px] sm:h-[376px] flex flex-col items-center justify-center bg-white rounded-md gap-[16px] md:gap-[32px]" data-aos='fade-down'>
                    <div className="w-[200px] h-[40px] sm:w-[296px] sm:h-[58px] bg-soft-cream flex justify-center items-center rounded-3xl">
                        <p className="text-pink font-bold text-base sm:text-xl">
                            Tentang Kami
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-[#435BC0] to-[#F6666F] bg-clip-text text-transparent">
                            Kenali Diri
                        </h2>
                    </div>
                    <div className="px-6 lg:w-[794px]">
                        <p className="sm:text-lg lg:text-lg text-center">
                            Kenali diri adalah sebuah website edukasi yang akan
                            memberikan pembelajaran terakit edukasi seksual
                            dengan cara yang menyenangkan dan aman.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="items-center bg-soft-cream py-20 overflow-hidden ">
                {/* Isi */}
                <div className="col-span-12 h-auto flex flex-col items-center justify-center gap-10">
                    <h2 className="text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.1] text-blue font-bold text-center" data-aos='fade'>
                        Awal Dari Kenali.Diri
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center h-auto gap-10 lg:gap-4">
                        {/* bagian kiri */}
                        <div className="hidden sm:flex sm:items-center sm:justify-center" data-aos='fade-up'>
                            <Image
                                src="/assets/balon.png"
                                width={500}
                                height={500}
                                alt="Balon.png"
                                className='w-10/12 h-fit'
                            />
                        </div>
                        {/* bagian kanan */}
                        <div className="text-center sm:text-left flex items-center justify-center" data-aos='fade-up'>
                            <p className="text-base lg:text-lg">
                                Berawal dari keresahan kami sebagai anak muda
                                yang sadar akan{' '}
                                <span className="font-semibold text-pink">
                                    {' '}
                                    rendahnya edukasi seksual
                                </span>{' '}
                                bagi remaja di sekolah maupun di keluarga.
                                <br className="hidden lg:block" />
                                <br className="hidden lg:block" />
                                Yang pada akhirnya menyebabkan maraknya
                                kasus-kasus yang terjadi di Indonesia, seperti{' '}
                                <span className="font-semibold text-pink">
                                    pelecehan seksual, pernikahan muda, dan
                                    kasus lainnya
                                </span>
                                .
                                <br className="hidden lg:block" />
                                <br className="hidden lg:block" />
                                Oleh sebab itu, kami menghadirkan sebuah
                                platform yang dapat memberikan{' '}
                                <span className="font-semibold text-pink">
                                    {' '}
                                    pembelajaran edukasi seksual yang aman dan
                                    tentunya menyenangkan
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="items-center bg-soft-cream py-20 overflow-hidden ">
                {/* Visi */}
                <div className="flex col-span-12 gap-6 items-center justify-center">
                    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
                        <div className="h-[400px] lg:h-[592px] bg-blue flex justify-center items-center rounded-md relative" data-aos='flip-right'>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full left-4 top-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full right-4 top-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full left-4 bottom-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full right-4 bottom-4"></div>
                            <div className="text-center">
                                <p className="text-4xl md:text-7xl text-white font-bold">
                                    Visi
                                </p>
                                <p className="text-4xl md:text-7xl text-white font-bold">
                                    Kami
                                </p>
                            </div>
                        </div>

                        <div className="h-[400px] lg:h-[592px] p-8 bg-white flex justify-center items-center rounded-md" data-aos='flip-left' data-aos-delay='200'>
                            <p className="text-lg md:text-2xl text-blue font-bold text-center">
                                Meningkatkan pemahaman dan kesadaran remaja
                                mengenai edukasi seksual.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="items-center bg-soft-cream pb-20 overflow-hidden">
                {/* Misi */}
                <div className="flex col-span-12 items-center justify-center">
                    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4">
                        {/* Div "Misi Kami" */}
                        <div className="h-[400px] lg:h-[592px] bg-pink flex flex-col justify-center items-center rounded-md relative order-1 md:order-2" data-aos='flip-left'>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full left-4 top-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full right-4 top-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full left-4 bottom-4"></div>
                            <div className="w-[30px] h-[30px] bg-white absolute rounded-full right-4 bottom-4"></div>
                            <p className="text-4xl md:text-7xl text-white font-bold">
                                Misi
                            </p>
                            <p className="text-4xl md:text-7xl text-white font-bold">
                                Kami
                            </p>
                        </div>

                        {/* Div dengan teks */}
                        <div className="h-[400px] lg:h-[592px] p-8 bg-white flex flex-col justify-center items-center rounded-md text-lg md:text-2xl order-2 md:order-1" data-aos='flip-right' data-aos-delay='200'>
                            <p className="text-pink font-bold text-center">
                                Menghadirkan platform pembelajaran edukasi
                                seksual yang sehat, aman, dan seru.
                            </p>
                            <br />
                            <p className="text-pink font-bold text-center">
                                Menyediakan informasi edukasi seksual yang
                                menarik dan mudah dipahami oleh remaja.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="items-center bg-soft-cream pb-20 overflow-hidden">
                {/* Tim Kami */}
                <div className="flex item-center col-span-12 flex-col">
                    <div className="flex justify-center mb-4">
                        <h2 className="text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.1] text-blue" data-aos='fade'>
                            <span className="font-bold">Tim</span> Kami
                        </h2>
                    </div>
                    <div className="grid items-center justify-center grid-rows-3 md:grid-rows-1 md:grid-cols-3 pt-4 px-12 gap-4">
                        {/* Gavriel Section */}
                        <div className="team-member relative group overflow-hidden rounded-lg" data-aos='fade-up'>
                            <Image
                                src="/assets/foto_profile/gavriel.png"
                                width={500}
                                height={350}
                                alt="Gavriel"
                                className="transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-10/12 absolute flex flex-col bottom-4 bg-white px-3 py-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md left-1/2 -translate-x-1/2">
                                <h3 className="text-md lg:text-lg line-clamp-1 font-bold text-blue">
                                    Gavriel Satrio W
                                </h3>
                                <p className="text-xs lg:text-sm text-dark-slate">
                                    Developer
                                </p>
                            </div>
                        </div>

                        {/* Kevin Section */}
                        <div className="team-member relative group overflow-hidden rounded-lg" data-aos='fade-up' data-aos-delay='200'>
                            <Image
                                src="/assets/foto_profile/kevin.png"
                                width={500}
                                height={350}
                                alt="Kevin"
                                className="transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-10/12 absolute flex flex-col bottom-4 bg-white px-3 py-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md left-1/2 -translate-x-1/2">
                                <h3 className="text-md lg:text-lg line-clamp-1 font-bold text-blue">
                                    Kevin Chiputra
                                </h3>
                                <p className="text-xs lg:text-sm text-dark-slate">
                                    Developer
                                </p>
                            </div>
                        </div>

                        {/* Fatih Section */}
                        <div className="team-member relative group overflow-hidden rounded-lg" data-aos='fade-up' data-aos-delay='400'>
                            <Image
                                src="/assets/foto_profile/fatih.jpg"
                                width={500}
                                height={350}
                                alt="Fatih"
                                className="transition-transform duration-300 ease-in-out group-hover:scale-110 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="w-10/12 absolute flex flex-col bottom-4 bg-white px-3 py-2 lg:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md left-1/2 -translate-x-1/2">
                                <h3 className="text-md lg:text-lg line-clamp-1 font-bold text-blue">
                                    Muhammad Fatih
                                </h3>
                                <p className="text-xs lg:text-sm text-dark-slate">
                                    Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </>
    );
}
