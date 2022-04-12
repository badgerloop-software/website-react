export default function Card({ title, children }) {
    return (
        <div className="flex flex-col items-center py-4 lg:h-72 h-40 lg:w-72 w-48 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-101 duration-300 ease-in-out">
            <div className="flex justify-center items-center -mt-10 text-white w-4/5 h-1/4 bg-gray-700 rounded-xl sm:text-2xl text-lg font-bold">
                {title}
            </div>
            <div className="flex justify-center items-center text-center sm:p-4 p-1 font-normal sm:text-lg text-sm">
                {children}
            </div>
        </div>
    )
}
