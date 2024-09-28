import { useContext, useRef, useEffect } from "react";
import { GalleryContext } from "../../context";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Detail() {
    const context = useContext(GalleryContext);
    const currentPath = window.location.pathname;

    let picture = currentPath.split('/').filter(el => el !== '')[1];

    const containerRef = useRef(null);
    const imageRefs = useRef([]);

    // Usamos find() en lugar de filter() para obtener un solo objeto en lugar de un array
    const pictureData = context.filteredPictures?.find((pic) => pic.title.toLowerCase() === picture.replace(/-/g, ' ').toLowerCase());

    useEffect(() => {
        // Animación de entrada para las imágenes
        gsap.from(imageRefs.current, {
            opacity: 0,
            y: 50,
            stagger: 0.1,
            duration: 1,
            ease: "power3.out"
        });
    }, []);


    const addToRefs = (el) => {
        if (el && !imageRefs.current.includes(el)) {
            imageRefs.current.push(el);
        }
    };

    return (
        <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
            <h1 className="title-with-line font-light uppercase text-3xl md:text-5xl text-center">
                {pictureData?.title || 'Unknown'}
            </h1>

            <div className="flex flex-col lg:flex-row justify-center items-center mt-12 w-full max-w-screen-lg">
                <div className="lg:w-1/2 w-full flex justify-center items-center mb-8 lg:mb-0">
                    <figure className="w-3/4">
                        <img className="p-6 w-full" src={`/pinturas/${pictureData?.title}.jpg`} alt={pictureData?.title || 'Image'} />
                    </figure>
                </div>
                <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-center lg:items-start">
                    <figure className="flex justify-center items-center ">
                        <img className="object-cover rounded-full w-40 h-40 p-6" src={`/artists/${pictureData?.artist}.png`} alt={pictureData?.artist || 'Artist'} />
                    </figure>
                    <NavLink to={`/artists/${pictureData?.artist.replace(/\s+/g, '-')}`}>
                        <h3 className="font-light underline text-xl uppercase">{pictureData?.artist}</h3>
                    </NavLink>
                    <p className="text-gray-400 text-center lg:text-left">{pictureData?.originArtist || "Mexico City"}</p>

                    <div className="ml-0 lg:ml-6 mt-6 flex gap-3 flex-col w-full lg:w-auto">
                        <p> Medium: {pictureData?.medium || "N/A"}</p>
                        <p> Date: {pictureData?.date || "N/A"}</p>
                        <p> Type: {pictureData?.type || "N/A"}</p>
                        <p> Dimensions: {pictureData?.dimensiones || "N/A"}</p>
                        <p> Available: {pictureData?.avalible || "N/A"}</p>
                        <p> Price: {pictureData?.price || "N/A"}</p>
                        <p> Category: {pictureData?.category || "N/A"}</p>
                        <p> Material: {pictureData?.material || "N/A"}</p>
                        <p> Description: {pictureData?.description || "N/A"}</p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
                        <button className="bg-black rounded-lg flex justify-between items-center w-full text-white py-3 px-6 hover:bg-gray-600 hover:shadow-lg">
                            Comprar
                            <FaShoppingBag />
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="uppercase font-bold text-2xl w-auto my-6">More from this artist</h1>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 w-full max-w-screen-lg">
                {
                    context.pictures?.filter((picture) => picture.artist.toLowerCase() === pictureData?.artist.toLowerCase()).map((item, i) => {
                        return (
                            <NavLink className="flex justify-center items-center" key={i} to={`/detail/${item.title.replace(/\s+/g, '-')}/#`}>
                                <figure
                                    ref={addToRefs}
                                    className="bg-white cursor-pointer flex justify-center items-center overflow-hidden w-32 h-32 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300">
                                    <img className="w-full h-full object-cover" src={`/pinturas/${item.title}.jpg`} alt="" />
                                </figure>
                            </NavLink>
                        )
                    })
                }
            </div>
        </div>
    );
}
