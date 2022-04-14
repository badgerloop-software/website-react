export default function ImageCard({ title, image, alt, url, children }) {
    return (
        <a
            className="flex lg:flex-col flex-row lg:gap-0 gap-8 justify-center items-center p-4 lg:h-2/3 h-1/4 lg:w-1/3 w-5/6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105 duration-300 ease-in-out"
            href={url}
        >
            <img
                className="flex justify-center items-center lg:-mt-10 lg:ml-0 mt-0 -ml-10 lg:h-auto h-5/6 text-white rounded-xl object-contain shadow-lg"
                src={image}
                alt={alt}
            />
            <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
                <div className="flex justify-center items-center text-center lg:pt-6 p-0 font-bold xl:text-2xl text-xl">
                    {title}
                </div>
                <div className="flex justify-center items-center text-center lg:pb-32 p-0 font-normal xl:text-lg xs:text-md text-sm">
                    {children}
                </div>
            </div>
        </a>
    )
}
