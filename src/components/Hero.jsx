
import { useEffect, useState } from "react";
import abutech from "../assets/abutechBackground.jpg"
const Hero = () => {

    const [projects, setProjects] = useState(0);
    const [experts, setExperts] = useState(0);
    const [companies, setCompanies] = useState(0);
    const [experience, setExperience] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setProjects(prev => (prev < 40 ? prev + 1 : prev));
            setExperts(prev => (prev < 10 ? prev + 1 : prev));
            setCompanies(prev => (prev < 30 ? prev + 1 : prev));
            setExperience(prev => (prev < 1 ? prev + 1 : prev));
        }, 30);

        return () => clearInterval(interval);

    }, []);
    return (
        <div className="max-w-7xl mx-auto">
            <div className="w-full mt-28">
            <div>
                <div
                    className="max-w-7xl mx-auto px-6 
                         h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px]
                         bg-cover bg-center 
                         flex flex-col justify-center
                         pl-4 sm:pl-8 md:pl-10"
                    style={{ backgroundImage: `url(${abutech})` }}>
                    <h1 className="text-white 
                         text-xl sm:text-2xl md:text-3xl lg:text-4xl 
                         font-black mb-4 sm:mb-6">
                        HAR QANDAY SAYTNI TAYYORLAYMIZ
                    </h1>

                    <p className="text-white 
                         w-full sm:w-[320px] md:w-[420px]
                         font-bold mb-6 text-sm sm:text-base">
                        Biz shu qadar ideal ishlaymizki, bizni oldimizda katta-katta kompaniyalar xijolat
                    </p>

                    <button className="h-11 sm:h-12 
                         rounded-xl font-black border border-white 
                         w-[130px] sm:w-[150px] 
                         bg-[rgb(0,9,74)] text-white 
                         hover:bg-[#011481] transition">
                        Ko'rish
                    </button>
                </div>
                {/* Number */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">

                    {/* Projects */}
                    <div>
                        <div className="font-black text-3xl md:text-5xl text-[rgb(0,9,74)]">
                            {projects}+
                        </div>
                        <p className="text-xl md:text-2xl text-[rgba(0,9,74)]">Amalga oshirilgan loyihalar</p>
                    </div>

                    {/* Mutaxassis */}
                    <div>
                        <div className="font-black text-3xl md:text-5xl text-[rgb(0,9,74)]">
                            {experts}+
                        </div>
                        <p className="text-xl md:text-2xl text-[rgba(0,9,74)]">Jamodagi mutaxassislar</p>
                    </div>

                    {/* Korxonalar */}
                    <div>
                        <div className="font-black text-3xl md:text-5xl text-[rgb(0,9,74)]">
                            {companies}+
                        </div>
                        <p className=" text-xl md:text-2xl text-[rgba(0,9,74)]">Ilgari surilgan korxonalar</p>
                    </div>

                    {/* Tajriba */}
                    <div>
                        <div className="font-black text-3xl md:text-5xl text-[rgb(0,9,74)]">
                            {experience}+
                        </div>
                        <p className="text-xl md:text-2xl text-[rgba(0,9,74)]">Yillik tajribamiz</p>
                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default Hero