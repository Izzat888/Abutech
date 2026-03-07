import { FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import anvarhon from "../assets/anvarhon.jpg"
import bobur from "../assets/bobur.jpg"
import farrukh from "../assets/farrux.jpg"
import shuhratbek from "../assets/shuxratbek.jpg"
import muhammad from "../assets/muhammadsiddiq.jpg"
import usmon from "../assets/usmon.jpg"
import ilhom from "../assets/ilhom.jpg"
import rasul from "../assets/rasul.jpg"
import odil from "../assets/odil.jpg"
import akbarjon from "../assets/akbarjon.jpg"

const Team = () => {
    const team = [
        {
            name: "Abdullatifxon Anvarxonov",
            role: "Frontend dasturchi",
            img: anvarhon,
        },
        {
            name: "Bobur Mavlonov",
            role: "UX/UI dizayner",
            img: bobur,
        },
        {
            name: "Farrukh Abbosov",
            role: "Sotuv menejeri",
            img: farrukh,
        },
        {
            name: "Shuhratbek Qobulov",
            role: "Frontend dasturchi",
            img: shuhratbek,
        },
        {
            name: "Muhammadsiddiq Kuvandikov",
            role: "DevOps",
            img: muhammad,
        },
        {
            name: "Usmon Ma'sudjonov",
            role: "Backend dasturchi",
            img: usmon,
        },
        {
            name: "Ilhom Shamidinov",
            role: "Frontend dasturchi",
            img: ilhom,
        },
        {
            name: "Rosul Ismoiliy",
            role: "Backend dasturchi",
            img: rasul,
        },
        {
            name: "Odil Nizomov",
            role: "Frontend dasturchi",
            img: odil,
        },
        {
            name: "Akbarjon Tojiyev",
            role: "Jamoa lideri",
            img: akbarjon
        },
    ]
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='mt-24'>
                <h4 className='text-[rgba(0,9,74)] text-3xl sm:text-4xl
                      md:text-5xl font-black tracking-wide mb-4'
                    data-aos='fade-up'
                    data-aos-delay='400'>BIZNING JAMOA</h4>
                <p className='text-[rgba(0,9,74,0.7)] text-xs sm:text-xl
                      md:text-xl font-bold mb-3 tracking-wide'
                    data-aos='fade-up'
                    data-aos-delay='500'>
                    Jamoa a'zolari va ularning ijtimoiy tarmoq sahifalari
                </p>

                {/* team-list */}
                <div className="mt-20">
                    <ul className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-32 gap-x-10 mt-52">
                        {team.map((member, index) => (
                            <li key={index} data-aos='fade-up' data-aos-delay='300' className="bg-white rounded-3xl w-75 pt-36 pb-8 text-center relative
                               shadow-xl hover:shadow-2xl hover:-translate-y-2
                               transition duration-300 group mb-28">
                                {/* Image */}
                                <div className="absolute -top-24 left-1/2 -translate-x-1/2
                                      transition duration-300 group-hover:-translate-y-3">
                                    <img
                                        className="w-40 h-40 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-40 lg:h-40
                                            rounded-full object-cover shadow-xl
                                            transition duration-300 group-hover:scale-105"
                                        src={member.img}
                                        alt={member.name}
                                    />
                                </div>
                                <h5 className="font-bold text-3xl -mt-8 mb-3 text-[rgb(0,9,74)] tracking-wider">
                                    {member.name}
                                </h5>
                                <p className="text-gray-500 mb-6 tracking-wide text-xl">
                                    {member.role}
                                </p>
                                <hr className="mb-5 opacity-10 w-20 mx-auto" />
                                {/* Social icons */}
                                <div className="flex justify-center gap-5 text-xl">
                                    <a className="p-3 rounded-full text-[rgb(0,9,74)]
                                         transition duration-300 hover:bg-[rgb(0,9,74)]
                                         hover:text-white hover:scale-110">
                                        <FaInstagram />
                                    </a>
                                    <a className="p-3 rounded-full text-[rgb(0,9,74)]
                                      transition duration-300 hover:bg-[rgb(0,9,74)]
                                      hover:text-white hover:scale-110">
                                        <FaTelegram />
                                    </a>
                                    <a className="p-3 rounded-full text-[rgb(0,9,74)]
                                        transition duration-300 hover:bg-[rgb(0,9,74)]
                                        hover:text-white hover:scale-110">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Team