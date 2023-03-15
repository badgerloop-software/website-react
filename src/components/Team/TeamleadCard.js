const TeamleadCard = ({ image, name, team, major, year }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-64 object-contain">
            <img
                className="h-64 w-full object-cover object-center"
                src={image}
                alt={`${name}'s profile`}
            />
            <div className="px-4 py-2 text-center">
                <h1 className="text-gray-900 font-bold text-2xl mb-2">
                    {name}
                </h1>
                <p className="text-gray-700 text-base mb-2">{team}</p>
                <p className="text-gray-700 text-base">{major}</p>
                <p className="text-gray-700 text-base">{year}</p>
            </div>
        </div>
    )
}

export default TeamleadCard
