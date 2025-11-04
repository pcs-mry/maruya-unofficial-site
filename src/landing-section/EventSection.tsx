export default function EventSection() {
    return (
        <div>
            <section className="bg-[url(src/assets/image/logo/maruya-bg.jpg)] py-14 min-h-108">
                <h1 className="font-bold text-center text-5xl mb-14 mx-auto">Upcoming Event</h1>

                <div className="m-auto md:w-7xl">
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <img src="src/assets/image/convention/mry-43.jpg" alt="" />
                        </div>
                        <div>
                            <img src="src/assets/image/convention/mry-44.jpg" alt="" />
                        </div>
                    </div>
                </div>
                {/* <img src="src/assets/main-image.png" alt="" /> */}
            </section>
        </div>
    )
}