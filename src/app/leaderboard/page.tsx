'use client';

import Image from 'next/image';
import { useEffect } from 'react';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/core/Section';
import { Diamond } from '@/components/icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Leaderboard() {
    useEffect(() => {
        AOS.init();
    });

    return (
        <>
            <Navbar />
            <Section className="items-center bg-light-slate py-20 overflow-hidden ">
                <div className="grid col-span-12 justify-center items-center gap-12 md:gap-36">
                    {/* Header */}
                    <div className="grid grid-cols-12 items-center justify-center">
                        <h2 className="col-span-12 text-center text-4xl md:text-5xl text-blue font-bold" data-aos='fade'>
                            Leaderboard
                        </h2>
                    </div>
                    {/* First - Thrid Rank */}
                    <div className="grid grid-rows-3 grid-cols-6 lg:grid-rows-none lg:items-end gap-4 lg:gap-6">
                        {/* Rank 2 */}
                        <div className="bg-blue lg:w-[300px] xl:w-[383px] lg:h-[220px] row-start-2 lg:row-start-auto col-span-6 lg:col-span-2 border-[#EAEAEA] border-[6px] md:border-8 rounded-md flex justify-center items-center p-6 relative" data-aos='fade-up' data-aos-delay='400'>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h2 className="text-[#EAEAEA] font-bold text-xl md:text-2xl">
                                    [2] Fatih Dejavu
                                </h2>
                                <div className="flex gap-2 items-center justify-center">
                                    <Diamond
                                        size="w-6 md:w-8"
                                        className="fill-barbie-pink"
                                    />
                                    <p className="text-xl md:text-2xl font-bold text-barbie-pink">
                                        300
                                    </p>
                                </div>
                            </div>
                            <div className="hidden lg:block absolute top-[-90px] rounded-full border-[#EAEAEA] border-[6px] md:border-8 ">
                                <Image
                                    src="/assets/foto_profile/fatih.jpg"
                                    width={120}
                                    height={100}
                                    alt="second choice"
                                    className="rounded-full"
                                />
                            </div>
                        </div>

                        {/* Rank 1 */}
                        <div className="bg-blue lg:w-[300px] xl:w-[384px] lg:h-[264px] row-start-1 lg:row-start-auto  col-span-6 lg:col-span-2 border-[#FCD846] border-[6px] md:border-8 rounded-md flex justify-center items-center p-6 relative" data-aos='fade-up' data-aos-delay='200'>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h2 className="text-[#FCD846] font-bold text-xl md:text-2xl">
                                    [1] Gavriel
                                </h2>
                                {/* <p className="text-sm text-white text-center">
                                    “Motivasiku untuk menjadi lebih baik dan
                                    paham mengenai tubuhku”
                                </p> */}
                                <div className="flex gap-2 items-center justify-center">
                                    <Diamond
                                        size="w-6 md:w-8"
                                        className="fill-barbie-pink"
                                    />
                                    <p className="text-xl md:text-2xl font-bold text-barbie-pink">
                                        300
                                    </p>
                                </div>
                            </div>
                            <div className="hidden lg:block absolute top-[-100px] rounded-full border-[#FCD846] border-[6px] md:border-8">
                                <Image
                                    src="/assets/foto_profile/gavriel.png"
                                    width={120}
                                    height={150}
                                    alt="second choice"
                                    className="rounded-full"
                                />
                            </div>
                        </div>

                        {/* Rank 3 */}
                        <div className="bg-blue lg:w-[300px] xl:w-[384px] lg:h-[188px] row-start-3 lg:row-start-auto col-span-6 lg:col-span-2 border-[#E79F7A] border-[6px] md:border-8 rounded-md flex justify-center items-center p-6 relative" data-aos='fade-up' data-aos-delay='600'>
                            <div className="flex flex-col gap-4 items-center justify-center">
                                <h2 className="text-[#E79F7A] font-bold text-xl md:text-2xl">
                                    [3] Kevin Dejavu
                                </h2>
                                <div className="flex gap-2 items-center justify-center">
                                    <Diamond
                                        size="w-6 md:w-8"
                                        className="fill-barbie-pink"
                                    />
                                    <p className="text-xl md:text-2xl font-bold text-barbie-pink">
                                        300
                                    </p>
                                </div>
                                <div className="hidden lg:block absolute top-[-110px] rounded-full border-[#E79F7A] border-[6px] md:border-8 ">
                                    <Image
                                        src="/assets/foto_profile/kevin.png"
                                        width={120}
                                        height={150}
                                        alt="second choice"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            <Section className="items-center bg-soft-cream py-20 overflow-hidden grid-rows-2 lg:grid-rows-none">
                <div className="col-span-12 lg:col-span-9 row-start-2 lg:row-start-auto">
                    <div className="flex flex-col gap-4 pt-4 lg:pt-0">
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div
                                key={i}
                                className="flex justify-between items-center bg-white p-4 rounded-md"
                                data-aos='fade-up'
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <h2 className="text-dark-slate font-bold text-base md:text-lg">
                                        #{i + 1}
                                    </h2>
                                    <h2 className="text-dark-slate text-base md:text-lg">
                                        Kevin
                                    </h2>
                                </div>
                                <div>
                                    <h2 className="text-blue font-bold text-base md:text-lg">
                                        Total Poin: 300
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-12 lg:col-span-3 bg-white flex items-center p-4 gap-4 rounded-md lg:w-[300px] lg:h-[200px] row-start-1 lg:row-start-auto justify-between lg:justify-start" data-aos='fade-left' data-aos-anchor-placement='top-bottom'>
                    <div>
                        <p className="text-lg md:text-xl text-dark-slate">My Points</p>
                        <h2 className="text-5xl md:text-7xl text-blue font-bold">150</h2>
                        <p className="text-lg md:text-xl text-dark-slate">Rank #100</p>
                    </div>
                    <div>
                        <Image
                            src="/assets/exercise.png"
                            width={150}
                            height={50}
                            alt="olahraga"
                        />
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    );
}
