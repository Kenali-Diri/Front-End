interface Game {
    question: string,
    answer: string,
    image?: string,
    point: number,
    onComplete(): void
}