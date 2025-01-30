import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Section({ className = '', id = '', children }: SectionProps) {
    return (
        <section className={`${className} flex grow`} id={id}>
            <Container className="grid grid-cols-12 gap-0 lg:gap-6 justify-center md:px-16 lg:px-20">
                {children}
            </Container>
        </section>
    )
}