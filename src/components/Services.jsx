import img1 from "../assets/img1.png"
import img2 from "../assets/sat5.png"
import html from "../assets/html.svg"
import css from "../assets/css.svg"
import java from "../assets/javascript.svg"
import react from "../assets/react.svg"
import graph from "../assets/graphQL.svg"
import node from "../assets/nodejs.svg"
import telegram from "../assets/telegram.png"
import socket from "../assets/socket.svg"
import figma from "../assets/figma.svg"
import photoshop from "../assets/photoshop.svg"
import adobe from "../assets/xd.svg"

const Services = () => {
    return (
        <>
        <div className="w-full bg-[rgba(225,250,241,0.74)] py-1 ">
            <div className="max-w-7xl mx-auto px-6">

                {/* section-list-one */}
                <div
                    className="mb-20 p-4 md:p-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl w-full lg:w-1/2">
                            <img
                                className="w-full 
                max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[750px]
                mx-auto
                transition duration-500 hover:scale-110"
                                src={img1}
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2">

                            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(0,9,74)] font-black tracking-wide mb-6">
                                Veb sayt
                            </h4>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px] font-medium tracking-wider text-[rgba(0,9,74)] opacity-90">
                                Biz jamoamiz bilan birgalikda veb dasturlash va veb dizaynerlik
                                xizmatlarini sizga taklif qilamiz. Tezkor va sifatli saytlar,
                                onlayn do'konlar, telegram botlar, kreativ veb sayt dizaynlari
                            </p>

                            {/* statistic */}
                            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 mb-10 tracking-wider">

                                <div data-aos="fade-up" data-aos-delay="320">
                                    <p className="text-sm sm:text-lg opacity-40">01</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Frontend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="240">
                                    <p className="text-sm sm:text-lg opacity-40">02</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Backend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="260">
                                    <p className="text-sm sm:text-lg opacity-40">03</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        QA Testing
                                    </p>
                                </div>

                            </div>

                            {/* Texnologiyalar */}
                            <div>

                                <p
                                    className="text-xl sm:text-2xl md:text-3xl mb-8 text-[rgba(0,9,74)] font-bold tracking-wider"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Texnologiyalar
                                </p>

                                <div className="flex flex-wrap gap-10 sm:gap-16 items-center">

                                    <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={html} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            HTML
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="500" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={css} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            CSS
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="600" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={java} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            JavaScript
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        {/* section-list-two */}
        <div className="w-full bg-[rgba(225,250,241,0.74)] py-1 mt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* section-list-one */}
                <div
                    className="mb-20 p-4 md:p-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl w-full lg:w-1/2 order-1 lg:order-2">
                            <img
                                className="w-full 
                                    max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[750px]
                                    mx-auto
                                    transition duration-500 hover:scale-110"
                                src={img2}
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="order-2 lg:order-1">

                            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(0,9,74)] font-black tracking-wide mb-6">
                                Veb dastur
                            </h4>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px] font-medium tracking-wider text-[rgba(0,9,74)] opacity-90">
                                Biz jamoamiz bilan birgalikda veb dasturlash va veb dizaynerlik
                                xizmatlarini sizga taklif qilamiz. Tezkor va sifatli saytlar,
                                onlayn do'konlar, telegram botlar, kreativ veb sayt dizaynlari
                            </p>

                            {/* statistic */}
                            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 mb-10 tracking-wider">

                                <div data-aos="fade-up" data-aos-delay="320">
                                    <p className="text-sm sm:text-lg opacity-40">01</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Frontend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="240">
                                    <p className="text-sm sm:text-lg opacity-40">02</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Backend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="260">
                                    <p className="text-sm sm:text-lg opacity-40">03</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        QA Testing
                                    </p>
                                </div>

                            </div>

                            {/* Texnologiyalar */}
                            <div>

                                <p
                                    className="text-xl sm:text-2xl md:text-3xl mb-8 text-[rgba(0,9,74)] font-bold tracking-wider"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Texnologiyalar
                                </p>

                                <div className="flex flex-wrap gap-10 sm:gap-16 items-center">

                                    <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={react} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            React JS
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="500" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={graph} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            GraphQL
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="600" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={node} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            NodeJS
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        {/* Services-list-three */}
        <div className="w-full bg-[rgba(225,250,241,0.74)] py-1 mt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* section-list-one */}
                <div
                    className="mb-20 p-4 md:p-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl w-full lg:w-1/2">
                            <img
                                className="w-full 
                max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[750px]
                mx-auto
                transition duration-500 hover:scale-110"
                                src={telegram}
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="w-full lg:w-1/2">

                            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(0,9,74)] font-black tracking-wide mb-6">
                                Telegram BOT
                            </h4>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px] font-medium tracking-wider text-[rgba(0,9,74)] opacity-90">
                                Biz jamoamiz bilan birgalikda veb dasturlash va veb dizaynerlik
                                xizmatlarini sizga taklif qilamiz. Tezkor va sifatli saytlar,
                                onlayn do'konlar, telegram botlar, kreativ veb sayt dizaynlari
                            </p>

                            {/* statistic */}
                            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 mb-10 tracking-wider">

                                <div data-aos="fade-up" data-aos-delay="320">
                                    <p className="text-sm sm:text-lg opacity-40">01</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Frontend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="240">
                                    <p className="text-sm sm:text-lg opacity-40">02</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Backend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="260">
                                    <p className="text-sm sm:text-lg opacity-40">03</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        QA Testing
                                    </p>
                                </div>

                            </div>

                            {/* Texnologiyalar */}
                            <div>

                                <p
                                    className="text-xl sm:text-2xl md:text-3xl mb-8 text-[rgba(0,9,74)] font-bold tracking-wider"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Texnologiyalar
                                </p>

                                <div className="flex flex-wrap gap-10 sm:gap-16 items-center tracking-wider">

                                    <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={socket} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            Socket IO
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="500" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={graph} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            GraphQL
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="600" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={node} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            Node JS
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        {/* services-list-four */}
        <div className="w-full bg-[rgba(225,250,241,0.74)] py-1 mt-20">
            <div className="max-w-7xl mx-auto px-6">

                {/* section-list-one */}
                <div
                    className="mb-20 p-4 md:p-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-14 items-center">

                        {/* Image */}
                        <div className="overflow-hidden rounded-xl w-full lg:w-1/2 order-1 lg:order-2">
                            <img
                                className="w-full 
                                    max-w-[420px] sm:max-w-[520px] md:max-w-[620px] lg:max-w-[750px]
                                    mx-auto
                                    transition duration-500 hover:scale-110"
                                src={img2}
                                alt=""
                            />
                        </div>

                        {/* Text */}
                        <div className="order-2 lg:order-1">

                            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[rgba(0,9,74)] font-black tracking-wide mb-6">
                                UX/UI dizayn
                            </h4>

                            <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-[600px] font-medium tracking-wider text-[rgba(0,9,74)] opacity-90">
                                Biz jamoamiz bilan birgalikda veb dasturlash va veb dizaynerlik
                                xizmatlarini sizga taklif qilamiz. Tezkor va sifatli saytlar,
                                onlayn do'konlar, telegram botlar, kreativ veb sayt dizaynlari
                            </p>

                            {/* statistic */}
                            <div className="grid grid-cols-3 gap-6 sm:gap-10 mt-10 mb-10 tracking-wider">

                                <div data-aos="fade-up" data-aos-delay="320">
                                    <p className="text-sm sm:text-lg opacity-40">01</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Frontend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="240">
                                    <p className="text-sm sm:text-lg opacity-40">02</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        Backend
                                    </p>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="260">
                                    <p className="text-sm sm:text-lg opacity-40">03</p>
                                    <p className="text-lg sm:text-xl md:text-2xl text-[rgba(0,9,74)] font-bold">
                                        QA Testing
                                    </p>
                                </div>

                            </div>

                            {/* Texnologiyalar */}
                            <div>

                                <p
                                    className="text-xl sm:text-2xl md:text-3xl mb-8 text-[rgba(0,9,74)] font-bold tracking-wider"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    Texnologiyalar
                                </p>

                                <div className="flex flex-wrap gap-10 sm:gap-16 items-center">

                                    <div data-aos="fade-up" data-aos-delay="400" className="text-center">
                                        <img className="w-8 sm:w-8 mx-auto" src={figma} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            Figma
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="500" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={photoshop} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            Photoshop
                                        </p>
                                    </div>

                                    <div data-aos="fade-up" data-aos-delay="600" className="text-center">
                                        <img className="w-10 sm:w-12 mx-auto" src={adobe} alt="" />
                                        <p className="text-sm sm:text-base opacity-40 text-[rgba(0,9,74)] mt-2">
                                            Adobe XD
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default Services