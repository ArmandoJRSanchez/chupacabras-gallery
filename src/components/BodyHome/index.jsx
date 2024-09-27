import img1 from '../../assets/galeria/Commissions.jpg'
import img2 from '../../assets/galeria/Blog.jpg'
import img3 from '../../assets/galeria/Gallery.jpg'
import { NavLink } from 'react-router-dom'

const BodyHome = () => {
    return (
        <section className="w-full h-auto flex flex-col justify-between items-center mt-10 p-4">
            <div className="flex flex-col justify-center items-center w-3/4">
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">CHUPACABRAS</h1>
                <p className='my-8 text-lg md:text-xl text-justify'>
                    Chupacabras is a gallery and studio platform, focusing on figurative style painting, drawing, and art making. We are a group of international artists, painters, illustrators, and sculptors that have been mastering their craft through years of practice. We offer commission services where our clients can request carefully handmade pieces of work. Chupacabras also has a growing gallery collection from where anyone can purchase a masterfully made piece, already in existence. Our selection of works is unique, and you can explore a wide and diverse range of art pieces at your leisure.
                </p>
                <div className="flex flex-col md:flex-row gap-6 p-2 w-full justify-center">
                    <NavLink to="/blog">
                        <article className='flex flex-col items-center text-justify justify-start hover:shadow-lg hover:scale-105 px-6 py-20 rounded-lg cursor-pointer'>
                            <h3 className='font-bold text-2xl md:text-3xl mb-4'>Blog</h3>
                            <img className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mb-4" src={img1} alt="Blog" />
                            <p className="text-sm md:text-base">
                                The blog section will keep you both informed of future events, exhibitions, and pop-up sales that the gallery creates, as well as provide you with news and posts related to artists and pieces. Educational workshops and courses will also be located here. You can also join our newsletter to keep up to date with the gallery and studio.
                            </p>
                        </article>
                    </NavLink>
                    <NavLink to="/gallery">
                        <article className='flex flex-col items-center text-justify justify-start hover:shadow-lg hover:scale-105 px-6 py-20 rounded-lg cursor-pointer'>
                            <h3 className='font-bold text-2xl md:text-3xl mb-4'>Gallery</h3>
                            <img className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mb-4" src={img2} alt="Gallery" />
                            <p className="text-sm md:text-base">
                                Explore our growing collection of works by a wide variety of artists with their own unique styles. The gallery is divided into categories and it also provides detailed information of each artwork displayed.
                            </p>
                        </article>
                    </NavLink>
                    <NavLink to="/commissions">
                        <article className='flex flex-col items-center text-justify justify-start hover:shadow-lg hover:scale-105 px-6 py-20 rounded-lg cursor-pointer'>
                            <h3 className='font-bold text-2xl md:text-3xl mb-4'>Commissions</h3>
                            <img className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full mb-4" src={img3} alt="Commissions" />
                            <p className="text-sm md:text-base">
                                Chupacabras serves as a studio platform that encourages the development of art and culture. Therefore, it serves as a portal where anyone can commission a work of art from us and our artists. We believe in inciting the creation of artwork and that the direct participation of our patrons enriches the modern culture that we live in.
                            </p>
                        </article>
                    </NavLink>

                </div>
            </div>
        </section>
    )
}

export default BodyHome;
