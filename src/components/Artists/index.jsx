import { useContext } from "react";
import { GalleryContext } from "../../context";


const ArtistDetail = () => {
    const currentPath = window.location.hash;
    const context = useContext(GalleryContext)
    const name = currentPath.split('/')[2].replace('-', ' ');

    let fullName = '';

    name.split(' ').map((item) => {
        fullName += item.charAt(0).toUpperCase() + item.slice(1) + ' ';
    });

    fullName = fullName.trim();


    return (
        <>
            <div className="flex flex-col justify-center items-center gap-4 mt-20">
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center uppercase">{fullName}</h1>

                <div className="w-10/12 md:flex justify-center items-center mx-auto">
                    <div className="w-full md:w-1/2 h-full flex justify-center p-16">
                        <img className="object-cover" src={`/artists/${fullName}.png`} alt="" />
                    </div>
                    <div className="w-full md:w-1/2 p-6 text-justify h-full">
                        <h3 className="text-4xl font-bold">About me</h3>
                        <p>José Arias is a multidisciplinary artist with over 10 years of experience in the animation, film and games industries. He graduated from Simon Fraser University with a Bachelor of Fine Arts and also studied figurative drawing and painting in the Barcelona Academy of Art.

                            Although his work primarily centers around digital practice, he has an avid passion for Plein Air painting and has been developing his work throughout several years of connecting multiple artistically visual territories.

                            He believes that no matter the medium, studying the great masters and dedicating oneself to hone the craft of drawing and painting, one can amplify the many ways in which one is able to visually represent anything.

                            He is the founder of Chupacabra Studio Galleries.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ArtistDetail