const Sidebar4: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Improving Systematic Error Capture</h1>

            <p className="text-sm text-gray-500">
                Identifying error causes enables lasting solutions and targeted corrective actions. Analyzing trends allows preventive measures, improving reliability. Error data aids decision-making, resource allocation, and quick adaptation.
            </p>

            <div className="mb-4">
                <h2>Main focus is on monitoring recording, with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>ERP System:</strong> Visualization of Data for transparent decision making.</li>
                    <li><strong>MES System:</strong> Less documentation through increased transparency of information.</li>
                    <li><strong>SCADA System:</strong> Centralized supervisory and control leads to less costs for monitoring.</li>
                    <li><strong>Mobile Computing:</strong> Simplified recording of occurrences during the manufacturing process.</li>
                    <li><strong>Sensors and Actuators:</strong> Better planning through more data points.</li>
                    <li><strong>Wearables:</strong> Increased overview through better access to information.</li>
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

export default Sidebar4;