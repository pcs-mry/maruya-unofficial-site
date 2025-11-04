import './HeaderMenu.css'

export default function HeaderMenu() {
    return (
        <>
            <div className="header-menu m-auto w-full block fixed top-0 shadow-xl/20">
                <section className="m-auto py-5 md:w-7xl content-center flex justify-between">
                    <a href="#">
                        <img
                            className='w-[120px]'
                            src="src/assets/image/logo/maruya-logo.png" alt=""
                        />
                    </a>
                    <ul className="text-white flex items-center justify-center">
                        <li className="pl-4 text-center">
                            <a className='align-text-top' href="#">
                                HOME
                            </a>
                        </li>
                        <li className="pl-4 text-center">
                            <a className='align-text-top' href="#">
                                LOREM
                            </a>
                        </li>
                        <li className="pl-4 text-center">
                            <a className='align-text-top' href="#">
                                IPSOM
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
        </>
    )
}