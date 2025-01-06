import Image from "next/image"
import { FormEvent, useState } from "react"

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";

import { Game } from "@/interfaces/Game";

import { Diamond } from "../icons"
import { TextField } from "../core/TextField"
import Dialog from "../Dialog";

export interface ShortAnswerProps extends Game {
    image: string
}

export function ShortAnswer({ question, answer, image, point, onComplete }: ShortAnswerProps) {
    const [playerAnswer, setPlayerAnswer] = useState<string>('');
    const [isWrong, setIsWrong] = useState<boolean>(false);

    const [confettiConductor, setConfettiConductor] = useState<TConductorInstance>();
    const initConfetti = ({ conductor }: { conductor: TConductorInstance }) => {
        setConfettiConductor(conductor);
    }

    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [showPointDialog, setShowPointDialog] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (isComplete) {
            return;
        }

        if (answer.split('|').map(text => text.trim().toLowerCase()).includes(playerAnswer.toLowerCase())) {
            setIsWrong(true);
            return;
        }

        // TODO: Show completion dialog / reward dialog
        confettiConductor?.run({ speed: 3, duration: 1000 });
        setIsComplete(true);
        setShowPointDialog(true);
        onComplete();
    }

    return (
        <div className="flex flex-col md:flex-row items-center bg-dark-slate pt-12 p-6 md:pt-6 rounded-md gap-y-8 md:gap-x-8 md:gap-y-0 relative">
            <span className="absolute top-6 right-6 bg-blue p-3 w-fit h-fit self-end flex items-center gap-x-2 rounded-full shadow-sm">
                <Diamond className="fill-white" size="size-5" />
                <p className="text-sm text-white font-medium">{point}</p>
            </span>

            {image && image !== '' && (
                <Image src={image} alt="Image" width={720} height={720} className="md:flex-none size-10/12 md:size-48 aspect-square rounded-md" />
            )}
            <form className="flex w-full md:pe-24 items-center md:items-start flex-col gap-y-4" onSubmit={handleSubmit}>
                <h5 className="text-white font-bold text-base text-center md:text-lg md:text-start">{question}</h5>
                <div className={`w-full ${isWrong ? 'animate-shake' : ''}`} onAnimationEnd={() => setIsWrong(false)}>
                    <TextField name="text-answer" type="text" placeholder="Masukkan jawabanmu" value={playerAnswer} onChange={(e) => {
                        if (isComplete) {
                            return;
                        }

                        setPlayerAnswer(e.target.value.toUpperCase())
                    }} />
                </div>

                {!isComplete && (
                    <button type="submit" className="bg-pink hover:bg-pink-hovered text-white py-2 px-4 text-sm font-semibold rounded-md w-full md:w-fit">Cek Jawaban</button>
                )}
            </form>

            <Fireworks onInit={initConfetti} className="pointer-events-none fixed size-full top-0 left-0 z-20" />
            <Dialog open={showPointDialog} type="selesai_game" handleClose={() => setShowPointDialog(false)} score={point} />
        </div>
    )
}