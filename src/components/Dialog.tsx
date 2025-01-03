import Image from 'next/image';
import Link from 'next/link';

type DialogType = 'selesai_level' | 'badge' | 'selesai_game' | 'error_message';

interface DialogProps {
    type: DialogType;
    open: boolean;
    handleClose: () => void;
    score?: number;
    src?: string;
    imgName?: string;
    message?: string;
    badgeContent?: string;
}

const Dialog = ({
    type,
    open,
    handleClose,
    score,
    src,
    imgName,
    message,
    badgeContent
}: DialogProps) => {
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
            <div
                className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
                onClick={() => handleClose()}
            >
                <div className="bg-gradient-to-r from-[#435BC0] to-[#F6666F] rounded-md p-2">
                    <div className="min-w-80 min-h-80 bg-white rounded-md flex flex-col justify-center items-center gap-4 w-full h-full p-0">
                        <Image
                            src={src || ''}
                            width={800}
                            height={800}
                            alt={imgName || ''}
                            className='size-1/2 object-contain'
                        />

                        <div>
                            <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-[#435BC0] to-[#F6666F] bg-clip-text text-transparent max-w-72">
                                {badgeContent}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else if (type === 'selesai_game' && open) {
        return (
            <div className="fixed top-8 p-4 bg-white text-sm md:text-base rounded-md shadow-md shadow-black/20 left-1/2 -translate-x-1/2 animate-fade-in-out w-10/12 sm:w-fit">
                Hore! Kamu dapat <span className="font-bold">{score}</span>{' '}
                poin!
                <div
                    className="absolute left-0 bottom-0 bg-blue w-full h-1 rounded-b-md animate-loading-progress-bar"
                    onAnimationEnd={() => handleClose()}
                ></div>
            </div>
        );
    } else if (type === 'error_message' && open) {
        return (
            <div className="fixed top-8 p-4 bg-white text-sm md:text-base rounded-md shadow-md shadow-black/20 left-1/2 -translate-x-1/2 animate-fade-in-out w-10/12 sm:w-fit text-red-500 font-medium">
                {message}
                <div
                    className="absolute left-0 bottom-0 bg-blue w-full h-1 rounded-b-md animate-loading-progress-bar"
                    onAnimationEnd={() => handleClose()}
                ></div>
            </div>
        );
    } else {
        return <></>;
    }
};

export default Dialog;
