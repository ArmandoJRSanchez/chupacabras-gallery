import { NavLink } from "react-router-dom"
import './styles.css'

const Sidebar = () => {
    return (
        <>
            <section className="sidebar bg-black w-72 h-screen fixed rounded-e-xl p-6">
                <nav className="text-white mt-20">
                    <ul className="flex flex-col gap-3">
                        <NavLink to="./dashboard">
                            <li className="rounded-lg p-3 hover:bg-white/15 cursor-pointer">
                                Dashboard
                            </li>
                        </NavLink>
                        <NavLink to="./gallery">
                            <li className="rounded-lg p-3 hover:bg-white/15 cursor-pointer">
                                Gallery
                            </li>
                        </NavLink>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default Sidebar