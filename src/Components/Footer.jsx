import React from 'react'
import {Link} from "react-router-dom"
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";



const Footer = () => {

  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
    <div className=' container mx-auto grid grid-cols-1 md:grid-cols-3  gap-8'>
      <div>
        <h3>e-Shop</h3>
        <p>
          Your one-stem for all your needs. Shop with use and experience the best online 
          shopping experience.
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li className='flex flex-col'>
            <Link>Home</Link>
            <Link>Shop</Link>
            <Link>Contact</Link>
            <Link>About</Link>
         
          </li>
        </ul>
      </div>
      <div className=''>
        <div className='flex gap-6 text-3xl'>
        <a href="">   <CiFacebook /></a>
        <a href=""><CiTwitter/></a>
        <a href=""><FaGithub/></a>
        <a href=""><CiLinkedin/></a>
        </div>

        <form className='flex items-center mt-8  '>
        <input className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600' type="email" placeholder='Enter email' />
        <button className='bg-red-600 text-white px-4 py-2  rounded-r-lg'>Subscribe</button>
      </form>
      
    </div>
      </div>
      <div className='mt-8 border-t border-gray-700 pt-4'>
        <div className=' container mx-auto flex flex-col md:flex-row justify-between items-center'>
          <p>&copy, 2024 e-shop all right reserved.</p>
          <div className='flex space-x-4 md:mt-0 mt-4'>
            <a href="" className='hover:underline'>Privacy Policy</a>
            <a href="" className='hover:underline'>Terms & Condition</a>
          </div>
        </div>
      </div>

      
    </footer>
  )
}

export default Footer
