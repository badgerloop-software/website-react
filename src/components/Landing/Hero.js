import logo from '../../assets/img/badgerloopLogoWhite.png'
import Card from '../Card'

export default function Hero() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="flex justify-center bg-cover bg-hero-background w-full h-full">
                <div className="flex flex-col items-center pt-16 xl:w-1/3 lg:w-5/12 md:w-1/2 sm:w-7/12: w-2/3">
                    <img className="object-contain" src={logo} alt="logo" />
                    <div className="flex justify-center items-center text-center text-white 2xl:text-2xl lg:text-xl text-lg">
                        Badgerloop is a STEM education organization competing in
                        the American Solar Challenge
                    </div>
                </div>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-2 -mt-32 xl:gap-16 lg:gap-12 md:gap-8 gap-4 xl:mx-16 lg:mx-12 md:mx-8 mx-4">
                <Card title="Build">
                    the best solar car we can with what we have, whom we have,
                    and the time we have.
                </Card>
                <Card title="Develop">
                    the skills necessary for high-level professional work by
                    experiencing an engineering startup environment, including
                    innovative hands-on engineering and operations.
                </Card>
                <Card title="Learn">
                    from mistakes and utilize Hyperloop Competition experience
                    while also paving new paths of understanding.
                </Card>
                <Card title="Complete">
                    a functional prototype solar car by July 1st 2022.
                </Card>
            </div>
        </div>
    )
}
