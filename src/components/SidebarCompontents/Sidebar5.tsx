const Sidebar5: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Improving Employee Enablement and Availability of Skilled Workers</h1>

            <p className="text-sm text-gray-500">
                Skilled workers ensure high product quality and consistent standards, preventing defects and customer dissatisfaction. Their expertise reduces disruptions and downtime, ensuring continuous production. This leads to cost savings, fewer errors, optimized processes, and higher output per labor hour, boosting profitability.
            </p>

            <div className="mb-4">
                <h2>Main focus is on access to knowledge with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>MES System:</strong> Transparency about the output and strengths/weaknesses of employees.</li>
                    <li><strong>SCADA System:</strong> Possibility to digitalise and record processes to facilitate training.</li>
                    <li><strong>Big Data Analytics:</strong> Given data can be structured to be analysed. This enables conclusions to be drawn.</li>
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
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Want to find out more?
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar5;