import alpha from '../../public/assets/alpha.png'
import beta from '../../public/assets/beta.png'
import gamma from '../../public/assets/gamma.png'
import zamma from '../../public/assets/zamma.png'
import Image from 'next/image'

function NotableDrops() {
    return (
        <div className="notable-drops grid grid-cols-2 pb-48 p-4 ml-20 mt-20">
            <div className="grid grid-cols-2 gap-3">

                <div className='w-52 mt-5 ml-6'>
                    <Image className="" src={alpha} />
                </div>
                <div className='w-44 mt-14 -ml-7'>
                    <Image className="" src={beta} />
                </div>
                <div className='w-48'>
                    <Image className="w-44" src={gamma} />
                </div>
                <div className='w-72 -ml-16'>
                    <Image className="" src={zamma} />
                </div>
            </div>
            <div className="right mx-36 my-20 text-left w-72">
                <h1 className="text-2xl font-serif blue8 my-6">Notable Drops</h1>
                <p className="">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and unlockable content.</p>
                <button className="bg-blue-400 px-11 py-2 my-20">View all</button>
            </div>
        </div>





    )
}

export default NotableDrops