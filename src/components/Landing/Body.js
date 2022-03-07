import Card from '../Card'
import ImageCard from '../ImageCard'
import asc from '../../assets/img/asc.jpg'

export default function Body() {
    return (
        <div className="flex flex-col gap-16 items-center bg-gray-200 w-full h-full">
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-16 -mt-32 mx-16">
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
            <div className="flex lg:justify-center lg:items-start items-center lg:text-left text-center lg:flex-row flex-col gap-16 p-16 xl:w-5/6 w-11/12">
                <div className="flex flex-col w-3/5 text-gray-700">
                    <div className="text-3xl font-bold mt-8">
                        About Badgerloop
                    </div>
                    <div className="text-xl font-normal mt-8">
                        We are a registered student organization with the
                        University of Wisconsin–Madison. Our organizations goal
                        is to design, build and test a car to compete in the
                        American Solar Challenge.
                    </div>
                    <div className="text-xl font-normal mt-8">
                        Made up of a majority of undergraduate students, we put
                        our efforts forth to this organization to better
                        ourselves as well as to contribute to the development of
                        a future mode of transportation we believe in.
                    </div>
                    <div className="text-xl font-normal mt-8">
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
                    A competition to design, build, and drive solar-powered cars
                    in a cross-country time/distance rally event.
                </ImageCard>
            </div>
        </div>
    )
}
