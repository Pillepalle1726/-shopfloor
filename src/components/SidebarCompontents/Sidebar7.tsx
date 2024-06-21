const Sidebar7: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Data-Driven Process Optimization</h1>

            <p className="text-sm text-gray-500">
                The absence of data-driven insights limits continuous improvement efforts. Implementing data-driven process optimization allows organizations to identify bottlenecks, streamline workflows, and reduce waste. These insights provide a factual basis for decision-making, facilitating optimization. Regular analysis of data encourages employees to seek innovative solutions and refine processes for continuous improvement. This enables organizations to proactively address potential issues, reducing operational and financial risks.
            </p>

            <div className="mb-4">
                <h2>The generation of data and the quality of this data are at main focus. Advantageous technologies for this are:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>Big Data Analytics:</strong> Patterns and information can be retrieved, increasing the quality and usability of given data.</li>
                    <li><strong>SCADA System:</strong> Data can be visualized and conclusions drawn.</li>
                    <li><strong>Cloud Computing:</strong> Increases the availability and usability of generated data.</li>
                    <li><strong>IoT:</strong> Increases cross-linking at shop floor level, which expands the amount of usable data points.</li>
                    <li><strong>Sensors and Actuators:</strong> Increases the overall amount of data points.</li>
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

export default Sidebar7;