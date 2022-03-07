import logo from '../../assets/img/badgerloop.png'

export default function Hero() {
    return (
        <div className="flex flex-col items-center w-full h-full">
            <div className="flex justify-center xl:p-32 lg:p-16 p-4 mx-auto bg-cover bg-hero-background w-full h-full">
                <div className="flex flex-col justify-center xl:w-2/5 xl:h-2/5 lg:w-1/2 lg:h-1/2 w-3/5 h-3/5">
                    <img className="object-contain" src={logo} alt="logo" />
                    <div className="flex justify-center items-center text-center text-white 2xl:text-2xl lg:text-xl text-lg">
                        Badgerloop is a STEM education organization competing in
                        the American Solar Challenge
                    </div>
                </div>
            </div>
        </div>
    )
}
