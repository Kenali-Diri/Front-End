import { QuizProps } from "@/components/games/Quiz";
import { ScrambledWordProps } from "@/components/games/ScrambledWord";
import { ShortAnswerProps } from "@/components/games/ShortAnswer";

type MaterialItemType = 'with-video' | 'with-image' | 'with-illustration' | 'game';
type MaterialTextType = 'list' | 'text';
type GameType = 'quiz' | 'scrambled-word' | 'short-answer';
type GamePropsType = QuizProps | ScrambledWordProps | ShortAnswerProps;

export interface MaterialItem {
    type: MaterialItemType,
    gameType?: GameType,
    gameProps?: GamePropsType,
    text?: string,
    textType?: MaterialTextType,
    image?: string,
    video?: string,
}