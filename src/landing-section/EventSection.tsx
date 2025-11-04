import myrBg from '../assets/image/logo/maruya-bg.jpg'
import myr43Banner from '../assets/image/convention/mry-43.jpg'
import myr44Banner from '../assets/image/convention/mry-44.jpg'


const backgroundStyle = { backgroundImage: `url(${myrBg})` }

export default function EventSection() {
    return (
        <div>
            <section className="py-14" style={backgroundStyle}>
                <h1 className="font-bold text-center text-5xl mb-14 mx-auto">Upcoming Event</h1>

                <div className="m-auto md:w-7xl">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <img src={myr43Banner} alt="" />
                        </div>
                        <div>
                            <img src={myr44Banner} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}