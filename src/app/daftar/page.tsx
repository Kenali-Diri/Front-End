import Image from 'next/image';
import Link from 'next/link';

import { Section } from '@/components/core/Section';
import { TextField } from '@/components/core/TextField';
import { Footer } from '@/components/Footer';
import { Envelope, Lock } from '@/components/icons';
import { Navbar } from '@/components/Navbar';

export default function Login() {
    return (
        <>
            <Navbar />
            <Section className="relative flex items-center bg-soft-cream py-8 lg:py-16">
                <form className="col-span-12 lg:col-span-7 flex flex-col gap-y-6 lg:gap-y-12 bg-white rounded-md p-8 lg:p-12 h-fit">
                    <div className="flex flex-col gap-y-1 lg:gap-y-2">
                        <p className="text-lg lg:text-xl font-bold text-blue">
                            Kenali.Diri
                        </p>
                        <h3 className="text-2xl lg:text-4xl font-bold text-pink">
                            Hai, teman-teman!
                        </h3>
                    </div>
                    <div className="flex flex-col gap-y-4 lg:gap-y-6">
                        <TextField
                            name="email"
                            type="email"
                            icon={<Envelope className="fill-dark-slate" />}
                            placeholder="mail@gmail.com"
                        />
                        <TextField
                            name="sandi"
                            type="password"
                            icon={<Lock className="fill-dark-slate" />}
                            placeholder="kata sandi"
                        />
                        <TextField
                            name="konfirmasi sandi"
                            type="password"
                            icon={<Lock className="fill-dark-slate" />}
                            placeholder="konfirmasi kata sandi"
                        />
                    </div>
                    <div className="flex flex-col items-center lg:items-end gap-y-6">
                        <button
                            className="py-3 lg:py-4 px-6 lg:px-12 bg-blue hover:bg-blue-hovered text-white text-xs lg:text-sm font-semibold lg:font-bold rounded-md w-full lg:w-fit"
                            type="submit"
                        >
                            Daftar
                        </button>
                        <p className="text-xs lg:text-sm">
                            <span>Sudah punya akun? </span>
                            <Link
                                href="/login"
                                className="text-blue font-bold hover:underline"
                            >
                                Masuk
                            </Link>
                        </p>
                    </div>
                </form>
                <div className="hidden lg:grid lg:col-span-5">
                    <Image
                        src="/assets/happy.png"
                        width={512}
                        height={512}
                        className="absolute mt-[50px] z-10"
                        alt="Happy Image"
                    />
                </div>
            </Section>
            <Footer />
        </>
    );
}