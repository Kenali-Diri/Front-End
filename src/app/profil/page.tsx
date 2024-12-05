'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Dialog from '@/components/Dialog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/core/Section';
import { ChevronLeft } from '@/components/icons';

export default function Profil() {
    const [open, setOpen] = useState<boolean>(false);
    const [badgeData, setBadgeData] = useState<{
        alt: string;
        src: string;
    }>({ alt: '', src: '' });
    const [showMore, setShowMore] = useState<boolean>(false);
    const [badgesPerRow, setBadgesPerRow] = useState<number>(7);
    const [rowsToShow, setRowsToShow] = useState<number>(2);
    const [edit, setEdit] = useState<boolean>(false);

    const handleBadgeClick = (alt: string, src: string) => {
        setBadgeData({ alt, src });
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const badgeList = Array.from({ length: 20 });
    const totalBadgesToShow = showMore
        ? badgeList.length
        : rowsToShow * badgesPerRow;

    useEffect(() => {
        AOS.init();

        const updateDimensions = () => {
            const newWidth = window.innerWidth;

            if (newWidth < 768) {
                setBadgesPerRow(4);
                setRowsToShow(2);
            } else if (newWidth < 1024) {
                setBadgesPerRow(6);
                setRowsToShow(2);
            } else {
                setBadgesPerRow(7);
                setRowsToShow(2);
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => {
            window.removeEventListener('resize', updateDimensions);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Section className="bg-soft-cream py-20 overflow-hidden relative">
                <div className="col-span-12 ">
                    <div className=" grid grid-cols-12 gap-6">
                        <Link href={`/`} className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-dark-slate" data-aos='fade'>
                            <ChevronLeft className="fill-dark-slate" />
                            <span>Kembali</span>
                        </Link>
                        <div className="col-span-12">
                            <h2 className="text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.1] font-bold bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent h-16 w-fit" data-aos='fade'>
                                Pengaturan Akun
                            </h2>
                        </div>

                        <div className="col-span-12">
                            <div className="grid grid-rows-1 md:grid-rows-0 grid-cols-12 gap-6">
                                {/* left side */}
                                <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                                    <div className="flex flex-col gap-4 bg-white p-6 rounded-lg" data-aos='fade'>
                                        <div>
                                            <p className="font-bold text-dark-slate text-2xl">
                                                Detail Profil
                                            </p>
                                        </div>

                                        <div className="flex">
                                            <div className="flex items-center justify-center gap-4">
                                                <Image
                                                    src="/assets/foto_profile/kevin.png"
                                                    width={100}
                                                    height={510}
                                                    alt="foto profil"
                                                    className="rounded-full"
                                                />
                                                <div className="flex flex-col gap-2">
                                                    <h2 className="font-bold text-dark-slate text-4xl">
                                                        David Ju
                                                    </h2>
                                                    <button
                                                        className="bg-blue py-2 text-white rounded-md hover:bg-blue-hovered"
                                                        onClick={() =>
                                                            setEdit(!edit)
                                                        }
                                                    >
                                                        {edit
                                                            ? 'Save Profil'
                                                            : 'Edit Profil'}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex gap-4">
                                            <div className="flex flex-col w-[50%]">
                                                <p className='font-bold'>Email</p>
                                                <input
                                                    type="email"
                                                    value="DavidJu@gmail.com"
                                                    className={`border border-gray-300 rounded p-2 ${!edit
                                                        ? 'opacity-40'
                                                        : 'opacity-100'
                                                        }`}
                                                    disabled={!edit}
                                                />
                                            </div>
                                            <div className="flex flex-col w-[50%]">
                                                <p className='font-bold'>Gender</p>
                                                <select
                                                    className={`border border-gray-300 rounded p-2 ${!edit
                                                        ? 'opacity-40'
                                                        : 'opacity-100'
                                                        }`}
                                                    disabled={!edit}
                                                >
                                                    <option value="volvo">
                                                        Laki-Laki
                                                    </option>
                                                    <option value="saab">
                                                        Perempuan
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:col-span-9">
                                        <div className="flex flex-col gap-4 bg-white p-6 rounded-lg" data-aos='fade' data-aos-anchor-placement='top-bottom'>
                                            <div className="flex flex-col gap-4 bg-white p-6 rounded-lg">
                                                <h2 className="font-bold text-dark-slate text-3xl">
                                                    Badge
                                                </h2>

                                                <div
                                                    className={`transition-all duration-500 overflow-hidden`}
                                                    style={{
                                                        maxHeight: showMore
                                                            ? '2000px'
                                                            : `${2 * 100 + 16
                                                            }px`,
                                                    }}
                                                >
                                                    <div
                                                        className="grid gap-4"
                                                        style={{
                                                            gridTemplateColumns: `repeat(${badgesPerRow}, minmax(0, 1fr))`,
                                                        }}
                                                    >
                                                        {badgeList
                                                            .slice(
                                                                0,
                                                                totalBadgesToShow,
                                                            )
                                                            .map((_, index) => {
                                                                const badgeAlt = `badge-${index + 1
                                                                    }`;
                                                                const badgeSrc = `/assets/Badge3L,Leceh,Lari,Lapor!.png`;
                                                                return (
                                                                    <Image
                                                                        key={
                                                                            index
                                                                        }
                                                                        src={
                                                                            badgeSrc
                                                                        }
                                                                        width={
                                                                            88
                                                                        }
                                                                        height={
                                                                            91
                                                                        }
                                                                        alt={
                                                                            badgeAlt
                                                                        }
                                                                        className="cursor-pointer"
                                                                        onClick={() =>
                                                                            handleBadgeClick(
                                                                                badgeAlt,
                                                                                badgeSrc,
                                                                            )
                                                                        }
                                                                    />
                                                                );
                                                            })}
                                                    </div>
                                                </div>
                                                {badgeList.length >=
                                                    totalBadgesToShow && (
                                                        <button
                                                            className="mt-4 text-blue font-bold"
                                                            onClick={() =>
                                                                setShowMore(
                                                                    !showMore,
                                                                )
                                                            }
                                                        >
                                                            {showMore
                                                                ? 'Show Less'
                                                                : 'Show More'}
                                                        </button>
                                                    )}
                                            </div>
                                        </div>
                                    </div>

                                    <button className="text-white text-center bg-pink py-2 px-16 hover:bg-pink-hovered w-fit rounded-md hidden md:inline-block" data-aos='fade' data-aos-anchor-placement='top-bottom'>
                                        Keluar
                                    </button>
                                </div>
                                {/* right side */}
                                <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
                                    <div className="bg-white px-4 py-8 flex flex-col justify-center items-center rounded-md relative" data-aos='fade'>
                                        <h2 className="text-4xl md:text-lg lg:text-4xl text-center text-dark-slate font-bold" data-aos='fade'>
                                            Total Point
                                        </h2>
                                        <h1 className="text-8xl md:text-6xl lg:text-8xl text-blue font-bold" data-aos='fade'>
                                            150
                                        </h1>
                                        <Image
                                            src="/assets/crown.png"
                                            width={200}
                                            height={100}
                                            alt="mahkota"
                                            className="hidden md:inline absolute right-[10px] top-[-5px] !translate-x-1/2 !-translate-y-1/2"
                                            data-aos='fade'
                                        />
                                    </div>

                                    <div className="bg-white px-6 py-8 rounded-md flex flex-col gap-8" data-aos='fade' data-aos-anchor-placement='top-bottom'>
                                        <div>
                                            <h2 className="text-xl lg:text-3xl text-dark-slate font-bold">
                                                Ganti Password
                                            </h2>
                                            <p className="lg:text-sm text-medium-slate mt-2">
                                                Langkah ini akan mengatur ulang
                                                kata sandi Anda, memastikan
                                                hanya yang baru yang akan
                                                berfungsi.
                                            </p>
                                        </div>
                                        <button className="p-2 bg-blue text-white rounded-md hover:bg-blue-hovered">
                                            Ganti Password
                                        </button>
                                    </div>

                                    <button className="text-white text-center bg-pink rounded-md p-2 md:hidden" data-aos='fade' data-aos-anchor-placement='top-bottom'>
                                        Keluar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hidden xl:grid lg:col-span-5">
                    <Image
                        src="/assets/profil.png"
                        width={350}
                        height={400}
                        className="absolute right-0 mt-[-200px] z-10"
                        alt="Gambar Hiasan"
                    />
                </div>
            </Section>
            <Footer />
            <Dialog
                open={open}
                handleClose={handleClose}
                type="badge"
                imgName={badgeData.alt}
                src={badgeData.src}
            />
        </>
    );
}
