import { React, useContext, useEffect, useRef, useState } from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css';
import { GalleryContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';
import { FaExpand, FaTimes } from 'react-icons/fa';  // Íconos de expandir y cerrar

export default function Gallery() {
    const context = useContext(GalleryContext);
    const galleryRef = useRef([]);

    // Estado para controlar el modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);  // Imagen seleccionada

    const filteredPictures = context.filteredPictures || [];
    const lengthGallery = filteredPictures.length;

    const breakpointColumnsObj = lengthGallery < 6
        ? {
            default: lengthGallery,
            700: 1
        }
        : {
            default: 5,
            1700: 6,
            1600: 4,
            1300: 3,
            1100: 2,
            700: 1
        };

    // GSAP animación de entrada
    useEffect(() => {
        gsap.fromTo(
            galleryRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.in'
            }
        );
    }, [filteredPictures]);

    // Función para abrir el modal con la imagen seleccionada
    const openModal = (picture) => {
        setCurrentImage(picture);
        setIsModalOpen(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
            <div className='flex flex-col justify-center items-center w-3/4 mb-20'>
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">GALLERY</h1>
                <ul className='flex justify-center items-center w-full mt-20 gap-4'>
                    <li>
                        <button
                            onClick={() => context.setSearchByCategory(null)}
                            className='rounded-full border hover:bg-slate-200 py-2 px-6'
                        >
                            All
                        </button>
                    </li>
                    {context.categories?.map((category, index) => (
                        <li key={index}>
                            <button
                                onClick={() => context.setSearchByCategory(category)}
                                className='rounded-full border hover:bg-slate-200 py-2 px-6'
                            >
                                {category}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
                {filteredPictures.map((picture, index) => (
                    <NavLink to={`/detail/${encodeURI(picture.title.replace(/\s+/g, '-'))}`} key={index}>
                        <div
                            className="gallery-item hover:scale-105 hover:shadow-xl overflow-hidden z-1 relative"
                            ref={el => (galleryRef.current[index] = el)}  // Almacenar la referencia del elemento
                        >
                            <img
                                src={picture.src}
                                alt={picture.title}
                                className="w-full"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100">
                                <div className="text-center px-3">
                                    <p>{picture.title}</p>
                                    <p>{picture.artist}</p>
                                    {/* Botón de pantalla completa */}
                                    <button
                                        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openModal(picture);  // Abrir el modal
                                        }}
                                    >
                                        <FaExpand className="text-black" />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </NavLink>
                ))}
            </Masonry>

            {/* Modal para la imagen ampliada */}
            {isModalOpen && currentImage && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full mx-auto p-4">
                        {/* Botón para cerrar el modal */}
                        <button
                            className="absolute top-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
                            onClick={closeModal}
                        >
                            <FaTimes className="text-black" />
                        </button>
                        {/* Imagen ampliada con estilo ajustado */}
                        <img
                            src={currentImage.src}
                            alt={currentImage.title}
                            className="w-full h-auto max-h-[90vh] object-contain mx-auto"  // Aquí el ajuste
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
