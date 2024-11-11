'use client';

import Link from "next/link";
import { Game, Medal } from "../icons";
import { Diamond } from "../icons/Diamond";

type COLOR_VARIANT = 'blue' | 'pink' | 'dark-slate';

interface LevelProps {
    roadmapTopicSlug: string,
    level: Level,
    variant?: COLOR_VARIANT,
    complete?: boolean,
}

export function Level({ roadmapTopicSlug, level, variant = 'blue', complete = false }: LevelProps) {
    return (
        <Link href={`${roadmapTopicSlug}/${level.slug}`} className="bg-white rounded-2xl sm:rounded-full shadow-md flex flex-col sm:flex-row sm:items-center p-6 sm:p-8 gap-y-3 sm:gap-x-6 w-full sm:w-[28rem]" key={level.name}>
            <Game className={`flex-none fill-${variant}`} size="size-6 sm:size-8" />
            <div className="grow">
                <h4 className={`text-${variant} font-bold text-base sm:text-lg`}>{level.name}</h4>
                <p className="text-xs sm:text-sm">{level.subtitle}</p>
            </div>

            {complete ? (
                <div className={`relative w-fit self-end flex items-center bg-${variant} rounded-full gap-x-2 py-2 px-2 pe-14 text-white text-sm`}>
                    <Diamond className="fill-white" size="size-5" />
                    <span className="font-semibold">50</span>

                    <Medal className={`absolute right-0 fill-white bg-${variant} rounded-full p-2.5 box-content`} size="size-6" />
                </div>
            ) : (
                <div className={`flex-none size-6 sm:size-8 border-2 border-${variant} rounded-full`} />
            )}
        </Link>
    )
}