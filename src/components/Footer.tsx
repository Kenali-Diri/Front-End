import { Container } from "./core/Container"

export function Footer() {
    return (
        <footer className="bg-blue z-10">
            <Container className="py-4 lg:py-6 text-white text-xs lg:text-sm">
                <p>Copyright &copy; 2024 Kenali.Diri</p>
            </Container>
        </footer>
    )
}