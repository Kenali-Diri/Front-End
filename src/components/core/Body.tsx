import { Container } from "./Container";

interface BodyProps extends React.HTMLAttributes<HTMLDivElement>{}

export function Body({className, children}: BodyProps) {
    return (
        <section className={`${className} flex grow bg-soft-cream`}>
            <Container className="grid grid-cols-12 gap-x-6 justify-center px-20 py-16">
                {children}
            </Container>
        </section>
    )
}