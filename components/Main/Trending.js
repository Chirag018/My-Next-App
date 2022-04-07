import trend1 from '../../public/assets/trend1.png'
import trend2 from '../../public/assets/trend2.png'
import trend3 from '../../public/assets/trend3.png'
import trend11 from '../../public/assets/trend11.png'
import trend12 from '../../public/assets/trend12.png'
import trend13 from '../../public/assets/trend13.png'
import Image from 'next/image'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

function Trending() {

    const data = [
        {
            bgImage: trend1,
            img: trend11,
            title: 'FriYaywiz',
            details: 'A play of light and shade, chairoscuro is the realm.',
        },
        {
            bgImage: trend2,
            img: trend12,
            title: 'FPixelwizards',
            details: 'A play of light and shade, chairoscuro is the realm.',
        },
        {
            bgImage: trend3,
            img: trend13,
            title: 'Aesthetic’smatter',
            details: 'A play of light and shade, chairoscuro is the realm.',
        },
    ];

    return (
        <div className="pt-12 flex flex-col items-center pb-20">
            <div className='p-12 grid grid-rows-1 my-10'>
                <h1 className="font-serif text-3xl py-3 blue6">Trending in All Categories</h1>
                <span className="w-80 text-center">A play of light and shade, chairoscuro is the realm between the light and dark.</span>

            </div>
            <div className="ml-auto mr-36 -mt-16">
                <a href='#' className="hover:underline blue6 p-10 text-right">Recently Added</a>
                <a href='#' className="hover:underline text-blue-300">Mostly used</a>
            </div>
            <div className="flex gap-x-3 mt-10 gap-y-10">
                <AiFillCaretLeft className='blue8 mt-56 cursor-pointer' />

                {data.map((item, index) => (
                    <div className="relative" id={index}>
                        <Image src={item.bgImage} className='' width="298" />
                        <div className='border border-x-2 whiteBg mb-32 absolute top-64 flex flex-col pb-10 rounded-md  ml-auto '>
                            <div className=" mx-28 -mt-10">
                                <Image src={item.img} className='' alt='' width="100" height="100" />
                            </div>
                            <div className='flex flex-col items-center space-y-3'>
                                <h1 className='mt-2 text-xl blue7 cursor-pointer'>{item.title}</h1>
                                <span className='w-48 text-center font-serif'>{item.details}</span>

                            </div>
                        </div>
                    </div>
                ))}

                <AiFillCaretRight className='blue8 mt-56 cursor-pointer' />
            </div>

        </div>

    )
}

export default Trending