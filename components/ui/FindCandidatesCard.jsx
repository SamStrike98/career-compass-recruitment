import Button from "../Button"

const FindCandidatesCard = () => {
    return (
        <div className="flex flex-col items-center bg-white w-[300px] border-t-[12px] border-main p-4 text-main font-bold rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <p className="mb-3">
                We tailor our recruitment process to what you need; from finding you candidates from a supplied job description to writing it, advertising it, providing recruitment advice and even sitting in on interviews, we can help with as little or as much as you need.
            </p>
            <Button btnText='Find Candidates' color="main" textColor="white" />
        </div>
    )
}

export default FindCandidatesCard