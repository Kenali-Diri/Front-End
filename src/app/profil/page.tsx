'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Dialog from '@/components/Dialog';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Section } from '@/components/core/Section';
import { ChevronLeft } from '@/components/icons';
import { Gender, UserInformation } from '@/interfaces/UserInformation';
import { useRouter } from 'next/navigation';

export default function Profil() {
  const router = useRouter();

  const [open, setOpen] = useState<boolean>(false);
  const [badgeData, setBadgeData] = useState<{
    alt: string;
    src: string;
    name: string;
  }>({ alt: '', src: '', name: '' });
  const [showMore, setShowMore] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);

  const [userInfo, setUserInfo] = useState<UserInformation>({
    email: '',
    gender: '',
    id: 1,
    name: '',
    profileImage: '',
    score: 0,
    badge: [],
    userProgress: {
        completeAt: '',
        lastMainGameQuizID: 0,
        lastMiniGameID: 0,
    }
  });

  const handleBadgeClick = (alt: string, src: string, name: string) => {
    setBadgeData({ alt, src, name });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    router.push('/');
  }

  const handleEditProfile = () => {
    if(edit) {
      // Fetch API edit profile
      const payload = {
        email: userInfo.email,
        gender: userInfo.gender
      }

      console.log(payload);
    }

    setEdit(!edit);
  }

  const totalBadgesToShow = 14;

  useEffect(() => {
    AOS.init();
    fetchData();
  }, []);

  const fetchData = async () => {
    const token = localStorage.getItem('jwt');
    if (token) {
      try {
        // Send JWT to API route to fetch user data
        const response = await fetch('/api/userInformation', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userInfo: UserInformation = await response.json();
          if(userInfo.gender === '') {
            userInfo.gender = 'Male';
          }

          setUserInfo(userInfo);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  return (
    <>
      <Navbar />
      <Section className="bg-soft-cream py-20 overflow-hidden relative">
        <div className="col-span-12 ">
          <div className=" grid grid-cols-12 gap-6">
            <Link
              href={`/`}
              className="flex items-center size-fit gap-1 text-sm lg:text-base hover:underline text-dark-slate"
              data-aos="fade"
            >
              <ChevronLeft className="fill-dark-slate" />
              <span>Kembali</span>
            </Link>
            <div className="col-span-12">
              <h2
                className="text-4xl leading-[1.1] lg:text-5xl lg:leading-[1.1] font-bold bg-gradient-to-r from-blue to-pink bg-clip-text text-transparent h-16 w-fit"
                data-aos="fade"
              >
                Pengaturan Akun
              </h2>
            </div>

            <div className="col-span-12">
              <div className="grid grid-rows-1 md:grid-rows-0 grid-cols-12 gap-6">
                {/* left side */}
                <div className="col-span-12 md:col-span-9 flex flex-col gap-6">
                  <div
                    className="flex flex-col gap-4 bg-white p-6 rounded-lg"
                    data-aos="fade"
                  >
                    <div>
                      <p className="font-bold text-dark-slate text-2xl">
                        Detail Profil
                      </p>
                    </div>

                    <div className="flex">
                      <div className="flex items-center justify-center gap-4">
                        <Image
                          src={userInfo && userInfo.profileImage ? userInfo.profileImage : '/assets/hello.png'}
                          width={100}
                          height={510}
                          alt="foto profil"
                          className="rounded-full"
                        />
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold text-dark-slate text-4xl">
                            { userInfo?.name }
                          </h2>
                          <button
                            className="bg-blue py-2 text-white rounded-md hover:bg-blue-hovered px-6"
                            onClick={handleEditProfile}
                          >
                            {edit
                              ? 'Save Profil'
                              : 'Edit Profil'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex flex-col w-[50%]">
                        <p className="font-bold">
                          Email
                        </p>
                        <input
                          type="email"
                          value={userInfo?.email}
                          className={`border border-gray-300 rounded p-2 ${!edit ? 'opacity-40' : 'opacity-100'}`}
                          disabled={!edit}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                            setUserInfo(prev => ({
                              ...prev,
                              email: e.target.value
                            }))}
                        />
                      </div>
                      <div className="flex flex-col w-[50%]">
                        <p className="font-bold">
                          Gender
                        </p>
                        <select
                          className={`border border-gray-300 rounded p-2 ${!edit
                            ? 'opacity-40'
                            : 'opacity-100'
                            }`}
                          disabled={!edit}
                          value={userInfo.gender}
                          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserInfo(prev => ({
                            ...prev,
                            gender: e.target.value as Gender
                          }))}
                        >
                          <option value="Male">
                            Laki-Laki
                          </option>
                          <option value="Female">
                            Perempuan
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div
                      className="flex flex-col gap-4 bg-white p-6 rounded-lg"
                      data-aos="fade"
                      data-aos-anchor-placement="top-bottom"
                    >
                      <h2 className="font-bold text-dark-slate text-3xl">
                        Badge
                      </h2>

                      <div className='min-h-64 grid grid-cols-7 gap-2'>
                        {userInfo.badge.map(badge => (
                          <Image src={badge.image} alt={badge.name} key={badge.id} width={800} height={800} className='w-full h-24 aspect-square object-contain drop-shadow-sm cursor-pointer' onClick={() => handleBadgeClick(badge.name, badge.image, badge.name)}/>
                        ))}
                      </div>

                      {userInfo.badge.length >=
                        totalBadgesToShow && (
                          <button
                            className="mt-4 text-blue font-bold"
                            onClick={() =>
                              setShowMore(
                                !showMore,
                              )
                            }
                          >
                            {showMore
                              ? 'Show Less'
                              : 'Show More'}
                          </button>
                        )}
                    </div>
                  </div>

                  <button
                    className="text-white text-center bg-pink py-2 px-16 hover:bg-pink-hovered w-fit rounded-md hidden md:inline-block"
                    data-aos="fade"
                    data-aos-anchor-placement="top-bottom"
                    onClick={handleLogout}
                  >
                    Keluar
                  </button>
                </div>
                {/* right side */}
                <div className="col-span-12 md:col-span-3 flex flex-col gap-6">
                  <div
                    className="bg-white px-4 py-8 flex flex-col justify-center items-center rounded-md relative"
                    data-aos="fade"
                  >
                    <h2
                      className="text-4xl md:text-lg lg:text-4xl text-center text-dark-slate font-bold"
                      data-aos="fade"
                    >
                      Total Point
                    </h2>
                    <h1
                      className="text-5xl md:text-6xl lg:text-8xl text-blue font-bold mt-2"
                      data-aos="fade"
                    >
                      {userInfo.score}
                    </h1>
                    <Image
                      src="/assets/crown.png"
                      width={200}
                      height={100}
                      alt="mahkota"
                      className="hidden md:inline absolute right-[10px] top-[-5px] !translate-x-1/2 !-translate-y-1/2"
                      data-aos="fade"
                    />
                  </div>

                  <div
                    className="bg-white px-6 py-8 rounded-md flex flex-col gap-8"
                    data-aos="fade"
                    data-aos-anchor-placement="top-bottom"
                  >
                    <div>
                      <h2 className="text-xl lg:text-3xl text-dark-slate font-bold">
                        Ganti Password
                      </h2>
                      <p className="lg:text-sm text-medium-slate mt-2">
                        Langkah ini akan mengatur ulang
                        kata sandi Anda, memastikan
                        hanya yang baru yang akan
                        berfungsi.
                      </p>
                    </div>
                    <button className="p-2 bg-blue text-white rounded-md hover:bg-blue-hovered">
                      Ganti Password
                    </button>
                  </div>

                  <button
                    className="text-white text-center bg-pink rounded-md p-2 md:hidden"
                    data-aos="fade"
                    data-aos-anchor-placement="top-bottom"
                    onClick={handleLogout}
                  >
                    Keluar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:grid lg:col-span-5">
          <Image
            src="/assets/profil.png"
            width={350}
            height={400}
            className="absolute right-0 mt-[-200px] z-10"
            alt="Gambar Hiasan"
            data-aos='fade'
          />
        </div>
      </Section>
      <Footer />

      <Dialog
        open={open}
        handleClose={handleClose}
        type="badge"
        imgName={badgeData.alt}
        src={badgeData.src}
        badgeContent={badgeData.name}
      />
    </>
  );
}
