import ImageCard from '../ImageCard'
import asc from '../../assets/img/asc.jpg'

export default function Body() {
    return (
        <div className="flex flex-col items-center w-full md:h-4/5 h-5/6 h-full">
            <div className="flex flex-col items-center lg:gap-40 gap-20 pt-12">
                <div className="flex flex-col justify-center text-center px-4">
                    <div className="lg:text-4xl text-3xl font-bold">
                        Our Mission
                    </div>
                    <div className="lg:text-xl md:text-lg text-md font-normal">
                        Provide an unparalleled learning opportunity that
                        fosters innovation and hands-on experience.
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col lg:justify-center lg:items-start items-center lg:text-left text-center md:gap-16 gap-12 xl:mx-40 lg:mx-32 md:mx-24 sm:mx-16 mx-8">
                    <div className="flex flex-col lg:w-3/5 lg:gap-6 md:gap-4 gap-3 -mt-12">
                        <div className="lg:text-3xl text-2xl font-bold">
                            About Badgerloop
                        </div>
                        <div className="lg:text-xl md:text-lg text-md font-normal">
                            We are a registered student organization with the
                            University of Wisconsin-Madison. Our organizations
                            goal is to design, build and test a car to compete
                            in the American Solar Challenge.
                        </div>
                        <div className="lg:text-xl md:text-lg text-md font-normal">
                            Made up of a majority of undergraduate students, we
                            put our efforts forth to this organization to better
                            ourselves as well as to contribute to the
                            development of a future mode of transportation we
                            believe in.
                        </div>
                        <div className="lg:text-xl md:text-lg text-md font-normal">
                            All of our efforts are made possible by our generous
                            donors, who we cannot thank enough.
                        </div>
                    </div>
                    <ImageCard
                        title="American Solar Challenge"
                        image={asc}
                        alt="American Solar Challenge"
                        url="https://www.americansolarchallenge.org"
                    >
                        A competition to design, build, and drive solar-powered
                        cars in a cross-country time/distance rally event.
                    </ImageCard>
                </div>
            </div>
        </div>
    )
}
