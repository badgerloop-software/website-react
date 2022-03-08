import logo from '../assets/img/carLogo.png'

export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear()
    }

    return (
        <div className="w-full py-16 px-32 bg-gray-300 bottom-0">
            <div className="grid grid-cols-3 ">
                <div className="flex flex-col">
                    <div className="font-bold text-xl">Follow us!</div>
                    <div className="font-normal text-lg">
                        Check out our social media and give us a follow to stay
                        up to date with all things Badgerloop!
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <img src={logo} alt="logo" className="w-4/5" />
                </div>
                <div className="flex flex-col text-right">
                    <div className="font-bold text-xl">Contact / Donate</div>
                    <div className="font-normal text-lg">
                        Feel free to send us a message or if you feel like
                        supporting our team and the creation of the solar car, a
                        donation would be amazing!
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center bottom-0 text-lg pt-8">
                Badgerloop &copy; {getCurrentYear()}
            </div>
        </div>
    )
}
