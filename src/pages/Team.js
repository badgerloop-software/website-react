import Navbar from '../components/Navbar'
import Header from '../components/Team/Header'
import MemberList from '../components/Team/MemberList'

export default function About() {
    return (
        <div className="absolute h-screen w-screen bg-gray-300 overflow-auto text-gray-700">
            <Navbar />
            <Header />
            <MemberList />
        </div>
    )
}
