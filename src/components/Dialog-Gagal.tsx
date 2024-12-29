import Image from 'next/image';
import Link from 'next/link';

interface DialogProps {
    open: boolean;
    benar: number;
    total_soal: number;
    onClose: () => void;
}

const Dialog = ({ open, benar, total_soal, onClose }: DialogProps) => {
    if (open) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
                <div className="w-[382px] h-[450px]  rounded-lg bg-white flex flex-col justify-top items-center">
                    <div className="p-2 rounded-t-lg bg-gradient-to-r from-[#435BC0] to-[#F6666F] w-[100%] "></div>

                    <div className="flex flex-col justify-center items-center pt-6">
                        <div>
                            <Image
                                src="/assets/cross.png"
                                width={100}
                                height={100}
                                alt="check image"
                            />
                        </div>

                        <div className="flex flex-col justify-center items-center pt-8">
                            <h2 className="text-3xl text-pink font-bold">
                                Yah Gagal!
                            </h2>
                            <p className="text-center w-[250px]">
                                Kamu cuman benar{' '}
                                <span className="text-pink font-bold">
                                    {benar} / {total_soal}
                                </span>
                                . Kayaknya kamu perlu belajar lagi deh!
                            </p>
                        </div>

                        <div className="pt-20">
                            <Link href="/">
                                <div
                                    className="bg-[#435BC0] w-[318px] h-[60px] flex justify-center items-center rounded-md font-bold text-white text-xl"
                                    onClick={onClose}
                                >
                                    Belajar Lagi!
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Dialog;
