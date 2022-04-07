import Image from 'next/image';
import logo from '../../public/assets/logo.png'
import search from '../../public/assets/search.png'
import purse from '../../public/assets/purse.png'
import added from '../../public/assets/added.png'
import rightheader from '../../public/assets/rightheader.png'

function Header() {
    return (
        <div className='flex flex-col pb-20 bg-hero-pattern'>
            <div className='header flex justify-between mx-8 pt-5'>
                <div className='leftmainn flex items-center space-x-3 cursor-pointer bg-gradient-to-r from-blue-900 to-blue-600 -ml-8 p-1 px-56'>
                    <Image src={logo} alt='logo' />
                    <span className='white'>OpenSea</span>
                </div>

                <div className='flex space-x-10 relative'>
                    <div className='flex items-center pl-2 cursor-pointer slate'>
                        <Image src={search} alt='search' />
                        <input type='text' placeholder='Search' className=' slate p-1 pl-2 text-left' />

                    </div>
                    <div className='flex items-center space-x-4'>
                        <Image src={purse} className='cursor-pointer' alt='purse' />
                        <h4 className='text-gray-800'>hi</h4>
                        <Image src={added} className='cursor-pointer' alt='bundle' />
                    </div>
                </div>

            </div>
            <div className='flex justify-between pr-10 '>
                <div className='leftmainn flex flex-col items-start p-10 pt-20 -mb-10 bg-gradient-to-r from-blue-900 to-blue-600'>
                    <ul>
                        <li className='font-black text-7xl white'>Discover.</li>
                        <li className='font-black text-7xl white'> Collect.&Sell.</li>
                        <li className='font-bold text-7xl white'>Extraordinary</li>
                        <li className='font-bold text-6xl white'> NFT's</li>
                        <li className='pt-6 white'>On the world's first & largest NFT </li>
                        <li className='white'>marketplace.</li>
                    </ul>
                    <div className='flex pt-8'>
                        <button type='submit' className='mt-4 bg-blue-700 white py-2 px-6 '>Explore</button>
                        <button type='submit' className='mt-4 blue8 border-2 white py-2 px-6 ml-4'>Create</button>
                    </div>
                    <a href='#' className='underline pt-14 white'>Get Featured On The Homepage</a>

                </div>
                <div className='rightmainn flex flex-col text-right pt-52 w-80'>
                    <Image src={rightheader} alt='bundle' />
                    <a href='#' className='underline white'>SoulCurry Art</a>
                    <span className='white'>A play of light and shade,chairoscurso is the realm between the light and dark</span>
                    <div>
                        <button type='submit' className='mt-4 slate white p-2 px-9'>Place Bid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;