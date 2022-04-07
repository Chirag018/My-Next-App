import exp1 from '../../public/assets/exp1.png'
import exp2 from '../../public/assets/exp2.png'
import exp3 from '../../public/assets/exp3.png'
import exp4 from '../../public/assets/exp4.png'
import exp5 from '../../public/assets/exp5.png'
import exp6 from '../../public/assets/exp6.png'
import exp7 from '../../public/assets/exp7.png'
import exp8 from '../../public/assets/exp8.png'
import Image from 'next/image'

function Categories() {

    const data = [
        {
            image: exp1,
            title: 'Art',
            details: 'Art is something that stimulates an individual’s thoughts',
        },
        {
            image: exp2,
            title: 'Music',
            details: 'Music is the art of arraning sounds elements of melody',
        },
        {
            image: exp3,
            title: 'Visual Worlds',
            details: 'Visuals are the picture elements , as distinguished',
        },
        {
            image: exp4,
            title: 'Trading Cards',
            details: 'A Trading card ( or collectible card ) is a small card.',
        },
        {
            image: exp5,
            title: 'Collectibles',
            details: 'An item worth far more than it was sold for rarity.',
        },
        {
            image: exp6,
            title: 'Sports',
            details: 'Sport pertains to any form of competitive.',
        },
        {
            image: exp7,
            title: 'Domain Name',
            details: 'Use Traditional Domains. The native name suffix.',
        },
        {
            image: exp8,
            title: 'All NFT’s',
            details: 'Music is the art of arranging sounds elements of melody',
        },

    ];

    return (
        <>
            <div className='grid p-24'>
                <div className='flex flex-col items-center'>
                    <h1 className="font-serif text-2xl p-10  blue7">Explore  Categories</h1>
                    <span className='pb-20 w-80 text-center'>A play of light and shade, chairoscuro is the realm between the light and dark.</span>
                </div>

                <div className="cols grid grid-cols-4 gap-x-64 gap-y-8 space-y-1 pr-48 ">
                    {data.map((item, index) => (
                        <div className="flex flex-row w-64 h-24 text-left gap-x-2">
                            <Image src={item.image} alt="" className="" />
                            <div className='w-48 ' id={index}>
                                <h1 className="blue7 font-bold cursor-pointer">{item.title}</h1>
                                <span>{item.details}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <div className='ml-96 px-28'>
                <button className='blueBg white p-4 '>Explore Marketplace</button>
            </div>
        </>
    )
}

export default Categories
