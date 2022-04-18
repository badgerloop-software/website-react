import logo from '../../assets/img/badgerloopLogoBlack.png'

export default function header() {
    return (
        <div className="flex justify-center items-center bg-gray-200 p-8 gap-12">
            <img className="object-contain" src={logo} alt="logo" />
            <div className="flex flex-col justify-center text-left w-1/3">
                <div className="text-5xl font-bold">Our Team</div>
                <div className="text-xl font-normal">
                    Badgerloop is comprised of three teams that come together to
                    build the best pod possible.
                </div>
            </div>
        </div>
    )
}
