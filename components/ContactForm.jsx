import Button from "./Button"

const ContactForm = () => {
    return (
        <form className="flex flex-col gap-5">
            <div className="flex flex-col">
                <label className="text-lg font-bold text-accent">Name</label>
                <input placeholder="Name" className="text-main font-light text-lg rounded-md px-3 py-2 outline-none border-accent border-b-[8px] border-opacity-0 focus-within:border-opacity-100 transition-all" />
            </div>

            <div className="flex flex-col">
                <label className="text-lg font-bold text-accent">Email</label>
                <input placeholder="Email" className="text-main font-light text-lg rounded-md px-3 py-2 outline-none border-accent border-b-[8px] border-opacity-0 focus-within:border-opacity-100 transition-all" />
            </div>

            <div className="flex flex-col">
                <label className="text-lg font-bold text-accent">Phone</label>
                <input placeholder="Phone" className="text-main font-light text-lg rounded-md px-3 py-2 outline-none border-accent border-b-[8px] border-opacity-0 focus-within:border-opacity-100 transition-all" />
            </div>

            <div className="flex flex-col">
                <label className="text-lg font-bold text-accent">Message</label>
                <textarea placeholder="Message..." className="text-main font-light text-lg resize-none rounded-md px-3 py-2 outline-none border-accent border-b-[8px] border-opacity-0 focus-within:border-opacity-100 transition-all" />
            </div>

            <Button btnText={'Submit'} color="white" textColor="main" />
        </form>
    )
}

export default ContactForm