
const Card = ({ size = 'sm' }) => {
    const sizesArr = {
        sm: 'w-[250px] h-[300px]'
    }

    return (
        <div className={`${sizesArr[size]} bg-white border-4 border-accent text-black rounded-md shadow-xl `}>

        </div>
    )
}

export default Card