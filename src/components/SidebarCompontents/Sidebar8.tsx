const Sidebar6: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold ">
            <h1>Accelerating Improvement and Innovation Cycles</h1>

            <p className="text-sm text-gray-500">
            Shortening improvement cycles enables rapid response to changing requirements, market dynamics, and technological advancements. It cultivates a culture of continuous innovation, leading to cost savings through streamlined processes and reduced time-to-market. Shorter cycles facilitate proactive risk management and more effective resource allocation.
            </p>

            <div className="mb-4">
                <h2>Main focus is on employee Involvement, with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Big Data Analytics:</strong> Insights can be gained from data more quickly and recommendations for action can be derived from them.</li>
                    <li><strong>IoT:</strong> Interconnectivity enables the interaction of various data-generating activities.</li>
                    <li><strong>Wearables:</strong> New, relevant technologies motivate employees to use them and get more involved.</li>
                </ol>
            </div>
            <div>
                <h2>Relevant Lean Manufacturing principles are:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Process Factors:</strong> Consisting of pull production, continuous flow, and setup time reduction.</li>
                    <li><strong>Control and Human Factors:</strong> Consisting of TPM, statistical process control, and employee participation.</li>
                    <li><strong>Supplier Factors:</strong> Consisting of supplier feedback, supplier development, and just-in-time delivery.</li>
                </ol>
            </div>
            <div className="mt-4">
                <p className='text-sm'>Want to find out more?</p>
                <a href="https://sfn.chemistree.de/en/community/sfn/questionnaires/industrial-companies/register" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar6;