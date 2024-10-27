import { Container } from "./Container";

interface BodyProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Body({ className = '', children }: BodyProps) {
    return (
        <section className={`${className} flex grow bg-soft-cream`}>
            <Container className="grid grid-cols-12 gap-x-6 justify-center md:px-16 lg:px-20 py-8 lg:py-16">
                {children}
            </Container>
        </section>
    )
}