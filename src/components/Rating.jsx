import React, { useState } from 'react'
import { Star } from 'lucide-react';
import { MessageSquareCode } from 'lucide-react';
function Rating() {
    const [rating, setrating] = useState(0)
    const [ratingSelected, setratingSelected] = useState(false)
    const [selectedRating, setselectedRating] = useState(0)
    const [review, setreview] = useState("")
    const handleClick = (index) => {
        setrating(prev => prev == index ? 0 : index)
        setratingSelected(prev => rating === 0 ? false : true)
        setselectedRating(prev => prev == index ? 0 : index)
    }

    const handleHover = (index) => {
        setrating(index);

    }
    const handleHoverLeave = () => {
        if (!ratingSelected) {

            setrating(0)
        }
        else {
            setrating(prev => selectedRating)
        }

    }
    return (
        <div className='flex gap-4 flex-col items-center justify-center h-screen'>
            <div className='flex  gap-2 items-center justify-center'>
                <h1 className='text-2xl font-bold text-gray-500'>Rate Us</h1>
                <div className='text-2xl font-bold text-gray-500'>{rating}</div>
            </div>
            {/* Review Section */}
            <div className='flex gap-2 items-center justify-center sm:flex-row flex-col flex-wrap w-full'>
                <input type="text" value={review} onChange={(e) => { setreview(e.target.value) }} placeholder='Enter your review' className='border-2 border-gray-300 rounded-lg p-2 sm:w-96 w-[80%]' />
                <button className=' flex gap-1 hover:text-white hover:bg-orange-400 transition-all duration-500 rounded-lg text-orange-400 items-center justify-center py-2 px-4 border-2 border-orange-400 shadow-lg shadow-orange-400'> <MessageSquareCode /> Review</button>
            </div>
            <div className='flex gap-2 items-center justify-center '>
                <h1 className='sm:text-2xl text-xl font-bold text-gray-500'>Rating</h1>
                {new Array(5).fill(0).map((ele, index) => {
                    return (
                        <button  key={index} className='bg-gray-200  p-2 rounded-full hover:bg-gray-300'>
                            <Star onMouseLeave={() => { handleHoverLeave() }}   onMouseOver={() => { handleHover(index+1) }} onClick={() => { handleClick(index + 1) }} key={index}  className={`cursor-pointer transition-all duration-500 ${(index < rating && index >= selectedRating )? "text-yellow-500  fill-yellow-400" : "text-yellow-500 fill-none"} ${selectedRating > index && index < rating && "fill-orange-400"}`} />
                        </button>
                    )
                }

                )}
            </div>

        </div>
    )
}

export default Rating
