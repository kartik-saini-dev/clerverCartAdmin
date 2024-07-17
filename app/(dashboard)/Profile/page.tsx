import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { currentUser } from '@clerk/nextjs/server';
import {
  Instagram,
  Facebook,
  Linkedin ,
  Github,
  Twitter
} from "lucide-react";
export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const Profile = async () => {
  
  const user = await currentUser();
  

  return (
    <div className="mx-auto max-w-5xl p-4">
      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-64 md:h-96">
          <Image
            src={"/images/cover/cover-01.png"}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
            layout="fill"
            priority
          />
          <div className="absolute bottom-4 right-4 z-10">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-opacity-80"
            >
              <input
                type="file"
                name="cover"
                id="cover"
                className="sr-only"
              />
              <span>Edit</span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-16 h-32 w-32 max-w-32 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <Image
                src={"/images/user/user-06.png"}
                width={160}
                height={160}
                className="rounded-full"
                alt="profile"
              />
              <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <input
                  type="file"
                  name="profile"
                  id="profile"
                  className="sr-only"
                />
                <span>Edit</span>
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
           {user?.firstName}
            </h3>
            <p className="font-medium">UI/UX Designer</p>
            <div className="mx-auto mb-5.5 mt-4.5 grid max-w-2xl grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  259
                </span>
                <span className="text-sm">Products</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  129
                </span>
                <span className="text-sm">Collections</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4 xsm:flex-row">
                <span className="font-semibold text-black dark:text-white">
                  2K
                </span>
                <span className="text-sm">Orders</span>
              </div>
            </div>

            <div className="mx-auto max-w-2xl">
              <h4 className="font-semibold text-black dark:text-white">
                About Me
              </h4>
              <p className="mt-4.5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque posuere fermentum urna, eu condimentum mauris
                tempus ut. Donec fermentum blandit aliquet. Etiam dictum
                dapibus ultricies. Sed vel aliquet libero. Nunc a augue
                fermentum, pharetra ligula sed, aliquam lacus.
              </p>
            </div>

            <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium text-black dark:text-white">
                Follow me on
              </h4>
              <div className="flex items-center justify-center gap-3.5">
                <Link href="#" className="hover:text-primary" aria-label="twitter">


                  <Twitter />
                </Link>
                <Link href="#" className="hover:text-primary" aria-label="facebook">
                  <Facebook />
                </Link>
                <Link href="#" className="hover:text-primary" aria-label="linkedin">
                  <Linkedin />
                </Link>
                <Link href="#" className="hover:text-primary" aria-label="instagram">
                  <Instagram />

                </Link>
                <Link href="#" className="hover:text-primary" aria-label="github">
                  <Github />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
