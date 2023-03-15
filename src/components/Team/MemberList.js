import Card from '../Card'
import TeamleadCard from './TeamleadCard.js'
import AmanpreetSehra from '../../assets/img/teamleads/Amanpreet Sehra_Finance and Supply Chain.jpg'
import BenC from '../../assets/img/teamleads/Ben C.jpg'
import BrookeE from '../../assets/img/teamleads/BrookeE.jpg'
import CoreyJohnsen from '../../assets/img/teamleads/Corey Johnsen_Website.JPG'
import JackProut from '../../assets/img/teamleads/Jack Prout_Suspension.PNG'
import JacobH from '../../assets/img/teamleads/JacobH.jpg'
import JamesVollmer from '../../assets/img/teamleads/James Vollmer_Software.jpg'
import JayYoo from '../../assets/img/teamleads/Jay Yoo_Chassis and Braking.jpg'
import KyleMa from '../../assets/img/teamleads/Kyle_Ma_Braking_Teamlead.jpg'
import MridhulBaskaran from '../../assets/img/teamleads/MRIDHUL_NAIR BASKARAN_High_Voltage_tEAMLEAD.jpg'
import NickC from '../../assets/img/teamleads/Nick C.jpeg'
import NishiUpadhyay from '../../assets/img/teamleads/Nishi Upadhyay_Industry Relations.JPEG'
import NoahKurszewski from '../../assets/img/teamleads/Noah Kurszewski_Firmware.jpeg'
import OliviaDSouza from '../../assets/img/teamleads/Olivia D’Souza_Low Voltage.jpeg'
import RyanBear from '../../assets/img/teamleads/Ryan Bear_Electrical Director.png'
import RyanMirwald from '../../assets/img/teamleads/Ryan Mirwald_Operations Director.jpg'
import SarahGerovac from '../../assets/img/teamleads/Sarah Gerovac_High Voltage.jpeg'
import SebastianThompson from '../../assets/img/teamleads/Sebastian_Thompson_President.jpeg'
import ShriyaGoyal from '../../assets/img/teamleads/ShriyaGoyal_Communication_Teamlrad.png'
import ZachA from '../../assets/img/teamleads/ZachA.jpg'
import placeholder from '../../assets/img/teamleads/placeholder.jpg'

export default function MemberList() {
    const adminLeads = [
        {
            image: SebastianThompson,
            name: 'Sebastian Thompson',
            team: 'President',
            major: 'Mechanical Engineering',
            year: 'Senior',
        },
        {
            image: JacobH,
            name: 'Jacob Hogan',
            team: 'Electrical Director',
            major: 'Electrical Engineering and CS',
            year: 'Senior',
        },
        {
            image: JayYoo,
            name: 'Jay Yoo',
            team: 'Mechanical Director',
            major: 'Mechanical Engineering',
            year: 'Senior',
        },
        {
            image: RyanMirwald,
            name: 'Ryan Mirwald',
            team: 'Operations Director',
            major: 'Industrial and Systems Engineering, Business Minor',
            year: 'Junior',
        },
    ]

    const electricLeads = [
        {
            image: placeholder,
            name: 'Jack Verich',
            team: 'Battery Lead',
            major: '',
            year: '',
        },
        {
            image: MridhulBaskaran,
            name: 'Mridhul Baskaran',
            team: 'High Voltage Lead',
            major: 'Electrical Engineering',
            year: 'Sophomore',
        },
        {
            image: OliviaDSouza,
            name: "Olivia D'Souza",
            team: 'Low Voltage Lead',
            major: 'Electrical Engineering and CS',
            year: 'Sophomore',
        },
        {
            image: placeholder,
            name: 'Ryan Louis Van Ells',
            team: 'Solar Array Lead',
            major: '',
            year: '',
        },
        {
            image: JamesVollmer,
            name: 'James Vollmer',
            team: 'Software Lead',
            major: 'Computer Engineering and CS',
            year: 'Junior',
        },
        {
            image: NoahKurszewski,
            name: 'Noah Kurszewski',
            team: 'Firmware Lead',
            major: 'Computer Engineering',
            year: 'Junior',
        },
    ]
    const mechanicalLeads = [
        {
            image: ZachA,
            name: 'Zachary Anderson',
            team: 'Body Lead',
            major: 'Mechanical Engineering',
            year: 'Senior',
        },
        {
            image: JayYoo,
            name: 'Jay Yoo',
            team: 'Braking and Chassis Lead',
            major: 'Mechanical Engineering',
            year: 'Junior',
        },
        {
            image: KyleMa,
            name: 'Kyle Ma',
            team: 'Braking Lead',
            major: 'Engineering Mechanics and Aerospace Engineering',
            year: 'Freshman',
        },
        {
            image: BrookeE,
            name: 'Brooke Ehle',
            team: 'Chassis Lead',
            major: 'Mechanical Engineering',
            year: 'Junior',
        },
        {
            image: placeholder,
            name: 'Troy Dorizas',
            team: 'Ergonomics Lead',
            major: '',
            year: '',
        },
        {
            image: placeholder,
            name: 'Hannah Granetzke',
            team: 'Mechatronics Lead',
            major: '',
            year: '',
        },
        {
            image: JackProut,
            name: 'Jack Prout',
            team: 'Suspension Lead',
            major: 'Mechanical Engineering',
            year: 'Junior',
        },
        {
            image: placeholder,
            name: 'Calvin Greene',
            team: 'Manufacturing Lead',
            major: '',
            year: '',
        },
    ]
    const operationsLeads = [
        {
            image: placeholder,
            name: 'Vacant',
            team: 'Outreach and Recruiting Lead',
            major: '',
            year: '',
        },
        {
            image: placeholder,
            name: 'Ashwath Bhupatiraju',
            team: 'Virtual Reality Lead',
            major: '',
            year: '',
        },
        {
            image: placeholder,
            name: 'Minghua Zhang',
            team: 'Vehicle Operations and Logistics Lead',
            major: '',
            year: '',
        },
        {
            image: CoreyJohnsen,
            name: 'Corey Johnsen',
            team: 'Website Lead',
            major: 'Computer Science and Statistics',
            year: 'Sophomore',
        },
        {
            image: ShriyaGoyal,
            name: 'Shriya Goyal',
            team: 'Communications Lead',
            major: 'Computer Science, Data Science, and Mathematics',
            year: 'Junior',
        },
        {
            image: AmanpreetSehra,
            name: 'Amanpreet Sehra',
            team: 'Finance and Supply Chain Lead',
            major: 'Finance',
            year: 'Sophomore',
        },
        {
            image: NishiUpadhyay,
            name: 'Nishi Upadhyay',
            team: 'Industry Relations Lead',
            major: 'Information Systems',
            year: 'Sophomore',
        },
    ]

    return (
        <div>
            <h1 class="text-3xl text-center text-black font-bold my-4">
                Administrative Leads
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 justify-center gap-4 max-w-screen-lg">
                    {adminLeads.map((teamLead, index) => (
                        <TeamleadCard
                            key={index}
                            image={teamLead.image}
                            name={teamLead.name}
                            team={teamLead.team}
                            major={teamLead.major}
                        />
                    ))}
                </div>
            </div>
            <h1 class="text-3xl text-center text-black font-bold my-4">
                Electrical Leads
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 justify-center gap-4 max-w-screen-lg">
                    {electricLeads.map((teamLead, index) => (
                        <TeamleadCard
                            key={index}
                            image={teamLead.image}
                            name={teamLead.name}
                            team={teamLead.team}
                            major={teamLead.major}
                        />
                    ))}
                </div>
            </div>
            <h1 class="text-3xl text-center text-black font-bold my-4">
                Mechanical Leads
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 justify-center gap-4 max-w-screen-lg">
                    {mechanicalLeads.map((teamLead, index) => (
                        <TeamleadCard
                            key={index}
                            image={teamLead.image}
                            name={teamLead.name}
                            team={teamLead.team}
                            major={teamLead.major}
                        />
                    ))}
                </div>
            </div>
            <h1 class="text-3xl text-center text-black font-bold my-4">
                Operations Leads
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 justify-center gap-4 max-w-screen-lg">
                    {operationsLeads.map((teamLead, index) => (
                        <TeamleadCard
                            key={index}
                            image={teamLead.image}
                            name={teamLead.name}
                            team={teamLead.team}
                            major={teamLead.major}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
