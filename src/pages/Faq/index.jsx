const faqs = [
    {
        question: "How does Chupacabras Galeria and Studio work? Is it a studio or a gallery?",
        answer: "Chupacabras is both a gallery where artists are able to show their work and exhibit their projects, as well as a studio or platform where anyone can request a commissioned piece to be created for them or their organization. The studio also serves as a platform to connect artists with potential clients, to expand culture and appreciation for figurative, realist and modern art, and to catapult emerging and established artists into a modern changing world while safeguarding traditional techniques, styles and approaches of painting, drawing and sculpture."
    },
    {
        question: "Does the gallery have a physical location?",
        answer: "The gallery is currently an online platform. However, we establish pop up events often which serve to display and promote the works of our artists. These are in physical locations where one can enjoy and see the pieces in real life. We believe that there is nothing compared to appreciating the work of an artist as being physically present in the same room."
    },
    {
        question: "Can I purchase any work from the gallery?",
        answer: "All the pieces that are available to be purchased can be found in the shop. However, not all of the pieces in the gallery are available for purchase due to the fact that some of them have been sold, they belong in a private collection or the artist merely wishes to display the work but not sell it in the meantime. The details of every piece and their availability are on display in each of the work’s detail section."
    },
    {
        question: "How do you select artists?",
        answer: "Artists and their work are selected based primarily on their body of work. The curation process is based on how the work is created and how this aligns to the mission statement of the gallery. Given that we are working hard to spread the appreciation of culture and fine art while attempting to revive the values and techniques of academic painting, drawing and sculpting, we do not accept contemporary art in the majority of cases. We believe that the honing of an artist’s skill is imperative to the development and expression of said artist’s ideas and feelings. Therefore, skill, technique and style play vital roles in our selection process."
    },
    {
        question: "How do I know that the artist really made the piece?",
        answer: "All artworks that are displayed and sold in the gallery and studio include an official certificate that has been signed by both the artist and the gallery. Whenever a piece is sold, the owner will obtain said certificate alongside the artist’s signature (if possible). Even if the piece is a limited print, the certificate will be included."
    },
    {
        question: "How do I join the studio as an artist, and how do you pick who joins?",
        answer: "If you are an artist, we encourage you to apply via the join section by filling in the details and sending a sample of your main body of work. We are always looking to expand our gallery with more works from artists and to bolster the careers of artists. Selection and curation process is based on the skill, development and body of work that an applicant has. We also have a short interview with the artist to know more about them once their work has been submitted and selected."
    },
    {
        question: "Do I need to have academic training as an artist to join?",
        answer: "No. You are not required to have gone to a particular academy or university. However, the artist must be able to have a high level of understanding of academic drawing, painting and / or sculpting techniques. Even if the artist has developed their own style, which is absolutely encouraged, they are required to have a thorough understanding of form, volume, structure, values and color."
    },
    {
        question: "Why is contemporary art not included in either the studio or the gallery?",
        answer: "We believe that the modern world has a vast collection of spaces and galleries where contemporary art can be displayed and submitted. However, the philosophy and mission statement of Chupacabras is centered around the revival, support and dissemination of art that is not merely for art’s sake. We are committed to reviving the values and education of realist, academic and well rounded techniques in art practices that augment our modern culture."
    },
    {
        question: "How do I join a workshop?",
        answer: "Workshops are short events that the studio organizes in order to promote art education. They are diverse in theme and can either be online or in person. You can find more about these events by subscribing to our newsletter or checking out the events calendar."
    },
    {
        question: "Why is contemporary art not included in either the studio or the gallery?",
        answer: "We believe that the modern world has a vast collection of spaces and galleries where contemporary art can be displayed and submitted. However, the philosophy and mission statement of Chupacabras is centered around the revival, support and dissemination of art that is not merely for art’s sake. We are committed to reviving the values and education of realist, academic and well rounded techniques in art practices that augment our modern culture."
    },
    {
        question: "I have more questions not covered in this FAQ, where can I find more information?",
        answer: "Feel free to join our newsletter to keep up to date with information regarding the gallery and studio. Otherwise, reach out to us via the contact email section with all your questions."
    },
];

const Faq = () => {
    return (
        <>
            <div className="mx-auto flex justify-center items-center flex-col my-20">
                <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">Frequently Asked Questions</h1>
                <div className="mt-8 space-y-6 w-2/3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b pb-4 cursor-pointer">
                            <h2
                                className="text-xl font-semibold text-gray-800"
                            >
                                {faq.question}
                            </h2>
                            <hr className="border-gray-300 my-2" />
                            <div
                                className={`overflow-hidden transition-max-height duration-500 ease-in-out max-h-40`}
                            >
                                <p className="mt-2 text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Faq