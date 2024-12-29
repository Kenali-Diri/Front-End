'use client';

import Image from 'next/image';
import Link from 'next/link';

import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/core/Section';
import { TextField } from '@/components/core/TextField';
import { Envelope, Lock } from '@/components/icons';

import AOS from 'aos';
import 'aos/dist/aos.css';
import useStore from '../../../store/UseStore';

export default function Login() {
    useEffect(() => {
        AOS.init();
    });

    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    interface DecodedToken {
        sub: string;
        jti: string;
        [key: string]: string | number; // Allows for additional claims like nameidentifier
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { setUserId } = useStore.getState();

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message ||
                        'Login failed. Please check your credentials.',
                );
            }
            const { message, token } = await response.json();

            console.log('message: ', message);

            // Decode the JWT token to extract user information
            const decoded: DecodedToken = jwtDecode(token);

            // Access the `nameidentifier` claim
            const userId =
                decoded[
                    'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
                ];

            console.log('User ID:', userId);

            setUserId(Number(userId));

            // Save the token in local storage or a context for subsequent API requests
            localStorage.setItem('jwt', token);

            // Redirect to the dashboard or another page
            router.push('/');
        } catch (err: any) {
            setError(err.message);
            console.error(err.message);
        }
    };

    return (
        <>
            <Navbar />
            <Section className="relative flex items-center bg-soft-cream py-8 lg:py-16">
                <div className="hidden lg:grid lg:col-span-5">
                    <Image
                        src="/assets/hello.png"
                        width={512}
                        height={512}
                        className="absolute 2xl:relative size-[100px] lg:size-[440px] 2xl:size-[512px] left-0 top-[calc(50%-220px)]"
                        alt="Hello Image"
                        data-aos="fade-right"
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="col-span-12 lg:col-span-7 flex flex-col gap-y-6 lg:gap-y-12 bg-white rounded-md p-8 lg:p-12 h-fit"
                    data-aos="fade"
                    data-aos-delay="200"
                >
                    <div className="flex flex-col gap-y-1 lg:gap-y-2">
                        <p className="text-lg lg:text-xl font-bold text-blue">
                            Kenali.Diri
                        </p>
                        <h3 className="text-2xl lg:text-4xl font-bold text-pink">
                            Halo, kembali lagi.
                        </h3>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:gap-y-6">
                        <TextField
                            name="email"
                            type="email"
                            icon={<Envelope className="fill-dark-slate" />}
                            placeholder="mail@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            name="password"
                            type="password"
                            icon={<Lock className="fill-dark-slate" />}
                            placeholder="kata sandi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Link
                            href="/lupa-sandi"
                            className="self-end hover:underline text-dark-slate text-xs lg:text-base font-bold"
                        >
                            Lupa kata sandi?
                        </Link>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="flex flex-col items-center lg:items-end gap-y-6">
                        <button
                            className="py-3 lg:py-4 px-6 lg:px-12 bg-blue hover:bg-blue-hovered text-white text-xs lg:text-sm font-semibold lg:font-bold rounded-md w-full lg:w-fit"
                            type="submit"
                        >
                            Masuk
                        </button>
                        <p className="text-xs lg:text-sm">
                            <span>Belum punya akun? </span>
                            <Link
                                href="/daftar"
                                className="text-blue font-bold hover:underline"
                            >
                                Daftar Sekarang
                            </Link>
                        </p>
                    </div>
                </form>
            </Section>
            <Footer />
        </>
    );
}
