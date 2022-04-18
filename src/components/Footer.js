import logo from '../assets/img/carLogo.png'

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="w-screen py-10 xl:px-32 lg:px-24 md:px-16 sm:px-8 px-4 bg-gray-300">
            <div className="grid grid-cols-3 ">
                <div className="flex flex-col">
                    <div className="font-bold lg:text-xl sm:text-lg text-md">
                        Follow us!
                    </div>
                    <div className="font-normal lg:text-lg sm:text-md text-sm">
                        Check out our social media and give us a follow to stay
                        up to date with all things Badgerloop!
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-3/5" />
                </div>
                <div className="flex flex-col text-right">
                    <div className="font-bold lg:text-xl sm:text-lg text-md">
                        Contact / Donate
                    </div>
                    <div className="font-normal lg:text-lg sm:text-md text-sm">
                        Feel free to send us a message or if you feel like
                        supporting our team and the creation of the solar car, a
                        donation would be amazing!
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bottom-0 lg:text-lg sm:text-md text-sm lg:pt-8 md:pt-4 pt-2">
                Badgerloop &copy; {getCurrentYear()}
            </div>
        </div>
    )
}
