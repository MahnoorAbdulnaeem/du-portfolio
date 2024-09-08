import Image from 'next/image'
import Link from 'next/link'
import react from 'react'
import { FaBeer } from 'react-icons/fa';
import { IoMdDownload } from "react-icons/io";
const Navbar =() =>{
return(
    <div className='bg-pink-100 z-50 sticky top-0'>
<header className="text-pink-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image src={require("../../../public/assets/pic/Dua-designstyle-love-heart-m.png")}  alt="duanoor" width={100} height={100} className='w-[50px]'/>
      <span className="ml-3 text-xl">DuaNoor</span>
    </a>
    <nav className="md:ml-auto md:mr-end items-end text-base justify-end font-medium">
      <Link href={"/"} className='mr-10 hover:text-pink-500'>Home</Link>
      <Link href={"#about"} className='mr-10 hover:text-pink-500'>About</Link>
      <Link href={"#skills"} className='mr-10 hover:text-pink-500'>Skills</Link>
      <Link href={"#Project"} className='mr-10 hover:text-pink-500'>Projects</Link>
      <Link href={"#Contact"} className='mr-10  hover:text-pink-500'>Contact</Link>
    </nav>
  </div>
</header>
    </div>
)
}
export default Navbar