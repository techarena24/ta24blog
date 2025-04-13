import AdBanner from '@/app/components/AdBanner'
import BigAdBanner from '@/app/components/BigAdBanner'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className=' flex flex-col'>
      <AdBanner />
      <h1 className=' font-semibold text-2xl mt-8'>
        Contact Us
      </h1>

      <div className=' space-y-6 mt-8'>
        <div className=' flex flex-col gap-5'>
          <p>
            Tech Arena24 is always here to help you with whatever you need. 
            You can use this contact us page to get in touch with members of our team. 
            Whatever you need, our team members are ready to help you.
          </p>
          <p>
            Just fill out the simple form below by providing some basic details about yourself to enable us better respond to you. 
            Once the form below is filled and submitted, 
            a representative from Tech Arena24 will get in touch with you within the hour and respond to your query.
          </p>
          <p>
            For a list of all the services we offer, you can refer to our <a href="/about" className=' text-blue-600'>ABOUT US</a> page to get to know us better. 
            For inquiries about the best smartphones, you can check the Best Phones Category. 
            You can also check our <a href="deals" className=' text-blue-600'>Best Phone Deals</a> category to get the latest discounts and coupon codes.
          </p>
          <p>
            We hope to hear from you soon.
          </p>
        </div>
        <div>
          <form action="" className=' flex flex-col gap-4'>
            <div className=' flex flex-col'>
              <label htmlFor='name' className=' font-bold text-base'>Name:</label>
              <input id='name' name='name' autoComplete='name' type="text" className=' border border-gray-400 p-2 w-full md:w-1/2' required />
            </div>
            <div className=' flex flex-col'>
              <label htmlFor='email' className=' font-bold text-base'>Email:</label>
              <input id='email' name='email' autoComplete='email' type="email" className=' border border-gray-400 p-2 w-full md:w-1/2' required />
            </div>
            <div className=' flex flex-col'>
              <label htmlFor='message' className=' font-bold text-base'>Message:</label>
              <textarea id='message' name='message' autoComplete='off' type="text" className=' border border-gray-400 p-2 w-full min-h-[200px]' required />
            </div>
            <button type='submit' className=' bg-primary py-2 text-white hover:bg-blue-700 rounded-md'>
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className=' block space-y-8 md:grid md:grid-cols-2 md:gap-8 mt-16'>
        <div className=' flex flex-col items-center'>
          <h2 className=' font-semibold text-2xl mb-3'>LOCATE US</h2>
          <div className=' flex flex-col items-center'>
            <Image 
              src={"/images/logoTa24.jpeg"}
              alt="Tech Arena24 Logo"
              width={100}
              height={75}
              priority
              className=' h-40 w-full border border-primary mb-10'
            />
            <div className=' flex flex-col items-center'>
              <p className=' font-bold text-[22px] mb-2'>Call or Whatsapp Number</p>
              <p className=' font-medium text-[20px]'>+449785899509</p>
              <p className=' font-medium text-[20px]'>+449785899509</p>
            </div>
          </div>
        </div>

        <div className=' flex flex-col items-center'>
          <h2 className=' font-semibold text-2xl mb-3'>OUR ADDRESS</h2>
          <div className=' h-[400px] w-full'>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2485.8037792613936!2d-0.01678150930862618!3d51.4617589990992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876026fe2a2ea91%3A0x8247f83981bc1433!2sLewisham%20Shopping%20Centre!5e0!3m2!1sen!2suk!4v1743955125285!5m2!1sen!2suk" 
              style={{ border: 0 }}
              allowFullScreen="" 
              loading="lazy"
              title="Tech Arena24 Location"
              referrerPolicy="no-referrer-when-downgrade"
              className=' w-full h-full'
            />
          </div>
        </div>
      </div>
      <div className=' mt-10'>
        <BigAdBanner />
      </div>
    </div>
  )
}

export default page