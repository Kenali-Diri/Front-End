'use client';

import Link from "next/link";
import { Game, Medal, Diamond } from "../icons";

type ColorVariant = 'blue' | 'pink' | 'dark-slate';

interface LevelProps {
    roadmapTopicSlug: string,
    level: Level,
    variant?: ColorVariant,
    complete?: boolean,
}

const iconColor: { [key in ColorVariant]: string } = {
    'blue': 'fill-blue',
    'pink': 'fill-pink',
    'dark-slate': 'fill-dark-slate'
}

const textColor: { [key in ColorVariant]: string } = {
    'blue': 'text-blue',
    'pink': 'text-pink',
    'dark-slate': 'text-dark-slate'
}

const backgroundColor: { [key in ColorVariant]: string } = {
    'blue': 'bg-blue',
    'pink': 'bg-pink',
    'dark-slate': 'bg-dark-slate'
}

const borderColor: { [key in ColorVariant]: string } = {
    'blue': 'border-blue',
    'pink': 'border-pink',
    'dark-slate': 'border-dark-slate'
}

export function Level({ roadmapTopicSlug, level, variant = 'blue', complete = false }: LevelProps) {
    return (
        <Link href={`${roadmapTopicSlug}/${level.slug}`} className="bg-white rounded-2xl sm:rounded-full shadow-md flex flex-col sm:flex-row sm:items-center p-6 sm:p-8 gap-y-3 sm:gap-x-6 w-full sm:w-[28rem]" key={level.name}>
            <Game className={`flex-none ${iconColor[variant]}`} size="size-6 sm:size-8" />
            <div className="grow">
                <h4 className={`${textColor[variant]} font-bold text-base sm:text-lg`}>{level.name}</h4>
                <p className="text-xs sm:text-sm">{level.subtitle}</p>
            </div>

            {complete ? (
                <div className={`relative w-fit self-end flex items-center ${backgroundColor[variant]} rounded-full gap-x-2 py-2 px-2 pe-14 text-white text-sm`}>
                    <Diamond className="fill-white" size="size-5" />
                    <span className="font-semibold">50</span>

                    <Medal className={`absolute right-0 fill-white ${backgroundColor[variant]} rounded-full p-2.5 box-content`} size="size-6" />
                </div>
            ) : (
                <div className={`flex-none size-6 sm:size-8 border-2 ${borderColor[variant]} rounded-full`} />
            )}
        </Link>
    )
}