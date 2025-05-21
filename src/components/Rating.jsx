import React,{useState} from 'react'
import { Star } from 'lucide-react';

function Rating() {
    const [rating, setrating] = useState(0)
    const [ratingSelected, setratingSelected] = useState(false)
    const [selectedRating, setselectedRating] = useState(0)
    const handleClick = (index) => {

        setrating(prev => prev == index ? 0 : index)
        setratingSelected(true)
        console.log(index);
        setselectedRating(prev => prev == index ? 0 : index)
    }

    const handleHover = (index) => {
        console.log(index);
     setrating(index)
 
    }
    const handleHoverLeave = () => {
        console.log("leave");
        if(!ratingSelected){
            
            setrating(0)}
            else{
                setrating(selectedRating)
            }
        
    }
    return (
        <div className='flex gap-4 flex-col items-center justify-center h-screen'> 
           <div className='flex  gap-2 items-center justify-center'>
           <h1 className='text-2xl font-bold text-gray-500'>Rate Us</h1>
           <div className='text-2xl font-bold text-gray-500'>{rating}</div>
           </div>
            <div className='flex gap-2 items-center justify-center'>
            <h1 className='text-2xl font-bold text-gray-500'>Rating</h1>
            {new Array(5).fill(0).map((ele,index)=>{
                return (
                   <button onMouseLeave={()=>{handleHoverLeave()}}  onMouseEnter={()=>{handleHover(index+1)}} onClick={()=>{handleClick(index+1)}} key={index} className='bg-gray-200  p-2 rounded-full hover:bg-gray-300'>
                    <Star className={` transition-all duration-500 ${index < rating ? "text-yellow-500  fill-yellow-400":"text-yellow-500 fill-none"} ${selectedRating > index && "fill-orange-400"}`} />
                     </button>
                )
            }
                
            )}
            </div>
        </div>
    )
}

export default Rating
