import reso1 from '../../public/assets/reso1.png'
import reso2 from '../../public/assets/reso2.png'
import reso3 from '../../public/assets/reso3.png'
import Image from 'next/image'
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai'

function Resource() {

    const data = [
        {
            image: reso1,
            answer: '10 tips for avoiding scams and staying safe.',
        },
        {
            image: reso2,
            answer: 'Keeping yourself safe when buying Nft’s on Opensea.',
        },
        {
            image: reso3,
            answer: 'The beginner’s guide to creating & selling digital art Nft’s',
        }
    ]


    return (
        <div className="grid grid-rows-2 m-28 pb-28">
            <div className="grid grid-rows-2 justify-center mb-10">
                <h1 className="font-serif text-3xl mx-32 blue7">Resources for Getting Started</h1>
                <p className='w-80 text-center ml-40'>A play of light and shade, chairoscuro is the realm between the light and dark.</p>
            </div>

            <div class="carasoel lg:flex lg:items-center lg:justify-center lg:gap-x-10 cursor-pointer">
                < AiFillCaretLeft className='blue8 ' />
                {data.map((item, index) => (
                    <div id={index} className='border-2 border-white whiteBg flex w-56 p-1 items-center'>
                        <Image src={item.image} width="100" height="100" />
                        <h2>{item.answer}</h2>
                    </div>
                ))}
                < AiFillCaretRight className='blue8 cursor-pointer' />
            </div>
        </div>
    )
}

export default Resource
