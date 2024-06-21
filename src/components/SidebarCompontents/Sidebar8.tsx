const Sidebar8: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Accelerating Improvement Cycles</h1>

            <p className="text-sm text-gray-500">
                Slow improvement cycles delay adaptation to changing requirements and hinder agility. Shortening improvement cycles allows organizations to respond fast to changing requirements, market dynamics, and technological advancements. This fosters a culture of continuous innovation, resulting in cost savings due to streamlined processes and reduced time-to-market. Shorter cycles allow proactive risk management and help to allocate resources more effectively.
            </p>

            <div className="mb-4">
                <h2>Two things are essential for this:</h2>
                <ul className="list-disc pl-4 text-sm text-gray-500">
                    <li>Employees must be motivated and open to change.</li>
                    <li>A "fail fast" culture must be introduced and practised.</li>
                </ul>
                <h2>Technologies that make this possible include:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Big Data Analytics:</strong> Insights can be gained from data more quickly and recommendations for action can be derived from them.</li>
                    <li><strong>IoT:</strong> Interconnectivity enables the interaction of various data-generating activities.</li>
                    <li><strong>Wearables:</strong> New, relevant technologies motivate employees to use them and get more involved.</li>
                </ol>
            </div>
            <div className="mt-4">
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Want to find out more?
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar8;