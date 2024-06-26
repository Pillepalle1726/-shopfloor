const Sidebar7: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Data-Driven Process Optimization</h1>

            <p className="text-sm text-gray-500">
                Implementing data-driven process optimization helps identify bottlenecks, streamline workflows, and reduce waste. These insights support decision-making and encourage innovation and process refinement for continuous improvement. Regular data analysis enables proactive issue resolution, reducing operational and financial risks.
            </p>
            <div className="mb-4">
                <h2>Main focus is on data quality, with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Big Data Analytics:</strong> Patterns and information can be retrieved, increasing the quality and usability of given data.</li>
                    <li><strong>SCADA System:</strong> Data can be visualized and conclusions drawn.</li>
                    <li><strong>Cloud Computing:</strong> Increases the availability and usability of generated data.</li>
                    <li><strong>IoT:</strong> Increases cross-linking at shop floor level, which expands the amount of usable data points.</li>
                    <li><strong>Sensors and Actuators:</strong> Increases the overall amount of data points.</li>
                </ol>
            </div>
            <div>
                <h2>Relevant Lean Manufacturing principles are:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Process Factors:</strong> Consisting of pull production, continuous flow, and setup time reduction.</li>
                    <li><strong>Control and Human Factors:</strong> Consisting of TPM, statistical process control, and employee participation.</li>
                    <li><strong>Supplier Factors:</strong> Consisting of supplier feedback, supplier development, and just-in-time delivery.</li>
                    <li><strong>Customer Factors:</strong> Comprising customer involvement.</li>
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

export default Sidebar7;