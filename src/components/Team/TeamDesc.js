import { useState } from 'react'

export default function TeamDesc() {
    const [selectedTab, setSelectedTab] = useState('Electrical')

    const tabs = [
        {
            label: 'Electrical',
            content: 'Electrical Team',
        },
        {
            label: 'Mechanical',
            content: 'Mechanical Team',
        },
        {
            label: 'Operations',
            content: 'Operations Team',
        },
    ]

    return (
        <div className="bg-uw-red h-64 p-4">
            <div className="flex justify-between">
                {tabs.map(tab => (
                    <button
                        key={tab.label}
                        className={`px-4 py-2 ${
                            selectedTab === tab.label
                                ? 'bg-white bg-uw-red'
                                : 'bg-red-700 text-white'
                        }`}
                        onClick={() => setSelectedTab(tab.label)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="mt-4 text-white">
                {tabs.find(tab => tab.label === selectedTab)?.content}
            </div>
        </div>
    )
}
