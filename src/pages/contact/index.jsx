export default function Contact() {
    return (
        <>
            <div className='w-full h-auto flex flex-col justify-between items-center mt-20 p-4'>
                <div className='flex flex-col justify-center items-center w-3/4 mb-4'>
                    <h1 className="title-with-line font-bold text-4xl md:text-5xl text-center">CONTACT</h1>
                </div>
                <div className="w-full flex items-start bg-white px-6 lg:px-8">
                    <form action="#" method="POST" className="w-4/6 px-32">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                                <div className="mt-2.5">
                                    <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
                                <div className="relative mt-2.5">
                                    <div className="absolute inset-y-0 left-0 flex items-center">
                                        <label htmlFor="country" className="sr-only">Country</label>
                                        <select id="country" name="country" className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm">
                                            <option>US</option>
                                            <option>MX</option>
                                        </select>
                                    </div>
                                    <input type="tel" name="phone-number" id="phone-number" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-24 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                            <div className="flex gap-x-4 sm:col-span-2">
                                <div className="flex h-6 items-center">
                                    <button type="button" className="flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
                                        <span className="sr-only">Agree to policies</span>
                                        <span aria-hidden="true" className="h-4 w-4 translate-x-0 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
                                    </button>
                                </div>
                                <label className="text-sm leading-6 text-gray-600" id="switch-1-label">
                                    By selecting this, you agree to our
                                    <a href="#" className="font-semibold text-black"> privacy&nbsp;policy</a>.
                                </label>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Let's talk</button>
                        </div>
                    </form>
                    <div className="w-1/3">
                        <h1>OFFICE</h1>
                    </div>
                </div>
            </div>
        </>
    )
}