'use client';

import { Level } from "@/components/cards/Level";
import { Section } from "@/components/core/Section";
import { Footer } from "@/components/Footer";
import { ChevronLeft, Game, Medal } from "@/components/icons";
import { Navbar } from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ExploreDetailProps {
    params: {
        slug: string
    }
}

export default function ExploreDetail({ params }: ExploreDetailProps) {
    const [levels, setLevels] = useState<Array<Level>>([
        {
            name: 'Organ Reproduksi',
            slug: 'organ-reproduksi',
            subtitle: 'Subtitle'
        },
        {
            name: 'Cara "Menjaga" Diri',
            slug: 'cara-menjaga-diri',
            subtitle: 'Subtitle'
        },
        {
            name: 'Kesehatan Kulit',
            slug: 'kesehatan-kulit',
            subtitle: 'Subtitle'
        },
    ]);

    return (
        <>
            <Navbar />
            <Section className="bg-dark-slate py-20">
                <div className="col-span-12">
                    <Link href="/eksplor" className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-white">
                        <ChevronLeft className="fill-white" />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-4xl lg:text-6xl font-bold text-center text-white drop-shadow-lg mt-10">{params.slug}</h1>
                    <Image width={4800} height={1600} src='/assets/tubuhku-banner.png' alt="Banner" className="w-full mt-6" />
                </div>
            </Section>
            <Section className="bg-soft-cream rounded-tr-[50%_100%] rounded-tl-[50%_100%] h-20 md:h-36 -mt-28 md:-mt-32 lg:-mt-36"></Section>
            <Section className="bg-soft-cream">
                <div className="col-span-12 flex flex-col items-center pb-20">
                    {levels.map((level, index) => (
                        <span className="w-full flex flex-col items-center" key={index}>
                            <Level level={level} roadmapTopicSlug={params.slug} variant="blue" complete={true}></Level>

                            {index < levels.length - 1 && (
                                <div className="border-dashed border-l-2 border-dark-slate h-12"></div>
                            )}
                        </span>
                    ))}
                </div>
            </Section>
            <Footer />
        </>
    )
}