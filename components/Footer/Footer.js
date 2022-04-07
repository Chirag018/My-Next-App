import logo from '../../public/assets/logo.png'
import { AiFillFacebook } from 'react-icons/ai'
import { BsDiscord } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer grid grid-cols-2 mr-20 -mt-28">
      <div className="footer-left flex flex-col space-x-6 text-left space-y-5 bg-gradient-to-b from-blue-200 to-blue-800">
        <div className="flex items-center space-x-4 ml-7 mt-10">
          <Image className="" src={logo} width="50" height="50" />
          <span className='font-bold white text-2xl'>OpenSea</span>
        </div>
        <p className="w-72 pb-48 pr-1 white">From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.</p>
        <div className="flex pb-16 ">
          <AiFillFacebook className='w-auto h-10 cursor-pointer' />
          <AiFillYoutube className='w-auto h-10 cursor-pointer' />
          <BsDiscord className='w-auto h-10 cursor-pointer' />
          <AiFillTwitterSquare className='cursor-pointer w-auto h-10' />
        </div>
      </div>
      <div className='footer-right bg-gradient-to-b from-white to-blue-200 mt-10 -mr-20'>
        <div className="flex flex-row pb-20">
          <div className="grid text-left ml-24 blue8">
            <h1 className="font-serif blue7 text-3xl pb-5">Resources</h1>
            <ul className='cursor-pointer'>
              <li>Help Center</li>
              <li>Platform Status</li>
              <li>Partners</li>
              <li>Gas-Free Marketplace</li>
              <li>Suggestions</li>
              <li>Discord Community</li>
              <li>Newsletter</li>
              <li>Blog</li>
              <li>Docs</li>
            </ul>
          </div>
          <div className="ml-12 mt-1 right-right ">
            <div className="grid pb-11 text-left blue8">
              <h1 className="font-serif text-2xl ">My Account</h1>
              <div className='flex flex-col justify-center mt-8 space-y-4'>
                <ul className='cursor-pointer'>
                  <li>Profile</li>
                  <li>Favorite</li>
                  <li>My Collections</li>
                  <li>Settings</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col space-y-2 text-left -mt-8 blue8">
              <h1 className="font-serif text-2xl pt-1">Stats</h1>
              <ul className='cursor-pointer'>
                <li>Rankings</li>
                <li>Activity</li>
              </ul>
            </div>

          </div>
          <div className='flex flex-col space-y-2 ml-10 -mt-1 blue8'>
            <h1 className="font-serif text-2xl pt-2">Company</h1>
            <ul className='flex flex-col space-y-1 pt-5 cursor-pointer'>
              <li>About</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="pb-8  text-left ml-24 blue8">
            <h1 className="loop font-bold text-2xl blue7">Stay In The Loop</h1>
            <p className='mt-2'>Join our mailing list to stay in the loop with out newest feature releases, NFT drops, and tips & tricks for navigating OpenSea.</p>
          </div>
          <form className="flex flex-row space-x-2 divide-x-4 divide-blue-500 ml-14">
            <input type="text" placeholder="Email Address" className="border p-2 w-64 ml-10" />
            <button className="bg-blue-500 px-8">Sign Up</button>
          </form>

          <div className="flex flex-row space-x-6 ml-72 pl-6 py-8">
            <a href='#' className='footer-down'>Privacy Policy</a>
            <a href='#' className='footer-down'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer