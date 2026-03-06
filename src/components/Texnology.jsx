import bolalar from "../assets/bolalar.png"
import poster from "../assets/poster.png"
import matras from "../assets/matras.png"
import sat3 from "../assets/sat3.png"
const Texnology = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mt-24">

        <h2 className="text-[rgb(0,9,74)] text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-wide"
          data-aos='fade-up'
          data-aos-delay='250'>
          Bizning
        </h2>

        <p className="text-[rgb(0,9,74)] text-3xl sm:text-4xl md:text-5xl font-black tracking-wide"
          data-aos='fade-up'
          data-aos-delay='300'>
          Loyihalarimiz
        </p>

        {/* list */}
        <div className="mt-16 mb-20"
          data-aos='fade-up'
          data-aos-delay='300'>

          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full max-w-[600px] transition duration-500 hover:scale-110"
                src={bolalar}
                alt=""
              />
            </div>

            {/* Text */}
            <div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(0,9,74)] font-black tracking-wide mb-6">
                Osmondagi bolalar
              </h3>

              <p className="text-base sm:text-lg md:text-xl max-w-[600px] font-medium tracking-wide text-[rgb(0,9,74)] opacity-90">
                Biz ko'plab saytlarni dasturlash jarayonida shu va shu kabi
                ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganingizda
                o'zgacha qulaylikni va yengillikni xis etasiz, o'z biznesingizni
                internet orqali ham rivojlantiring.
              </p>

              {/* statistic */}
              <div className="grid grid-cols-3 gap-8 mt-12 mb-10">

                <div
                  data-aos='fade-up'
                  data-aos-delay='320'>
                  <p className="text-lg opacity-40">01</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Web site
                  </p>
                </div>

                <div
                  data-aos='fade-up'
                  data-aos-delay='240'>
                  <p className="text-lg opacity-40">02</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Admin panel
                  </p>
                </div>

                <div
                  data-aos='fade-up'
                  data-aos-delay='260'>
                  <p className="text-lg opacity-40">03</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Telegram bot
                  </p>
                </div>

              </div>

              {/* button */}
              <button
                data-aos='fade-up'
                data-aos-delay='320'
                className="px-6 h-12 bg-green-700 text-white rounded-lg
                transition duration-300
                hover:bg-green-800 hover:scale-105"
              >
                Ko'rish
              </button>

            </div>

          </div>

        </div>
        {/* list-two */}
        <div className="mt-16 mb-32" data-aos="fade-up" data-aos-delay="300">

          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-xl order-1 lg:order-2">
              <img
                className="w-full max-w-[600px] transition duration-500 hover:scale-110"
                src={poster}
                alt=""
              />
            </div>

            {/* Text */}
            <div className="order-2 lg:order-1">

              <h3 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(0,9,74)] font-black tracking-wide mb-6">
                Osmondagi bolalar
              </h3>

              <p className="text-base sm:text-lg md:text-xl max-w-[600px] font-medium tracking-wide text-[rgb(0,9,74)] opacity-90">
                Biz ko'plab saytlarni dasturlash jarayonida shu va shu kabi
                ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganingizda
                o'zgacha qulaylikni va yengillikni xis etasiz, o'z biznesingizni
                internet orqali ham rivojlantiring.
              </p>

              {/* statistic */}
              <div className="grid grid-cols-3 gap-8 mt-12 mb-10">

                <div data-aos="fade-up" data-aos-delay="320">
                  <p className="text-lg opacity-40">01</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Web site
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="240">
                  <p className="text-lg opacity-40">02</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Admin panel
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="260">
                  <p className="text-lg opacity-40">03</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Telegram bot
                  </p>
                </div>

              </div>

              {/* button */}
              <button
                data-aos="fade-up"
                data-aos-delay="320"
                className="px-6 h-12 bg-green-700 text-white rounded-lg
                    transition duration-300 hover:bg-green-800 hover:scale-105"
              >
                Ko'rish
              </button>

            </div>

          </div>

        </div>
        {/* list-three */}
        <div className="mt-16 mb-20"
          data-aos='fade-up'
          data-aos-delay='300'>

          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                className="w-full max-w-[600px] transition duration-500 hover:scale-110"
                src={matras}
                alt=""
              />
            </div>

            {/* Text */}
            <div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(0,9,74)] font-black tracking-wide mb-6">
                Osmondagi bolalar
              </h3>

              <p className="text-base sm:text-lg md:text-xl max-w-[600px] font-medium tracking-wide text-[rgb(0,9,74)] opacity-90">
                Biz ko'plab saytlarni dasturlash jarayonida shu va shu kabi
                ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganingizda
                o'zgacha qulaylikni va yengillikni xis etasiz, o'z biznesingizni
                internet orqali ham rivojlantiring.
              </p>

              {/* statistic */}
              <div className="grid grid-cols-3 gap-8 mt-12 mb-10">

                <div
                  data-aos='fade-up'
                  data-aos-delay='320'>
                  <p className="text-lg opacity-40">01</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Web site
                  </p>
                </div>

                <div
                  data-aos='fade-up'
                  data-aos-delay='240'>
                  <p className="text-lg opacity-40">02</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Admin panel
                  </p>
                </div>

                <div
                  data-aos='fade-up'
                  data-aos-delay='260'>
                  <p className="text-lg opacity-40">03</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Telegram bot
                  </p>
                </div>

              </div>

              {/* button */}
              <button
                data-aos='fade-up'
                data-aos-delay='320'
                className="px-6 h-12 bg-green-700 text-white rounded-lg
                transition duration-300
                hover:bg-green-800 hover:scale-105"
              >
                Ko'rish
              </button>

            </div>

          </div>

        </div>
        {/* list-four */}
        <div className="mt-16 mb-32" data-aos="fade-up" data-aos-delay="300">

          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Image */}
            <div className="overflow-hidden rounded-xl order-1 lg:order-2">
              <img
                className="w-full max-w-[600px] transition duration-500 hover:scale-110"
                src={sat3}
                alt=""
              />
            </div>

            {/* Text */}
            <div className="order-2 lg:order-1">

              <h3 className="text-3xl sm:text-4xl md:text-5xl text-[rgb(0,9,74)] font-black tracking-wide mb-6">
                Osmondagi bolalar
              </h3>

              <p className="text-base sm:text-lg md:text-xl max-w-[600px] font-medium tracking-wide text-[rgb(0,9,74)] opacity-90">
                Biz ko'plab saytlarni dasturlash jarayonida shu va shu kabi
                ajoyib saytlarni tuzamiz, siz bizning saytlardan foydalanayotganingizda
                o'zgacha qulaylikni va yengillikni xis etasiz, o'z biznesingizni
                internet orqali ham rivojlantiring.
              </p>

              {/* statistic */}
              <div className="grid grid-cols-3 gap-8 mt-12 mb-10">

                <div data-aos="fade-up" data-aos-delay="320">
                  <p className="text-lg opacity-40">01</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Web site
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="240">
                  <p className="text-lg opacity-40">02</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Admin panel
                  </p>
                </div>

                <div data-aos="fade-up" data-aos-delay="260">
                  <p className="text-lg opacity-40">03</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Telegram bot
                  </p>
                </div>

              </div>

              {/* button */}
              <button
                data-aos="fade-up"
                data-aos-delay="320"
                className="px-6 h-12 bg-green-700 text-white rounded-lg
                    transition duration-300 hover:bg-green-800 hover:scale-105"
              >
                Ko'rish
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Texnology