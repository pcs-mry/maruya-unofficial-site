import logoFarmhouse from '../assets/image/sponsors/logo-farmhouse.png'
import logoKate from '../assets/image/sponsors/logo-kate.png'
import logoWaseda from '../assets/image/sponsors/logo-waseda.png'

export default function SponsorsSection() {
    return (
        <div>
            <section className="bg-black py-14">
                <div className="m-auto md:w-5xl flex justify-between items-center">
                    <div className="w-56">
                        <img className="w-full h-auto" src={logoKate} alt="" />
                    </div>
                    <div className="w-56">
                        <img className="w-full h-auto" src={logoFarmhouse} alt="" />
                    </div>
                    <div className="w-56">
                        <img className="w-full h-auto" src={logoWaseda} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}