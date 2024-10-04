import { useRef, useState, useEffect } from "react";
import { BiZoomOut } from "react-icons/bi";

const PictureDetail = ({ item }) => {


    const imgRef = useRef(null); // Referencia a la imagen

    const [scale, setScale] = useState(1);

    const handleWheel = (event) => {
        event.preventDefault(); // Evita el desplazamiento de la página
        const newScale = scale + event.deltaY * -0.001; // Ajusta la velocidad del zoom
        setScale(Math.min(Math.max(newScale, 1), 3)); // Limita el zoom entre 1x y 3x
    };

    useEffect(() => {
        const imgElement = imgRef.current;

        if (imgElement) {
            // Agregar el event listener con passive: false
            imgElement.addEventListener('wheel', handleWheel, { passive: false });
        }

        // Limpieza para eliminar el event listener cuando el componente se desmonta
        return () => {
            if (imgElement) {
                imgElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, [scale]); // Asegúrate de que useEffect escuche los cambios de 'scale'

    return (
        <div className="w-full h-auto flex justify-center items-center flex-important relative">
            <img
                ref={imgRef}
                className="transition-transform duration-300 hover:cursor-zoom-in focus:cursor-move"
                src={`/pinturas/${item.title}.jpg`}
                alt={item.title}
                style={{
                    transform: `scale(${scale})`,
                    height: 600
                }} // Aplica la transformación de escala
            />
            <span
                className="absolute bottom-4 z-10 right-2/3 w-auto h-auto p-1 border shadow-xl rounded-full bg-white cursor-pointer"
                onClick={() => setScale(1)} // Resetea el zoom al hacer clic en el botón
            >
                <BiZoomOut />
            </span>
            <span
                className="absolute bottom-4 z-10 right-96 w-auto h-auto px-3 shadow-xl rounded-full bg-black/40 text-white "
            >
                Mouse hover and scroll to Zoom
            </span>
        </div>
    );
}

export default PictureDetail;
