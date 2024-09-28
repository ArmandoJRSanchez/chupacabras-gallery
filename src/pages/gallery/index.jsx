import { React, useContext, useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css';
import { GalleryContext } from '../../context';
import { NavLink } from 'react-router-dom';
import { gsap } from 'gsap';

export default function Gallery() {
    const context = useContext(GalleryContext);

    // Referencia para los items de la galería
    const galleryRef = useRef([]);

    // Verifica si filteredPictures está disponible, de lo contrario usa un arreglo vacío
    const filteredPictures = context.filteredPictures || [];

    // Longitud de las imágenes filtradas en la galería
    const lengthGallery = filteredPictures.length;

    // Configuración dinámica para las columnas basadas en la longitud de la galería
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

    // Usar GSAP para la animación de entrada de los elementos de la galería
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

    return (
        <>
            <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
                <div className='flex flex-col justify-center items-center w-3/4 mb-20'>
                    <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">GALLERY</h1>
                    <ul className='flex justify-center items-center w-full mt-20 gap-4'>
                        <li>
                            <a onClick={(event) => {
                                event.preventDefault();
                                context.setSearchByCategory(null);
                            }} className='rounded-full border hover:bg-slate-200 py-2 px-6' href="">All</a>
                        </li>
                        {context.categories?.map((category, index) => (
                            <li key={index}>
                                <a onClick={(event) => {
                                    event.preventDefault();
                                    context.setSearchByCategory(category);
                                }} className='rounded-full border hover:bg-slate-200 py-2 px-6' href="">{category}</a>
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
                                className="gallery-item hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden z-10"
                                ref={el => galleryRef.current[index] = el}  // Guardar la referencia del elemento
                            >
                                <img
                                    src={picture.src}
                                    alt={picture.title}
                                    style={{ width: '100%' }}
                                />
                                <div className="flex justify-between items-center px-3 py-2 bg-black text-white">
                                    <p>{picture.title}</p>
                                    <p>{picture.artist}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </Masonry>
            </div>
        </>
    );
}
