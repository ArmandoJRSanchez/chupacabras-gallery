import { useContext } from "react";
import { GalleryContext } from "../../context";


const ArtistDetail = ({ title }) => {
    const context = useContext(GalleryContext)
    const name = title.split(' ');
    let fullName = '';

    name.map((item) => {
        fullName += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
    });

    fullName = fullName.trim();

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 mt-20">
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center uppercase">{fullName}</h1>

                <div className="flex">
                    <figure className="w-80 h-80">
                        <img className="object-cover" src={`/artists/${fullName}.png`} alt="" />
                    </figure>
                </div>
            </div>
        </>
    )
}

export default ArtistDetail