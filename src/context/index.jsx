import { createContext, useState, useEffect } from "react"

export const GalleryContext = createContext()



export const GalleryProvider = ({ children }) => {
    const dataPictures = [
        {
            title: "3 Stones",
            artist: "Jose Arias",
            medium: "Oil",
            date_created: "2024-07-18",
            size: "S",
            description: "Pleinair painting",
            price: 600,
            category: "Landscape",
            purchase: false,
            material: "Canvas Board",
            src: "/pinturas/3 Stones.jpg",
            width: 100,
            height: 300
        },
        {
            title: "Blue White Vase",
            artist: "Jose Arias",
            medium: "Oil",
            date_created: "2024-06-02",
            size: "XS",
            description: "Still Life of a Vase",
            price: 600,
            category: "Still Life",
            purchase: false,
            material: "Wood",
            src: "/pinturas/Blue White Vase.jpg",
            width: 300,
            height: 400
        },
        {
            title: "Secret Beach",
            artist: "Jose Arias",
            medium: "Oil",
            date_created: "2024-07-11",
            size: "S",
            description: "Plein air of a hidden beach",
            price: 700,
            category: "Landscape",
            purchase: false,
            material: "Canvas Board",
            src: "/pinturas/Secret Beach.jpg",
            width: 200,
            height: 100
        },
        {
            title: "Swamp",
            artist: "Jose Arias",
            medium: "Oil",
            date_created: "2024-08-03",
            size: "S",
            description: "Plein air painting",
            price: 700,
            category: "Landscape",
            purchase: false,
            material: "Canvas Board",
            src: "/pinturas/Swamp.jpg",
            width: 150,
            height: 300
        },
        {
            title: "Green Waves",
            artist: "Jose Arias",
            medium: "Oil",
            date_created: "2024-07-14",
            size: "S",
            description: "Waves Plain Air Painting",
            price: 600,
            category: "Landscape",
            purchase: false,
            material: "Canvas Board",
            src: "/pinturas/Green Waves.jpg",
            width: 250,
            height: 450
        },
        {
            title: "Montañas",
            artist: "Andres Garcia",
            medium: "Oil",
            date_created: "Date Created",
            size: "XS",
            description: "Mountainscape",
            price: "Price",
            category: "Landscape",
            purchase: false,
            material: "Wood",
            src: "/pinturas/Montañas.jpg",
            width: 200,
            height: 300
        },
        {
            title: "Volcanes Mujer Dormida",
            artist: "Andres Garcia",
            medium: "Oil",
            date_created: "Date Created",
            size: "XS",
            description: "Volcanic Landscape",
            price: "Price",
            category: "Landscape",
            purchase: false,
            material: "Wood",
            src: "/pinturas/Volcanes Mujer Dormida.jpg",
            width: 230,
            height: 400
        },
        {
            title: "Sleeping",
            artist: "Jose Arias",
            medium: "Digital Limited Print",
            date_created: "2024-08-04",
            size: "M",
            description: "2 Women Sleeping",
            price: 500,
            category: "Scene",
            purchase: false,
            material: "Digital Painting",
            src: "/pinturas/Sleeping.jpg",
            width: 270,
            height: 300
        },
        {
            title: "Fisherwoman",
            artist: "Jose Arias",
            medium: "Digital Limited Print",
            date_created: "2024-08-20",
            size: "M",
            description: "Fisherwoman on pier",
            price: 500,
            category: "Scene",
            purchase: false,
            material: "Digital Painting",
            src: "/pinturas/Fisherwoman.jpg",
            width: 400,
            height: 600
        },
        {
            title: "Old Man Portrait",
            artist: "Marina Poltavets",
            medium: "Digital Limited Print",
            date_created: "2023-01-04",
            size: "M",
            description: "Study of an old man",
            price: 600,
            category: "Portrait",
            purchase: false,
            material: "Digital Painting",
            src: "/pinturas/Old Man Portrait.jpg",
            width: 150,
            height: 350
        },
        {
            title: "Portrait of a Woman with a Scarf",
            artist: "Marina Poltavets",
            medium: "Digital Limited Print",
            date_created: "2023-03-23",
            size: "M",
            description: "Study of a woman with a scarf",
            price: 600,
            category: "Portrait",
            purchase: false,
            material: "Digital Painting",
            src: "/pinturas/Portrait of a Woman with a Scarf.jpg",
            width: 300,
            height: 500
        },
        {
            title: "Swimming",
            artist: "Jose Arias",
            medium: "Digital Limited Print",
            date_created: "2024-08-27",
            size: "M",
            description: "Painting of a woman swimming",
            price: 700,
            category: "Scene",
            purchase: false,
            material: "Digital Painting",
            src: "/pinturas/Swimming.jpg",
            width: 400,
            height: 600
        },
    ];

    const dataCategories = [...new Set(dataPictures.map(picture => picture.category))];

    const [categories, setCategories] = useState(dataCategories)


    // get pictures gallery
    const [pictures, setPictures] = useState(dataPictures)
    // get pictures by title 
    const [searchByTitle, setSearchByTitle] = useState(null)
    // get pictures by category
    const [searchByCategory, setSearchByCategory] = useState(null)
    // get pictures by artists
    const [searchByArtists, setSearchByArtists] = useState(null)
    // filtredby 
    const [filteredPictures, setFilteredPictures] = useState(null)

    // function for filtred pictures by title
    const filteredPicturesByTitle = (pictures, searchByTitle) => {
        return pictures?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    // function for filtred gallery category 
    const filteredPicturesByCategory = (pictures, searchByCategory) => {
        return pictures?.filter((item) => item.category.toLowerCase().includes(searchByCategory.toLowerCase()))
    }
    // function for filtred gallery artists 
    const filteredPicturesByArtists = (pictures, searchByArtists) => {
        return pictures?.filter((item) => item.artist.toLowerCase().includes(searchByArtists.toLowerCase()))
    }

    const filterBy = (searchType, pictures, searchByTitle, searchByCategory, searchByArtists) => {
        if (searchType === 'BY_TITLE') {
            return filteredPicturesByTitle(pictures, searchByTitle)
        }
        if (searchType === 'BY_CATEGORY') {
            return filteredPicturesByCategory(pictures, searchByCategory)
        }
        if (searchType === 'BY_ARTIST') {
            return filteredPicturesByArtists(pictures, searchByArtists)
        }
        if (searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredPicturesByCategory(pictures, searchByCategory).filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }
        if (!searchType || searchType === undefined) {
            return pictures
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredPictures(filterBy('BY_TITLE_AND_CATEGORY', pictures, searchByTitle, searchByCategory, searchByArtists))
        if (searchByTitle && !searchByCategory) setFilteredPictures(filterBy('BY_TITLE', pictures, searchByTitle, searchByCategory, searchByArtists))
        if (!searchByTitle && searchByCategory) setFilteredPictures(filterBy('BY_CATEGORY', pictures, searchByTitle, searchByCategory, searchByArtists))
        if (!searchByTitle && !searchByCategory && searchByArtists) setFilteredPictures(filterBy('BY_ARTIST', pictures, searchByTitle, searchByCategory, searchByArtists))
        if (!searchByTitle && !searchByCategory && !searchByArtists) setFilteredPictures(filterBy(null, pictures, searchByTitle, searchByCategory, searchByArtists))
    }, [pictures, searchByTitle, searchByCategory, searchByArtists])


    return (
        <GalleryContext.Provider value={{
            pictures,
            setPictures,
            searchByCategory,
            setSearchByCategory,
            filteredPictures,
            setSearchByTitle,
            categories,
            setCategories,
            searchByArtists,
            setSearchByArtists
        }}>
            {children}
        </GalleryContext.Provider>
    )
}