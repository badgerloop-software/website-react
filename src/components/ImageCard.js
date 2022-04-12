export default function ImageCard({ title, image, alt, url, children }) {
    return (
        <a
            className="flex lg:flex-col sm:flex-row flex-col justify-center items-center p-4 lg:h-2/3 h-1/4 lg:w-1/3 w-5/6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105 duration-300 ease-in-out"
            href={url}
        >
            <img
                className="flex justify-center items-center lg:-mt-10 lg:ml-0 sm:mt-0 sm:-ml-10 -mt-10 lg:h-auto h-5/6 text-white rounded-xl object-contain shadow-lg"
                src={image}
                alt={alt}
            />
            <div className="flex flex-col justify-center items-center gap-2 h-full w-full">
                <div className="flex justify-center items-center text-center pt-6 font-bold text-2xl">
                    {title}
                </div>
                <div className="flex justify-center items-center text-center pb-32 font-normal text-lg">
                    {children}
                </div>
            </div>
        </a>
    )
}
