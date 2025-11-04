
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons"

export default function FooterSection() {
    return (
        <div>
            <section className="bg-[#000000f5] bg-[url(src/assets/image/logo/maruya-bg.jpg)] bg-blend-darken py-14">
                <div className="md:w-7xl m-auto flex jusify-betweenn">
                    <div>
                        <p className="text-white text-xl mb-4">
                            Follow us
                        </p>
                        <div>
                            <FontAwesomeIcon icon={faSquareFacebook} size="2x" inverse />
                            <FontAwesomeIcon icon={faSquareXTwitter} size="2x" inverse  />
                            {/* <i className="fa-brands fa-square-facebook"></i> */}
                        </div>
                    </div>
                </div>
                {/* <img src="src/assets/main-image.png" alt="" /> */}
            </section>
        </div>
    )
}