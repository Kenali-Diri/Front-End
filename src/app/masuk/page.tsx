'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/components/core/Section';
import { TextField } from '@/components/core/TextField';
import { Footer } from '@/components/Footer';
import { Envelope, Lock } from '@/components/icons';
import { Navbar } from '@/components/Navbar';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Dialog from '@/components/Dialog';

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Debugging logs to ensure email and password are set
        console.log('Email:', email);
        console.log('Password:', password);

        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log(response.status);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.message ||
                        'Login failed. Please check your credentials.',
                );
            }

            // Redirect to dashboard after successful login
            router.push('/');
        } catch (err: any) {
            setError(err.message);
            console.log(err.message);
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
                        className="absolute 2xl:relative size-[100px] lg:size-[440px] 2xl:size-[512px] left-0 top-1/2 -translate-y-1/2"
                        alt="Hello Image"
                    />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="col-span-12 lg:col-span-7 flex flex-col gap-y-6 lg:gap-y-12 bg-white rounded-md p-8 lg:p-12 h-fit"
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
