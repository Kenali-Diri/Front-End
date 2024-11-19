'use client';

import { Section } from "@/components/core/Section"
import { Footer } from "@/components/Footer"
import { ScrambledWord } from "@/components/games/ScrambledWord";
import { ChevronLeft } from "@/components/icons"
import { Navbar } from "@/components/Navbar"

import Link from "next/link"
import Image from "next/image"
import { Quiz } from "@/components/games/Quiz";
import { ShortAnswer } from "@/components/games/ShortAnswer";

interface LevelDetailProps {
    params: {
        roadmapTopicSlug: string,
        levelSlug: string
    }
}

export default function LevelDetail({ params }: LevelDetailProps) {
    const handleGameCompletion = () => {
        //TODO: Add point ke player
    }

    return (
        <>
            <Navbar />
            <Section className="bg-dark-slate py-12 md:py-20">
                <div className="col-span-12 md:col-span-6 text-white">
                    <Link href={`/eksplor/${params.roadmapTopicSlug}`} className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-white">
                        <ChevronLeft className="fill-white" />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-3xl lg:text-5xl font-bold drop-shadow-lg mt-10">{params.levelSlug}</h1>
                    <p className="mt-6 text-sm lg:text-base">Ayo kita kenalan sama organ reproduksi kita masing-masing dan ketahui cara kerjanya serta manfaatnya!</p>
                </div>
                <div className="col-span-12 md:col-span-6 mt-6 md:mt-0 flex items-center justify-center">
                    <Image width={2100} height={1400} src='/assets/organ-reproduksi.png' alt="Banner" className="w-3/4 md:w-full h-fit drop-shadow-xl" />
                </div>
            </Section>
            <Section className="bg-soft-cream py-20">
                <div className="col-span-12 flex flex-col gap-y-12">
                    <div className="leading-loose">
                        <h1 className="font-bold text-xl">Organ Reproduksi</h1>
                        <p>Ayo kita kenalan sama organ reproduksi kita masing-masing dan ketahui cara kerjanya serta manfaatnya!</p>
                    </div>
                    <ScrambledWord answer="SPERMA" scrambledWord="MSAERP" question="Sebagai organ reproduksi, apa yang dihasilkan oleh testis?" image="/assets/testicle-sperm.png" point={30} onComplete={handleGameCompletion} />
                    <Quiz options={['Testis', 'Penis', 'Vagina', 'Rambut']} answer="Testis" question="Organ reproduksi pada pria disebut?" point={50} onComplete={handleGameCompletion} />
                    <ShortAnswer question="Disebut apakah alat yang ada di gambar ini?" answer="Kondom" image="/assets/condom.png" point={10} onComplete={handleGameCompletion} />
                </div>
            </Section>
            <Footer />
        </>
    )
}