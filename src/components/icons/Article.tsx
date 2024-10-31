import { IconProps } from "./types";

export function Article({ className = '' }: IconProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={`${className} size-4 lg:size-6`} viewBox="0 -960 960 960">
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm80-160h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Z"/>
        </svg>
    )
}