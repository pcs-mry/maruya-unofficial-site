import VideoBackground from "../component/VideoBackground"
import CountdownTimer from "../component/CountdownTimer"
export default function HeroSection() {
    const nextEvent = new Date('May 19, 2026 12:10:52');

    return (
        <>
            <div className="relative w-full h-[calc(100svh-120px)] py-14">
                {/* <div className="bg-[#143c5782] bg-[url(src/assets/image/convention/004.jpg)] bg-blend-luminosity w-full h-screen py-14 bg-cover"> */}
                <VideoBackground></VideoBackground>
                <section className="m-auto md:w-9/10 grid grid-cols-2 gap-4">
                    <div>
                        {/* <img src="src/assets/image/logo/maruya-logo.png" alt="" /> */}
                    </div>
                    <div>
                        <div className="p-8 w-2xl text-right text-white">
                            <h1 className="font-bold text-5xl mb-3">Welcome to MARUYA</h1>
                            <h2 className="text-2xl">Where Imagination Comes to Life</h2>
                            <p className="text-xl mt-4">
                                Join Thailand's largest community of creators and fans!
                                Explore the Artist Circle Zone for unique fan-made goods,
                                snap photos with dazzling cosplayers,
                                and enjoy non-stop stage entertainment. Celebrate your passion with us.
                            </p>

                        </div>
                    </div>
                </section>
                <section className="m-auto md:w-9/10">
                    <h1 className="text-center font-bold text-5xl text-white my-5">
                        MARK YOUR DATE!!
                    </h1>
                    <div className="flex justify-center">
                        <CountdownTimer targetDate={nextEvent} />
                    </div>
                </section>
            </div >
        </>
    )
}