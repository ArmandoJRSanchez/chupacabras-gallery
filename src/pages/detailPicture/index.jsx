import { useContext, useEffect, useRef } from "react";
import { GalleryContext } from "../../context";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PictureDetail from "../../components/PictureDetail";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


export default function Detail() {
    const context = useContext(GalleryContext);
    const currentPath = window.location.hash;
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    // Extraemos el nombre de la imagen desde la ruta
    const picture = currentPath.split('/').filter(el => el !== '')[2];

    // Obtenemos los datos de la imagen correspondiente
    const pictureData = context.pictures?.find((pic) =>
        pic.title.toLowerCase() === picture.replace(/-/g, ' ').toLowerCase()
    );

    // Filtramos las imágenes del mismo artista
    const filteredPictures = context.pictures?.filter((item) =>
        item.artist.toLowerCase() === pictureData.artist.toLowerCase()
    );

    // Encontramos el índice de la imagen que coincide con 'picture'
    const defaultImageIndex = filteredPictures?.findIndex((item) =>
        item.title.toLowerCase() === picture.replace(/-/g, ' ').toLowerCase()
    );

    useEffect(() => {
        // Asegúrate de que sliderRef y defaultImageIndex existan antes de intentar mover el carrusel
        if (sliderRef.current && defaultImageIndex !== -1) {
            sliderRef.current.slickGoTo(defaultImageIndex);
        }
    }, [defaultImageIndex]);




    // Configuración del carrusel (Slider)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => {
            const newPicture = filteredPictures[current]?.title.replace(/\s+/g, '-');
            if (newPicture) {
                navigate(`/detail/${newPicture}`);
            }
        },
    };

    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full relative px-4 md:px-0 ">
                <Slider ref={sliderRef} {...settings}>
                    {filteredPictures?.map((item, index) => (
                        <PictureDetail key={index} item={item} />
                    ))}
                </Slider>
            </div>


            {/* Detalles de la obra actual */}
            <div className="flex flex-col items-center mt-8 w-full max-w-screen-lg px-4">
                <hr className="border-gray-300 my-2 w-full" />
                <h1 className="title-with-line font-bold text-3xl md:text-5xl text-center w-full">{pictureData.title}</h1>
                <div className="w-full flex flex-col md:flex-row justify-between items-center mt-6">
                    <div className="w-full md:w-80 flex flex-col justify-center items-center mb-6 md:mb-0">
                        <figure className="flex justify-center items-center">
                            <img
                                className="object-cover rounded-full w-32 h-32 md:w-40 md:h-40 p-6"
                                src={`/artists/${pictureData.artist}.png`}
                                alt={pictureData.artist || 'Artist'}
                            />
                        </figure>
                        <NavLink to={`/artists/${pictureData.artist.replace(/\s+/g, '-')}`}>
                            <h3 className="font-light underline text-lg md:text-xl uppercase">{pictureData.artist}</h3>
                        </NavLink>
                        <p className="text-gray-400 text-center md:text-left">{pictureData.originArtist || "Mexico City"}</p>
                    </div>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 w-full md:w-auto">
                        <p>Medium: {pictureData.medium || "N/A"}</p>
                        <p>Date: {pictureData.date || "N/A"}</p>
                        <p>Type: {pictureData.type || "N/A"}</p>
                        <p>Dimensions: {pictureData.dimensiones || "N/A"}</p>
                        <p>Available: {pictureData.available || "N/A"}</p>
                        <p>Price: $ {pictureData.price || "N/A"}</p>
                        <p>Category: {pictureData.category || "N/A"}</p>
                        <p>Material: {pictureData.material || "N/A"}</p>
                        <p>Description: {pictureData.description || "N/A"}</p>
                    </div>
                </div>

                <div className="w-full md:w-80 flex justify-center items-center p-6">
                    <button className="bg-transparent rounded-lg flex justify-between items-center w-full text-black border border-black py-3 px-6 hover:bg-black hover:text-white hover:shadow-lg">
                        Add to Cart
                        <FaShoppingBag />
                    </button>
                </div>

            </div>

        </div>
    );
}
