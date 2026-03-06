import bolalar from "../assets/bolalar.png"

const Texnology = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mt-24">

        <h2 className="text-[rgb(0,9,74)] text-xl sm:text-2xl md:text-3xl font-bold mb-3 tracking-wide">
          Bizning
        </h2>

        <p className="text-[rgb(0,9,74)] text-3xl sm:text-4xl md:text-5xl font-black tracking-wide">
          Loyihalarimiz
        </p>

        {/* list */}
        <div className="mt-16 mb-20">

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

                <div>
                  <p className="text-lg opacity-40">01</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Web site
                  </p>
                </div>

                <div>
                  <p className="text-lg opacity-40">02</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Admin panel
                  </p>
                </div>

                <div>
                  <p className="text-lg opacity-40">03</p>
                  <p className="text-xl sm:text-2xl text-[rgb(0,9,74)] font-bold">
                    Telegram bot
                  </p>
                </div>

              </div>

              {/* button */}
              <button
                className="px-6 h-12 bg-green-700 text-white rounded-lg
                transition duration-300
                hover:bg-green-800 hover:scale-105"
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