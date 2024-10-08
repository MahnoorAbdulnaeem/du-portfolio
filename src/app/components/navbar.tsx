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
          <a className="flex title-font font-medium items-center text-pink-600 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/pic/Dua-designstyle-love-heart-m.png")}
              alt="duanoor"
              width={100}
              height={100}
              className="w-[50px]"
            />
          </a>


          <nav className="hidden sm:flex sm:ml-auto text-base font-medium items-center justify-center space-x-10">
            <Link href={"/"} className="hover:text-pink-500">Home</Link>
            <Link href={"#about"} className="hover:text-pink-500">About</Link>
            <Link href={"#skills"} className="hover:text-pink-500">Skills</Link>
            <Link href={"#Project"} className="hover:text-pink-500">Projects</Link>
            <Link href={"#Contact"} className="hover:text-pink-500">Contact</Link>
          </nav>


          <div className="flex sm:hidden items-center justify-between w-full">
            {/* Image on left */}
            <div className="flex">
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

            {/* Menu icon on the right */}
            <div className="flex items-center justify-end">
              <Sheet>
                <SheetTrigger>
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                      <Link href={"/"} className="hover:text-pink-500">Home</Link>
                      <br />
                      <Link href={"#about"} className="hover:text-pink-500">About</Link>
                      <br />
                      <Link href={"#skills"} className="hover:text-pink-500">Skills</Link>
                      <br />
                      <Link href={"#Project"} className="hover:text-pink-500">Projects</Link>
                      <br />
                      <Link href={"#Contact"} className="hover:text-pink-500">Contact</Link>
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
