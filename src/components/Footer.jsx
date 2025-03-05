import React from 'react'
import { assets } from '../assets/assets'


const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/*..........Left Section........... */}
            <div >
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi saepe, omnis reprehenderit culpa voluptates labore veniam nisi! Earum, consequatur accusamus?</p>
            </div>

            {/*..........Centre Section........... */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/*..........Right Section........... */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>priscripto@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            {/*..............Copyright Text................... */}
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ Priscripto - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer