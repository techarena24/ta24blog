import Image from 'next/image'
import React from 'react'

const Footer = () => {

  return (
    <footer>
       <div>
            <div>
               <Image 
                    src={"/images/logoTA24.jpeg"}
                    alt={"Logo"}
                    width={150}
                    height={100}
                    priority
               />
               <p className=' text-sm font-medium'>
                    Your Everyday Technology News
               </p>
            </div>
       </div>
    </footer>
  )
}

export default Footer