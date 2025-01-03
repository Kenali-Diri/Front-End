import { useState } from "react";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";

import { Game } from "@/interfaces/Game";

import { Diamond } from "../icons";
import Dialog from "../Dialog";

export interface QuizProps extends Game {
    options: Array<string>
}

export function Quiz({ question, options, answer, point, onComplete }: QuizProps) {
    const [selectedOption, setSelectedOption] = useState<string>('');
    const [isWrong, setIsWrong] = useState<boolean>(false);

    const [confettiConductor, setConfettiConductor] = useState<TConductorInstance>();
    const initConfetti = ({ conductor }: { conductor: TConductorInstance }) => {
        setConfettiConductor(conductor);
    }

    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [showPointDialog, setShowPointDialog] = useState<boolean>(false);

    const handleSubmit = () => {
        if(isComplete) {
            return;
        }

        if(selectedOption !== answer) {
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
        <div className="bg-dark-slate rounded-md p-6 pb-12 flex flex-col items-center gap-y-4">
            <span className="bg-blue p-3 w-fit h-fit self-end flex items-center gap-x-2 rounded-full shadow-sm">
                <Diamond className="fill-white" size="size-5" />
                <p className="text-sm text-white font-medium">{point}</p>
            </span>

            <div className={`bg-white rounded-2xl shadow-lg w-11/12 md:w-8/12 p-6 flex flex-col items-center ${isWrong ? 'animate-shake' : ''}`} onAnimationEnd={() => setIsWrong(false)}>
                <p className="size-8 md:size-10 font-bold text-white bg-blue rounded-full flex items-center justify-center text-base md:text-xl">?</p>
                <h5 className="font-bold text-base md:text-lg mt-2 text-center">Quiz Time</h5>
                <p className="font-bold text-lg md:text-xl my-6 text-center">{question}</p>

                <div className="flex flex-col gap-y-2 w-full items-center">
                    {options.map(option => (
                        <div key={option} className="flex w-full">
                            <label htmlFor={`option-${option}`} className={`border-[3px] border-blue rounded-md text-center p-2 text-sm md:text-base cursor-pointer w-full ${selectedOption === option ? 'bg-blue text-white hover:bg-blue-hovered' : 'text-blue hover:bg-light-slate/30'}`}>
                                {option}
                            </label>
                            <input type="radio" name="quiz-option" id={`option-${option}`} value={option} className="hidden" onChange={() => {
                                if(isComplete) {
                                    return;
                                }

                                setSelectedOption(option);
                            }} />
                        </div>
                    ))}

                    {selectedOption !== '' && !isComplete && (
                        <button className="bg-pink hover:bg-pink-hovered text-white text-sm w-full py-3 px-4 font-bold rounded-md mt-6" onClick={handleSubmit}>
                            Cek Jawaban
                        </button>
                    )}
                </div>
            </div>

            <Fireworks onInit={initConfetti} className="pointer-events-none fixed size-full top-0 left-0 z-20"/>
            <Dialog open={showPointDialog} type="selesai_game" handleClose={() => setShowPointDialog(false)} score={point}/>
        </div>
    )
}