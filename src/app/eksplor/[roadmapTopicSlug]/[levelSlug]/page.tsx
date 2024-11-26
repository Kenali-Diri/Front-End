'use client';
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Section } from "@/components/core/Section"
import { ChevronDown, ChevronLeft } from "@/components/icons"

import { Quiz } from "@/components/games/Quiz";
import { ShortAnswer } from "@/components/games/ShortAnswer";
import { ScrambledWord } from "@/components/games/ScrambledWord";
import { Material } from "@/interfaces/Material";

interface LevelDetailProps {
    params: {
        roadmapTopicSlug: string,
        levelSlug: string
    }
}

export default function LevelDetail({ params }: LevelDetailProps) {
    const [openedMaterial, setOpenedMaterial] = useState('');

    const handleOpenMaterial = (materialToBeOpen: string) => {
        if (openedMaterial === materialToBeOpen) {
            setOpenedMaterial('');
        } else {
            setOpenedMaterial(materialToBeOpen);
        }
    }

    const handleGameCompletion = () => {
        //TODO: Add point ke player
    }

    const levelMaterials: Array<Material> = [
        {
            title: 'Organ Reproduksi',
            materialItems: [
                {
                    type: 'with-illustration',
                    text: 'Bagian tubuh yang memiliki fungsi khusus dalam proses reproduksi atau pengembangbiakan manusia. Organ ini memungkinkan terjadinya pertemuan antara sel sperma dan sel telur, yang menjadi awal dari pembentukan kehidupan baru. Pada tubuh manusia, organ reproduksi berbeda antara laki-laki dan perempuan. Pada laki-laki, organ seperti testis dan penis berperan dalam memproduksi serta mengeluarkan sperma. Sementara pada perempuan, ovarium dan rahim berfungsi dalam memproduksi sel telur dan mendukung perkembangan janin saat kehamilan. Organ-organ ini mulai berfungsi sepenuhnya ketika seseorang memasuki masa pubertas, yaitu sekitar usia 8-14 tahun.',
                    textType: 'text',
                    image: '/assets/thinking.png'
                }
            ]
        },
        {
            title: 'Laki-Laki',
            materialItems: [
                {
                    type: 'with-image',
                    text: `Vas Deferens: Saluran yang membawa sperma dari epididimis menuju uretra selama proses ejakulasi.
                    Bladder (Kandung Kemih): Organ yang menyimpan urine sebelum dikeluarkan melalui uretra. Kandung kemih tidak terlibat langsung dalam proses reproduksi, tetapi posisinya dekat dengan organ reproduksi pria.
                    Colon (Usus Besar): Bagian dari sistem pencernaan yang berada di belakang organ reproduksi dan tidak berperan langsung dalam reproduksi.
                    Seminal Vesicle (Kantung Semen): Struktur yang menghasilkan cairan yang bercampur dengan sperma untuk membentuk semen. Cairan ini kaya akan fruktosa, yang memberi energi pada sperma.
                    Prostate (Kelenjar Prostat): Kelenjar yang menghasilkan cairan yang membantu sperma bergerak lebih mudah dan meningkatkan kelangsungan hidup sperma dalam sistem reproduksi wanita.
                    Testicle (Testis): Organ yang memproduksi sperma dan hormon testosteron. Testis berperan penting dalam sistem reproduksi pria.
                    Epididymis: Struktur berbentuk tabung di atas testis yang menyimpan dan mematangkan sperma setelah diproduksi di testis.
                    Urethra: Saluran yang membawa sperma keluar dari tubuh selama ejakulasi. Uretra juga berfungsi dalam sistem urin untuk mengeluarkan urine.
                    Penis: Organ eksternal yang mengeluarkan sperma dari tubuh pria ke dalam sistem reproduksi wanita saat hubungan seksual.`,
                    textType: 'list',
                    image: '/assets/male-reproductive-system.png'
                },
                {
                    type: 'game',
                    gameType: 'quiz',
                    gameProps: {
                        question: 'Organ reproduksi pada pria disebut?',
                        answer: 'Testis',
                        onComplete: handleGameCompletion,
                        point: 50,
                        options: ['Testis', 'Penis', 'Vagina', 'Rambut']
                    }
                },
                {
                    type: 'with-video',
                    text: `Vas Deferens: Saluran yang membawa sperma dari epididimis menuju uretra selama proses ejakulasi.
                    Bladder (Kandung Kemih): Organ yang menyimpan urine sebelum dikeluarkan melalui uretra. Kandung kemih tidak terlibat langsung dalam proses reproduksi, tetapi posisinya dekat dengan organ reproduksi pria.
                    Colon (Usus Besar): Bagian dari sistem pencernaan yang berada di belakang organ reproduksi dan tidak berperan langsung dalam reproduksi.
                    Seminal Vesicle (Kantung Semen): Struktur yang menghasilkan cairan yang bercampur dengan sperma untuk membentuk semen. Cairan ini kaya akan fruktosa, yang memberi energi pada sperma.
                    Prostate (Kelenjar Prostat): Kelenjar yang menghasilkan cairan yang membantu sperma bergerak lebih mudah dan meningkatkan kelangsungan hidup sperma dalam sistem reproduksi wanita.
                    Testicle (Testis): Organ yang memproduksi sperma dan hormon testosteron. Testis berperan penting dalam sistem reproduksi pria.
                    Epididymis: Struktur berbentuk tabung di atas testis yang menyimpan dan mematangkan sperma setelah diproduksi di testis.
                    Urethra: Saluran yang membawa sperma keluar dari tubuh selama ejakulasi. Uretra juga berfungsi dalam sistem urin untuk mengeluarkan urine.
                    Penis: Organ eksternal yang mengeluarkan sperma dari tubuh pria ke dalam sistem reproduksi wanita saat hubungan seksual.`,
                    textType: 'list',
                    video: 'https://www.youtube.com/embed/hTsxizeybm0?si=0Gi3zCK8cVj46h6Z'
                },
                {
                    type: 'game',
                    gameType: 'scrambled-word',
                    gameProps: {
                        question: 'Sebagai organ reproduksi, apa yang dihasilkan oleh testis?',
                        answer: 'SPERMA',
                        scrambledWord: 'MSAERP',
                        image: '/assets/testicle-sperm.png',
                        onComplete: handleGameCompletion,
                        point: 30
                    }
                },
            ]
        },
        {
            title: 'Perempuan',
            materialItems: [
                {
                    type: 'with-image',
                    text: `Uterine Fundus: Bagian atas rahim yang berbentuk melengkung; tempat implantasi embrio di awal kehamilan.
                    Embrio: Tahap awal perkembangan manusia setelah fertilisasi, sebelum berkembang menjadi janin.
                    Fallopian Tube (Tuba Falopi): Saluran yang menghubungkan ovarium ke rahim, tempat terjadinya pembuahan antara sel telur dan sperma.
                    Ovary (Ovarium): Organ yang memproduksi sel telur dan hormon seperti estrogen dan progesteron.
                    Endometrium: Lapisan dalam rahim yang menebal setiap siklus untuk mendukung implantasi embrio. Jika tidak ada kehamilan, lapisan ini akan luruh saat menstruasi.
                    Perimetrium: Lapisan luar rahim yang berfungsi melindungi rahim.
                    Cervix (Serviks): Bagian bawah rahim yang menghubungkan rahim dengan vagina; berperan dalam mengeluarkan lendir dan membuka selama persalinan.
                    Vagina: Saluran yang menghubungkan serviks ke luar tubuh; berfungsi dalam hubungan seksual, jalur lahir, dan aliran menstruasi.
                    Cervical Canal: Saluran sempit di dalam serviks yang memungkinkan aliran menstruasi keluar dan sperma masuk ke rahim.
                    Myometrium: Lapisan otot tebal di dinding rahim yang berkontraksi selama persalinan untuk membantu mendorong bayi keluar.
                    Fimbriae: Ujung berbentuk jari di ujung tuba falopi yang membantu menangkap sel telur dari ovarium.
                    Ovarian Ligament: Ligamen yang menahan ovarium agar tetap berada di posisinya di dekat rahim.`,
                    textType: 'list',
                    image: '/assets/female-reproductive-system.png'
                },
                {
                    type: 'game',
                    gameType: 'short-answer',
                    gameProps: {
                        question: 'Disebut apakah alat yang ada di gambar ini?',
                        answer: 'Kondom',
                        image: '/assets/condom.png',
                        onComplete: handleGameCompletion,
                        point: 10
                    }
                },
            ]
        }
    ];

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
                <div className="col-span-12 flex flex-col gap-y-8">
                    {levelMaterials.map(material => (
                        <div className="flex flex-col gap-y-8 p-6 md:p-8 bg-white rounded-md shadow-md leading-relaxed" key={material.title}>
                            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleOpenMaterial(material.title)}>
                                <h1 className="font-bold text-lg md:text-xl">{material.title}</h1>
                                <ChevronDown />
                            </div>
                            {openedMaterial === material.title && (
                                <div className="flex flex-col gap-y-8">
                                    {material.materialItems.map(materialItem => {
                                        if (materialItem.type === 'game') {
                                            if (materialItem.gameType === 'quiz' && materialItem.gameProps !== undefined && 'options' in materialItem.gameProps) {
                                                return (
                                                    <Quiz question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} options={materialItem.gameProps.options} />
                                                )
                                            } else if (materialItem.gameType === 'scrambled-word' && materialItem.gameProps !== undefined && 'scrambledWord' in materialItem.gameProps) {
                                                return (
                                                    <ScrambledWord question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} image={materialItem.gameProps.image} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} scrambledWord={materialItem.gameProps.scrambledWord} />
                                                )
                                            } else if (materialItem.gameType === 'short-answer' && materialItem.gameProps !== undefined) {
                                                return (
                                                    <ShortAnswer question={materialItem.gameProps.question} answer={materialItem.gameProps.answer} image={materialItem.gameProps.image!} point={materialItem.gameProps.point} onComplete={materialItem.gameProps.onComplete} />
                                                )
                                            }
                                        } else {
                                            let materialText;

                                            if(materialItem.textType === 'list') {
                                                materialText = (
                                                    <ol className="list-decimal ps-5 text-sm md:text-base leading-relaxed">
                                                        {materialItem.text?.split('\n').map(line => (
                                                            <li>{line}</li>
                                                        ))}
                                                    </ol>
                                                );
                                            } else {
                                                materialText = (
                                                    <p className="text-sm md:text-base leading-relaxed">{materialItem.text}</p>
                                                );
                                            }

                                            if (materialItem.type === 'with-illustration' && materialItem.image !== undefined) {
                                                return (
                                                    <div className="flex flex-col items-center md:items-start md:flex-row gap-y-6 md:gap-x-12 md:gap-y-0">
                                                        {materialText}
                                                        <Image src={materialItem.image} width={486} height={572} alt="Illustration" className="flex-none w-1/2 md:w-1/4 h-fit drop-shadow-md" />
                                                    </div>
                                                );
                                            } else if (materialItem.type === 'with-image' && materialItem.image !== undefined) {
                                                return (
                                                    <div className="flex flex-col w-full md:grid md:grid-cols-2 gap-y-6 md:gap-x-12 md:gap-y-0">
                                                        <Image src={materialItem.image} width={1064} height={1064} alt="Image" className="h-fit md:col-span-1" />
                                                        {materialText}
                                                    </div>
                                                );
                                            } else if (materialItem.type === 'with-video' && materialItem.video !== undefined) {
                                                return (
                                                    <div className="flex flex-col gap-y-8">
                                                        <iframe className="w-full h-[480px] rounded-md" src={materialItem.video} title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                                        {materialText}
                                                    </div>
                                                );
                                            }
                                        }
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Section>
            <Footer />
        </>
    )
}