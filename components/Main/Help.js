import React, { useState } from 'react'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'

function Help() {
    const [selected, setSelected] = useState(null);

    const data = [
        {
            question: 'How do I create an NFT?',
            answer: 'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.',
        },
        {
            question: 'How do I create and sell NFTs on Polygon?',
            answer: 'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.',
        },
        {
            question: 'What is Freezing Metadata',
            answer: 'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.',
        },
        {
            question: 'Does Opensea allow physical item trades?',
            answer: 'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.',
        },
        {
            question: 'How do I add a collection collaborator?',
            answer: 'From Opensea.io, go to your profile icon and click “Create” in the top right corner. You’ll be taken to the NFT item creation page. This page will allow you to upload your NFT file, name it and add a description.',
        },
    ];

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        }
        setSelected(i);
    }

    return (
        <div class="grid lg:grid-cols-2 pt-28 pb-32">
            <div class="left pl-20 text-left ">
                <h1 class="font-bold text-2xl text-blue-900 w-72 py-7">We will try to help you if you are confused.</h1>
                <p className='w-80'>A fequently asked question (FAQ) forum is often used in articles,
                    websites, email lists, and online forums where common questions
                    tend to recur.</p>
            </div>
            <div class="right grid grid-rows-6 ">
                {data.map((item, i) => (
                    <div className='item'>
                        <div className='flex flex-row items-center relative' onClick={() => toggle(i)}>
                            <h2 className='blue8 text-left'>{item.question}</h2>
                            <span className='cursor-pointer absolute left-2/3'>{selected === i ? < AiFillCaretUp /> : < AiFillCaretDown />}</span>
                        </div>
                        <div className='w-4/5 py-10'>{(selected === i) ? `${item.answer}` : ''}</div>
                    </div>
                ))}
                <button class="blueBg w-32 p-2 mt-10 white">View all</button>
            </div>

        </div>
    )
}

export default Help