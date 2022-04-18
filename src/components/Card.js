export default function Card({ title, children }) {
    return (
        <div className="flex flex-col items-center py-4 lg:h-64 md:h-56 h-48 xl:w-72 lg:w-64 md:w-56 w-48 md:mt-0 mt-6 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-101 duration-300 ease-in-out">
            <div className="flex justify-center items-center -mt-10 text-white w-4/5 h-1/4 bg-gray-700 rounded-xl lg:text-2xl md:text-xl text-lg font-bold">
                {title}
            </div>
            <div className="flex justify-center items-center text-center p-4 font-normal xl:text-lg md:text-md text-sm">
                {children}
            </div>
        </div>
    )
}
