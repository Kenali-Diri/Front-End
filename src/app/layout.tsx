import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'KenaliDiri - Bangun masa depan yang cerah',
    description: 'Belajar seksualitas dengan cara yang asyik, tanpa rasa malu, dan pastinya #AntiTabuTabuClub',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${montserrat.className} flex flex-col min-h-dvh antialiased scroll-smooth text-dark-slate`}
            >
                {children}
            </body>
        </html>
    );
}
