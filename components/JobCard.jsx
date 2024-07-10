import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineLocationOn } from "react-icons/md";

const JobCard = ({ title, color, salary, location }) => {
    const colorVariants = {
        white: 'border-white',
        main: 'border-main',
        accent: 'border-accent'
    }
    return (
        <div className={`cursor-pointer flex flex-col items-center justify-between bg-white w-[300px] h-[200px] border-t-[12px] ${colorVariants[color]} p-4 text-main font-bold rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300`}>
            <h4 className='font-bold text-xl underline underline-offset-4'>{title}</h4>
            <div className="flex flex-col">
                <p className="mb-3 font-light text-md mt-3 flex flex-row items-center gap-3">
                    <span><GiMoneyStack /></span>{salary}
                </p>
                <p className="mb-3 font-light text-md mt-3 flex flex-row items-center gap-3">
                    <span><MdOutlineLocationOn /></span>{location}
                </p>
            </div>

        </div>
    )
}

export default JobCard