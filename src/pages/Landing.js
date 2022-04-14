import Hero from '../components/Landing/Hero'
import Body from '../components/Landing/Body'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Landing() {
    return (
        <div className="absolute h-screen w-screen bg-gray-200 overflow-auto text-gray-700">
            <Navbar />
            <Hero />
            <Body />
            <Footer />
        </div>
    )
}
