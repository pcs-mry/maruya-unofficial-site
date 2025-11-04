
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"
import myrBg from '../assets/image/logo/maruya-bg.jpg'

const backgroundStyle = { backgroundImage: `url(${myrBg})` }

export default function FooterSection() {
    return (
        <div>
            <section className="bg-[#000000f5] bg-blend-darken py-14" style={backgroundStyle}>
                <div className="md:w-7xl m-auto flex jusify-betweenn">
                    <div>
                        <p className="text-white text-xl mb-4">
                            Follow us
                        </p>
                        <div>
                            <FontAwesomeIcon icon={faSquareFacebook} size="2x" inverse />
                            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" inverse />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}