import { IconProps } from "./types";

export function ChevronDown({ className = '', size = 'size-4 lg:size-6' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${size}`} viewBox="0 0 24 24">
            <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
    )
}