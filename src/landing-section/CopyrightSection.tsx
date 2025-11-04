
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCopyright } from "@fortawesome/free-regular-svg-icons"

export default function CoprightSection() {
    return (
        <div>
            <section className="bg-black py-4">
                <div className="md:w-7xl m-auto flex jusify-betweenn">
                    <div>
                        <p className="text-white text-md">
                            <FontAwesomeIcon icon={faCopyright} />
                            2025 MARUYA
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}