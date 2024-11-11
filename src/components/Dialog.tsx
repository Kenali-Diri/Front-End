'use client';

import Image from 'next/image';
import Link from 'next/link';

interface DialogProps {
    type: string;
    open: boolean;
    handleClose: () => void;
    score?: number;
    src?: string;
    imgName?: string;
}

const Dialog = ({ type, open, handleClose, score, src, imgName }: DialogProps) => {
    if (type === 'selesai_level' && open) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[382px] h-[450px]  rounded-lg bg-white flex flex-col justify-top items-center">
                    <div className="p-2 rounded-t-lg bg-gradient-to-r from-[#435BC0] to-[#F6666F] w-[100%]"></div>

                    <div className="flex flex-col justify-center items-center pt-6">
                        <div>
                            <Image
                                src="/assets/check.png"
                                width={100}
                                height={100}
                                alt="check image"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center pt-8">
                            <h2 className="text-3xl text-[#435BC0] font-bold">
                                Hore Selesai!
                            </h2>
                            <p className="text-center w-[250px]">
                                Kamu udah bisa lanjut ke level selanjutnya,
                                semangat ya!
                            </p>
                        </div>

                        <div className="pt-8">
                            <h2 className="text-5xl font-bold bg-gradient-to-r from-[#435BC0] to-[#F6666F] bg-clip-text text-transparent">
                                + {score} Point
                            </h2>
                        </div>

                        <div className="pt-8">
                            <Link href="/">
                                <div className="bg-[#435BC0] w-[318px] h-[60px] flex justify-center items-center rounded-md font-bold text-white text-xl">
                                    Lanjut
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (type === 'badge' && open) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[335px] h-[335px] bg-gradient-to-r from-[#435BC0] to-[#F6666F] flex justify-center items-center rounded-md">
                    <div className="w-[320px] h-[320px] bg-white rounded-md flex flex-col justify-center items-center gap-8">
                        <Image
                            src="/assets/Badge3L,Leceh,Lari,Lapor!.png"
                            width={150}
                            height={100}
                            alt="badge_img"
                        />

                        <div>
                            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#435BC0] to-[#F6666F] bg-clip-text text-transparent">
                                Badge3L, Leceh, Lari, Lapor!
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Dialog;
