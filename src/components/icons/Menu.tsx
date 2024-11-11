import { IconProps } from "./types";

export function Menu({ className = '', size = 'size-4 lg:size-6' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} ${size}`} viewBox="0 0 24 24">
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
        </svg>
    )
}