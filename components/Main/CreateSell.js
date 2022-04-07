import React from 'react'

function CreateSell() {

    const data = [
        {
            title: 'Set up your wallet',
            demo: 'Once you’ve set up your wallet of choice, connect it to OpenSea. Learn about the wallets we support.'
        },
        {
            title: 'Create your collection',
            demo: 'Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary.'
        },
        {
            title: 'Add your NFT’s',
            demo: 'Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and            unlockable content.'
        },
        {
            title: 'List them for sale',
            demo: 'Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.'
        },
    ];

    return (
        <div className="create-sell grid grid-cols-1 border-4 p-4 pt-32 mx-8 -mt-20 bg-gradient-to-b from-gray-300 to-white ">
            <div className="text-center px-20">
                <h1 className="font-serif text-3xl blue8">Create and Sell Your NFT's</h1>
                <p className="pt-5 w-1/3 ml-80">A play of light and shade, chairoscuro is the realm between the light and dark.</p>
            </div>
            <div class="flex flex-row py-20 space-x-8">
                <div class="whiteBg p-4 border-2 borderBlue px-4 pb-16 pt-10 w-7/12 text-center ">
                    <h1 className="text-xl blue8">Set up your wallet</h1>
                    <p className="py-4 w-48 ml-3">Once you’ve set up your wallet of choice, connect it to OpenSea. </p>
                    <p className='-mt-4 w-48 ml-3'>Learn about the <span className='blue5 cursor-pointer'>wallets we support.</span></p>
                </div>
                <div className="whiteBg p-4 border-2 borderBlue px-4 pb-16 pt-10 w-7/12 text-center">
                    <h1 className="text-xl blue8">Create your collection</h1>
                    <p className="py-4 w-40 ml-8">Click <span className='blue5 cursor-pointer'>My Collections</span> and set up your collection. Add social links, a description, profile & banner images, and set a secondary.</p>
                </div>
                <div className="whiteBg p-4 border-2 borderBlue px-4 pb-16 pt-10 w-7/12 text-center">
                    <h1 className="text-xl blue8">Add your NFT's</h1>
                    <p className="py-4 w-40 ml-8">Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs stats, and </p>
                    <p className='-mt-4'>unlockable content.</p>
                </div>
                <div className="whiteBg p-4 border-2 borderBlue px-4 pb-16 pt-10 w-7/12 text-center">
                    <h1 className="text-xl blue8">List them for sale</h1>
                    <p className="py-4 w-40 ml-7">Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs.</p>
                </div>
            </div>

            {/* {data.map((index, i) => (
                <div className='grid grid-cols-4 '>
                    <div className=' bg-white p-4 border-2 border-blue-100 px-4 pb-16 pt-10 w-7/12 text-center'>
                        <h2>{index.title}</h2>
                        <p>{index.demo}</p>
                    </div>
                </div>
            ))} */}


        </div>

    )
}

export default CreateSell