interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Container({ className = '', children }: ContainerProps) {
    return (
        <div className={`container mx-auto ${className}`}>
            {children}
        </div>
    )
}