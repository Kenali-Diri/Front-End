'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { TConductorInstance } from "react-canvas-confetti/dist/types";
import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Game } from "@/interfaces/Game";

import { Diamond } from "../icons";
import { Droppable } from "../core/Droppable";
import { Draggable } from "../core/Draggable";
import Dialog from "../Dialog";

export interface ScrambledWordProps extends Game {
    scrambledWord: string,
    image: string
}

interface Letter {
    elementID: string,
    letter: string
}

export function ScrambledWord({ question, answer, scrambledWord, image, point, isCompletedByUser, onComplete }: ScrambledWordProps) {
    const scrambledWords: Array<Letter> = scrambledWord.split('').reduce<Array<Letter>>((prev, letter, index) => [
        ...prev, {
            elementID: `letter-${index}`,
            letter: letter
        }], []);

    const [droppedLetterElementIDs, setDroppedLetterElementIDs] = useState<Array<string>>([...Array(scrambledWords.length).fill('')]);

    const [confettiConductor, setConfettiConductor] = useState<TConductorInstance>();
    const initConfetti = ({ conductor }: { conductor: TConductorInstance }) => {
        setConfettiConductor(conductor);
    }

    const [isWrong, setIsWrong] = useState<boolean>(false);
    const [isComplete, setIsComplete] = useState<boolean>(false);
    const [showPointDialog, setShowPointDialog] = useState<boolean>(false);

    const handleDragEnd = (e: DragEndEvent) => {
        if(isComplete) {
            return;
        }

        let draggedLetterElementID = e.active.id.toString();

        let previousDroppedAt = droppedLetterElementIDs.findIndex(droppedLetterElementID => droppedLetterElementID === draggedLetterElementID);
        let droppedAt = 0;

        if (e.over !== null) {
            droppedAt = Number(e.over.id.toString().split('-')[e.over.id.toString().split('-').length - 1]);
        } else {
            droppedAt = droppedLetterElementIDs.findIndex(droppedLetterElementID => droppedLetterElementID === draggedLetterElementID);
            draggedLetterElementID = '';
        }

        const updatedDroppedLetterElementIDs = [...droppedLetterElementIDs];
        updatedDroppedLetterElementIDs[previousDroppedAt] = '';
        updatedDroppedLetterElementIDs[droppedAt] = draggedLetterElementID;

        setDroppedLetterElementIDs(updatedDroppedLetterElementIDs);

        const droppedLetterCombined = updatedDroppedLetterElementIDs.reduce((prev, droppedLetterElementID) => prev + (scrambledWords.find(letter => letter.elementID === droppedLetterElementID) === undefined ? '' : scrambledWords.find(letter => letter.elementID === droppedLetterElementID)?.letter), '');
        if(droppedLetterCombined.length !== answer.length) {
            return;
        }

        if(droppedLetterCombined === answer) {
            // TODO: Show completion dialog / reward dialog
            confettiConductor?.run({ speed: 3, duration: 1000 });
            setIsComplete(true);
            setShowPointDialog(true);
            onComplete();
        } else {
            setIsWrong(true);
        }
    }

    useEffect(() => {
        if(isCompletedByUser) {
            setDroppedLetterElementIDs(prev => ([
                ...answer.split('').map(letter => `letter-${scrambledWord.split('').findIndex(scrambledLetter => scrambledLetter === letter)}`)
            ]));
            setIsComplete(true);
        }
    }, []);

    return (
        <div className={`flex flex-col md:flex-row items-center gap-y-12 md:gap-x-12 md:gap-y-0 ${isWrong ? 'animate-shake' : ''}`} onAnimationEnd={() => setIsWrong(false)}>
            <div className="flex flex-none relative items-center justify-center bg-dark-slate p-10 w-fit h-fit rounded-lg">
                <Image src={image} alt="Image" width={720} height={720} className="size-16 md:size-28 aspect-square drop-shadow-md" />

                <span className="absolute bg-blue p-3 flex items-center gap-x-2 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full shadow-sm">
                    <Diamond className="fill-white" size="size-5" />
                    <p className="text-sm text-white font-medium">{point}</p>
                </span>
            </div>

            <DndContext onDragEnd={handleDragEnd}>
                <div className="flex flex-col gap-y-4">
                    <h5 className="font-bold text-base text-center md:text-lg md:text-start">{question}</h5>
                    <div className="flex flex-wrap justify-center md:justify-start gap-2">
                        {scrambledWords.map((letter, index) => (
                            <Droppable key={index} id={`scrambled-letter-box-${index}`} className="size-10 md:size-11 lg:size-[3.25rem] flex items-center justify-center border-2 border-dashed border-dark-slate rounded-md">
                                {droppedLetterElementIDs.length > 0 && droppedLetterElementIDs[index] !== '' && (
                                    <Draggable id={droppedLetterElementIDs[index]} className="flex items-center justify-center size-8 md:size-9 lg:size-10 border-2 bg-white hover:bg-light-slate/30 border-dark-slate rounded-md font-bold text-center transition-colors text-sm md:text-base">
                                        {scrambledWords.find(letter => letter.elementID === droppedLetterElementIDs[index])?.letter}
                                    </Draggable>
                                )}
                            </Droppable>
                        ))}
                    </div>
                    <div className="flex justify-center md:justify-start gap-x-2">
                        {scrambledWords.map((letter, index) => !droppedLetterElementIDs.find(droppedLetterElementID => letter.elementID == droppedLetterElementID) && (
                            <Draggable key={index} id={letter.elementID} className="flex items-center justify-center size-8 md:size-9 lg:size-10 border-2 bg-white hover:bg-light-slate/30 border-dark-slate rounded-md font-bold text-center transition-colors text-sm md:text-base">
                                {letter.letter}
                            </Draggable>
                        ))}
                    </div>
                </div>
            </DndContext>

            <Fireworks onInit={initConfetti} className="pointer-events-none fixed size-full top-0 left-0 z-20"/>
            <Dialog open={showPointDialog} type="selesai_game" handleClose={() => setShowPointDialog(false)} score={point}/>
        </div>
    )
}