import { Link } from "react-router-dom";


export default function Artists() {
    return (
        <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
            <div className='flex flex-col justify-center items-center w-3/4 mb-20'>
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">Artists</h1>
                <p className="text-center text-xl">
                    Chupacabras Galeria and Studio is constantly working hard to create a platform for artists in order to support them and catapult their work into new levels. Here you can browse our growing members that have added works to the collection and see who is open to commission. You can explore each artist profile, biography and collection of works as well as request a commission through the studio.
                </p>
            </div>

            <div className="grid gap-3 grid-cols-3 w-full h-96 max-w-screen-lg">
                <Link to="/artist/jose-arias">
                    <div className="bg-white cursor-pointer w-80 h-96 rounded-lg p-3 shadow-xl hover:scale-105">
                        <figure className="relative mb-2 w-full h-1/2">
                            <img className="w-full h-full object-cover rounded-lg" src="/artists/Jose Arias.png" alt="Jose Arias" />
                        </figure>
                        <div className="flex flex-col h-20">
                            <span className="text-sm font-light">Jose Arias</span>
                            <span className="text-lg font-medium">Painter</span>
                            <p className="text-justify">
                                Jose Arias is a Mexican painter who has been painting for over 20 years. He has participated in several exhibitions in Mexico and the United States.
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/artist/marina-poltavets">
                    <div className="bg-white cursor-pointer w-80 h-96 rounded-lg p-3 shadow-xl hover:scale-105">
                        <figure className="relative mb-2 w-full h-3/5">
                            <img className="w-full h-full object-cover rounded-lg" src="/artists/Marina Poltavets.png" alt="Marina Poltavets" />
                        </figure>
                        <div className="flex flex-col h-20">
                            <span className="text-sm font-light">Marina Poltavets</span>
                            <span className="text-lg font-medium">Painter</span>
                            <p className="text-justify">
                                Marina Poltavets is a Mexican painter who has been painting for over 20 years. She has participated in several exhibitions in Mexico and the United States.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}
