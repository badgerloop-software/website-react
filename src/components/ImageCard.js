export default function ImageCard({ title, image, alt, url, children }) {
    return (
        <a
            className="flex lg:flex-col sm:flex-row flex-col justify-center items-center -mt-32 p-4 lg:h-5/6 h-1/3 lg:w-1/3 w-5/6 mt-4 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-105 duration-300 ease-in-out"
            href={url}
        >
            <img
                className="flex justify-center items-center lg:-mt-10 lg:ml-0 sm:mt-0 sm:-ml-10 -mt-10 lg:h-auto h-5/6 text-white rounded-xl object-contain"
                src={image}
                alt={alt}
            />
            <div className="flex flex-col justify-center items-center gap-2 text-gray-700 h-full w-full">
                <div className="flex justify-center items-center text-center p-2 pt-6 font-bold text-2xl">
                    {title}
                </div>
                <div className="flex justify-center items-center text-center p-2 pb-32 font-normal text-xl">
                    {children}
                </div>
            </div>
        </a>
    )
}
