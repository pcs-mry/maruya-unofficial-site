
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { socialmedia } from "../data-assets/socialmedia"
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
                            <ul className="list-none text-white">
                                {
                                    socialmedia.data.map((socialData, index) => (
                                        <li className={index < socialmedia.data.length ? 'mb-4' : ''} key={index}>
                                            <a href={socialData.snsName === 'email' ? `mailto:${socialData.url}` : socialData.url} target="_blank">
                                                <p className="flex items-center text-xl">
                                                    <FontAwesomeIcon className="mr-2" icon={socialData.icon} size="2x" inverse />
                                                    <span>
                                                        {socialData.accountTextName}
                                                    </span>
                                                </p>
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}