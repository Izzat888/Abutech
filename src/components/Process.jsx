import img1 from "../assets/search-list.svg"
import img2 from "../assets/design-card.svg"
import img3 from "../assets/team-icon.svg"
import img4 from "../assets/cup-icon.svg"
import img5 from "../assets/effect-test.svg"
import img6 from "../assets/settings-list.svg"

const Process = () => {
    const process = [
        {
            img: img1,
            text: "MIJOZNING EHTIYOJLARINI ANIQLASH"
        },
        {
            img: img2,
            text: "LOYIHA DIZAYNI"
        },
        {
            img: img3,
            text: "JAMOANI TANLASH"
        },
        {
            img: img4,
            text: "UZOQ MUDDATLIK HAMKORLIK"
        },
        {
            img: img5,
            text: "SIFATNI TAHLIL QILISH"
        },
        {
            img: img6,
            text: "LOYIHANI AMALGA"
        },
    ]
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mt-20 sm:mt-24">
                    <h5 className="text-[rgba(0,9,74)] text-xl sm:text-xl md:text-xl font-black tracking-wide
                         mb-4 sm:text-left">Ish</h5>
                    <p className="text-[rgba(0,9,74)] text-3xl sm:text-4xl md:text-5xl font-black tracking-wide mb-20 sm:text-left ">TARTIBI</p>
                </div>
            </div>
            <div className="w-full bg-[rgba(0,9,74)] py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ul
                        className="
                                 grid
                                 grid-cols-1
                                 sm:grid-cols-2
                                 md:grid-cols-3
                                 lg:grid-cols-3
                                 gap-y-8
                                 gap-x-6
                                 place-items-center
                                 items-center">
                        {process.map((member, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay="500"
                                className="
                                  flex flex-col items-center text-center gap-3 mb-20 w-[200px]">
                                <img
                                    src={member.img}
                                    alt={member.text}
                                    className="
                                        w-12
                                        sm:w-14
                                        md:w-16
                                        lg:w-18
                                        object-contain
                                        transition duration-300"/>
                                <p
                                    className="
                                        text-white
                                        text-xl
                                        sm:text-xl
                                        md:text-2xl
                                        font-medium
                                        tracking-wide" >
                                    {member.text}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Process