const Sidebar6: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold ">
            <h1>Merging Tacit Knowledge from Workers and Data from Systems/Processes</h1>

            <p className="text-sm text-gray-500">
                Combining employee insights with data-driven analysis helps identify bottlenecks and streamline operations, boosting productivity and reducing downtime. Incorporating tacit knowledge into data promotes easier knowledge sharing among employees.
            </p>

            <div className="mb-4">
                <h2>Main focus is on employee Involvement, with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>SCADA System:</strong> The evaluation and visualization of knowledge facilitates knowledge triangulation.</li>
                    <li><strong>Big Data Analytics:</strong> Given data can be structured to be analyzed and compared. This enables conclusions to be drawn.</li>
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

export default Sidebar6;