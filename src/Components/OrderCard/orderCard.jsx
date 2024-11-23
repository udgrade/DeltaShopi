import { XMarkIcon } from "@heroicons/react/24/solid"

const orderCard = props => {
    const { id, title, imageurl, price, productDelete } = props
    let letRenderIcon
    if (productDelete) {
        letRenderIcon = <button className="ml-1" onClick={() => productDelete(id)}><XMarkIcon className='h-6 w-6 text-black'></XMarkIcon></button>
    }
    

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'> 
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imageurl} alt={title}/>
                </figure>
                <p className='text-sm font-light '>{title}</p>
            </div>
            <div className='flex items-center gab-30'>
                <p className='text-lg font-medium ml-1.5'>${price} </p>
                {letRenderIcon}
            </div>
        </div>
    )
}

export default orderCard