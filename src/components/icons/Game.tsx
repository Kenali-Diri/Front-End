import { IconProps } from "./types";

export function Game({ className = '' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} size-4 lg:size-6`} viewBox="0 0 24 24">
            <path d='M17 4c1.106 0 1.955.843 2.584 1.75l.213.321.195.32c.062.104.121.208.178.308.787 1.407 1.472 3.244 1.925 5.059.45 1.801.699 3.682.54 5.161C22.475 18.404 21.71 20 20 20c-1.534 0-2.743-.82-3.725-1.621l-1.11-.931C14.242 16.692 13.232 16 12 16s-2.243.692-3.164 1.448l-1.11.93C6.742 19.18 5.533 20 4 20c-1.711 0-2.476-1.596-2.635-3.081-.158-1.48.09-3.36.54-5.161.453-1.815 1.138-3.652 1.925-5.059l.178-.309.195-.319.213-.321C5.045 4.843 5.894 4 7 4c.51 0 1.017.124 1.515.27l.593.182c.098.03.195.059.292.086.865.248 1.75.462 2.6.462.85 0 1.735-.214 2.6-.462l.885-.267C15.983 4.124 16.49 4 17 4M8.5 8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5m7 0a1 1 0 0 0-1 1v.5H14a1 1 0 1 0 0 2h.5v.5a1 1 0 1 0 2 0v-.5h.5a1 1 0 1 0 0-2h-.5V9a1 1 0 0 0-1-1m-7 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1'/>
        </svg>
    )
}