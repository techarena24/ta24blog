import { Facebook, Instagram, Twitter, X, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  return (
    <footer className=' w-full max-w-6xl mx-auto bg-primary mt-18'>
       <div className=' flex flex-col gap-10 sm:flex-row py-8 md:py-16 mx-6 lg:mx-20 justify-between sm:gap-0'>
            <div className=' flex flex-col items-center sm:block sm:items-start'>
               <Link href={"/"}>
                    <Image 
                         src={"/images/logoTA24.jpeg"}
                         alt={"Logo"}
                         width={150}
                         height={100}
                         priority
                         className=' mb-5'
                    />
               </Link>
               <p className=' text-xs font-medium mb-1'>
                    Your Everyday Technology News
               </p>
               <div className=' flex gap-6'>
                    <Twitter />
                    <Instagram />
                    <Facebook />
                    <Youtube />
               </div>
            </div>
            <div className=' flex flex-col space-y-6'>
                <Link className=' font-medium text-sm' href={""}>About</Link>
                <Link className=' font-medium text-sm' href={""}>News</Link>
                <Link className=' font-medium text-sm' href={""}>Contact Us</Link>
                <Link className=' font-medium text-sm' href={""}>Advertise</Link>
                <Link className=' font-medium text-sm' href={""}>Privacy Policy</Link>
            </div>
            <div className=' flex flex-col space-y-6'>
                <Link className=' font-medium text-sm' href={""}>Deals</Link>
                <Link className=' font-medium text-sm' href={""}>Reviews</Link>
                <Link className=' font-medium text-sm' href={""}>Phone Comparison</Link>
                <Link className=' font-medium text-sm' href={""}>Phone Specifications</Link>
                <Link className=' font-medium text-sm' href={""}>Promotions</Link>
            </div>
       </div>
       <div className=' flex justify-center bg-black py-2'>
            <p className=' text-white text-xs'>
                &copy; 2024 TechArena24. All rights reserved.
            </p>
       </div>
    </footer>
  )
}

export default Footer