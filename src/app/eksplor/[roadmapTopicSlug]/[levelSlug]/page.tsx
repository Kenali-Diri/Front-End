import { Section } from "@/components/core/Section"
import { Footer } from "@/components/Footer"
import { ChevronLeft } from "@/components/icons"
import { Navbar } from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

interface LevelDetailProps {
    params: {
        roadmapTopicSlug: string,
        levelSlug: string
    }
}

export default function LevelDetail({ params }: LevelDetailProps) {
    return (
        <>
            <Navbar />
            <Section className="bg-dark-slate py-20">
                <div className="col-span-6 text-white">
                    <Link href={`/eksplor/${params.roadmapTopicSlug}`} className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-white">
                        <ChevronLeft className="fill-white" />
                        <span>Kembali</span>
                    </Link>
                    <h1 className="text-3xl lg:text-5xl font-bold drop-shadow-lg mt-10">{params.levelSlug}</h1>
                    <p className="mt-6">Ayo kita kenalan sama organ reproduksi kita masing-masing dan ketahui cara kerjanya serta manfaatnya!</p>
                </div>
                <div className="col-span-6 flex items-center">
                    <Image width={2100} height={1400} src='/assets/organ-reproduksi.png' alt="Banner" className="w-full h-fit drop-shadow-xl" />
                </div>
            </Section>
            <Section className="bg-soft-cream py-20">
                asdf
            </Section>
            <Footer />
        </>
    )
}