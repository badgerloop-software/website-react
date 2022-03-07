export default function Card({ title, children }) {
    return (
        <div className="flex flex-col items-center py-4 h-72 w-72 bg-white shadow-lg rounded-xl hover:shadow-xl hover:scale-101 duration-300 ease-in-out">
            <div className="flex justify-center items-center -mt-10 text-white w-4/5 h-1/4 bg-gray-700 rounded-xl text-2xl font-bold">
                {title}
            </div>
            <div className="flex justify-center items-center text-center p-4 text-gray-700 font-normal text-lg">
                {children}
            </div>
        </div>
    )
}
