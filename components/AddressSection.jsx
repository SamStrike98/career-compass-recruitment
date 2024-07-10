import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const AddressSection = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-start gap-2">
                <span><MdOutlineLocationOn size={25} color="#bc9c22" /></span>  <p>Address Line 1, Address Line 2, Town, County, Post code</p>
            </div>

            <div className="flex flex-row items-center gap-2">
                <span><FaPhoneAlt size={25} color="#bc9c22" /></span> <p>01206390118</p>
            </div>

            <div className="flex flex-row items-center gap-2">
                <span><MdEmail size={25} color="#bc9c22" /></span> <p>info@careercompass.co.uk</p>
            </div>

            <ul className="flex flex-row justify-evenly">
                <span className="cursor-pointer"><FaSquareFacebook size={30} color="#bc9c22" className="hover:fill-white transition-all duration-300" /></span>
                <span className="cursor-pointer"><FaSquareInstagram size={30} color="#bc9c22" className="hover:fill-white transition-all duration-300" /></span>
                <span className="cursor-pointer"><FaSquareXTwitter size={30} color="#bc9c22" className="hover:fill-white transition-all duration-300" /></span>
                <span className="cursor-pointer"><FaLinkedin size={30} color="#bc9c22" className="hover:fill-white transition-all duration-300" /></span>
            </ul>

        </div>
    )
}

export default AddressSection