import { React, useContext } from 'react';
import Masonry from 'react-masonry-css';
import './Gallery.css'; // Asegúrate de agregar los estilos personalizados si es necesario.
import { GalleryContext } from '../../context';
import { NavLink } from 'react-router-dom';


// Configuración para las columnas en diferentes tamaños de pantalla
const breakpointColumnsObj = {
    default: 5,
    1600: 4,
    1300: 3,
    1100: 2,
    700: 1
};

export default function Gallery() {
    const context = useContext(GalleryContext)
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
                <div className='flex flex-col justify-center items-center w-3/4 mb-20'>
                    <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">GALLERY</h1>
                    <ul className='flex justify-center items-center w-full mt-20 gap-4'>
                        <li>
                            <a onClick={(event) => {
                                event.preventDefault()
                                context.setSearchByCategory(null)
                            }} className='rounded-full border hover:bg-slate-200 py-2 px-6' href="">All</a>
                        </li>
                        {
                            context.categories?.map((category, index) => (
                                <li key={index}>
                                    <a onClick={(event) => {
                                        event.preventDefault()
                                        context.setSearchByCategory(category)
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
                    {context.filteredPictures?.map((picture, index) => (
                        <NavLink to={`/detail/${encodeURI(picture.title)}`} key={index}>
                            <div className="gallery-item hover:scale-105 hover:shadow-xl rounded-lg overflow-hidden z-10">
                                <img
                                    src={picture.src}
                                    alt={picture.title}
                                    style={{ width: '100%' }}
                                />
                                <div className="flex justify-between items-center px-3 py-2 bg-black text-white">
                                    <h3>{picture.title}</h3>
                                    <p>{picture.artist}</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </Masonry>
            </div >
        </>
    );
}
