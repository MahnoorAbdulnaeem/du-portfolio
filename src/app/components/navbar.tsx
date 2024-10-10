import Image from 'next/image'
import Link from 'next/link'
import react from 'react'
import { FaBeer } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-pink-100 sticky top-0 z-50">
      <header className="text-pink-600 body-font xs:bg-white sm:bg-white md:bg-pink-100 lg:bg-pink-100">
        <div className="container mx-auto flex flex-wrap p-5 flex-row items-center justify-between">

          {/* Logo - Left aligned for larger screens */}
          <a className="hidden sm:flex title-font font-medium items-center text-pink-600 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/pic/Dua-designstyle-love-heart-m.png")}
              alt="duanoor"
              width={100}
              height={100}
              className="w-[50px]"
            />
          </a>

          {/* Desktop Navigation - Only visible on medium and larger screens */}
          <nav className="hidden sm:flex sm:ml-auto text-base font-medium items-center justify-center space-x-10">
            <Link href={"/"} className="hover:text-pink-500">Home</Link>
            <Link href={"#about"} className="hover:text-pink-500">About</Link>
            <Link href={"#skills"} className="hover:text-pink-500">Skills</Link>
            <Link href={"#Project"} className="hover:text-pink-500">Projects</Link>
            <Link href={"#Contact"} className="hover:text-pink-500">Contact</Link>
          </nav>

          {/* Mobile version with centered logo and menu icon on left */}
          <div className="flex sm:hidden items-center justify-between w-full">
            {/* Centered Image for Mobile */}
            <div className="flex justify-center w-full">
              <a className="flex title-font font-medium items-center text-pink-600">
                <Image
                  src={require("../../../public/assets/pic/Dua-designstyle-love-heart-m.png")}
                  alt="duanoor"
                  width={100}
                  height={100}
                  className="w-[50px]"
                />
              </a>
            </div>

            {/* Menu icon aligned to the left on mobile */}
            <div className="absolute left-4 flex items-center justify-start">
              <Sheet>
                <SheetTrigger>
                  <Menu className="w-8 h-8 text-pink-600" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      <div className="flex flex-col gap-4 mt-4">
                        <Link href="/" passHref>
                          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                            Home
                          </button>
                        </Link>
                        <Link href="#about" passHref>
                          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                            About
                          </button>
                        </Link>
                        <Link href="#skills" passHref>
                          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                            Skills
                          </button>
                        </Link>
                        <Link href="#Project" passHref>
                          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                            Projects
                          </button>
                        </Link>
                        <Link href="#Contact" passHref>
                          <button className="w-full px-4 py-2 text-lg font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600">
                            Contact
                          </button>
                        </Link>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;