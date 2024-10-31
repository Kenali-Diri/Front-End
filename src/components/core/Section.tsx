import { Container } from "./Container";

interface BodyProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Section({ className = '', children }: BodyProps) {
    return (
        <section className={`${className} flex grow`}>
            <Container className="grid grid-cols-12 gap-x-6 justify-center md:px-16 lg:px-20">
                {children}
            </Container>
        </section>
    )
}