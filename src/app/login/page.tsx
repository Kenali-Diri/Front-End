import Image from "next/image";
import Link from "next/link";

import { Body } from "@/components/core/Body";
import { TextField } from "@/components/core/TextField";
import { Footer } from "@/components/Footer";
import { Envelope, Lock } from "@/components/icons";
import { Navbar } from "@/components/Navbar";

export default function Login() {
    return (
        <>
            <Navbar />
            <Body className="relative">
                <Image src="/assets/hello.png" width={512} height={512} className="absolute size-[512px] left-0" alt="Hello Image"/>
                <div className="col-span-5"></div>
                <form className="col-span-7 flex flex-col gap-y-12 bg-white rounded-md p-12">
                    <div className="flex flex-col gap-y-2">
                        <p className="text-xl font-bold text-blue">Kenali.Diri</p>
                        <h3 className="text-4xl font-bold text-pink">Halo, kembali lagi.</h3>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <TextField name="email" type="email" icon={<Envelope className="fill-dark-slate" />} placeholder="mail@gmail.com" />
                        <TextField name="password" type="password" icon={<Lock className="fill-dark-slate" />} placeholder="kata sandi" />
                        <Link href="/forgot-password" className="text-dark-slate font-bold"/>
                    </div>
                    <div className="flex flex-col items-end gap-y-6">
                        <button className="py-4 px-12 bg-blue text-white font-bold rounded-md" type="submit">Masuk</button>
                        <p className="text-sm">
                            <span>Belum punya akun? </span>
                            <Link href="/register" className="text-blue font-semibold hover:underline">Daftar Sekarang</Link>
                        </p>
                    </div>
                </form>
            </Body>
            <Footer />
        </>
    )
}