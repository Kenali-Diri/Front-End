import { IconProps } from "./types";

export function Crown({ className = '', size = 'size-4 lg:size-6' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${size}`} viewBox="0 0 24 24">
            <path d="m21 2-5 5-4-5-4 5-5-5v13h18zM5 21h14a2 2 0 0 0 2-2v-2H3v2a2 2 0 0 0 2 2z"></path>
        </svg>
    )
}