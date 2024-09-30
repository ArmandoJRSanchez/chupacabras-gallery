import logo from "../../assets/images/logo.png"

export default function About() {
    return (
        <>
            <div className="mt-20 flex flex-col justify-center items-center gap-3">
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">ABOUT</h1>
                <img src={logo} alt="" className="w-1/6" />
                <p className="w-3/5 text-justify">
                    Chupacabras Studios is a collection of handpicked artists from all over the world, with a diverse range of multidisciplinary backgrounds, painting styles and approaches that have come together to create unique pieces of art. We specialize in making art and bringing it to everyone. Whether its an intimate portrait of you or a loved one, a group or family painting or a particular commission piece, our artists will create stunning and remarkable pieces that will last generations.
                </p>
            </div>
        </>
    )
}