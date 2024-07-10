import Button from "../Button"

const FindJobCard = () => {
    return (
        <div className="flex flex-col items-center bg-white w-[300px] border-t-[12px] border-accent p-4 text-accent font-bold rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="mb-3">
                We tailor our recruitment process to what you need; from finding you candidates from a supplied job description to writing it, advertising it, providing recruitment advice and even sitting in on interviews, we can help with as little or as much as you need.
            </p>
            <Button btnText='Find Jobs' color="accent" textColor="white" />
        </div>
    )
}

export default FindJobCard