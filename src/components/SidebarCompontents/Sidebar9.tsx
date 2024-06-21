const Sidebar9: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 h-full font-semibold">
            <h1>Enhancing Management Access to the Shop Floor</h1>

            <p className="text-sm text-gray-500">
                Leaders who engage more with the shop floor gain better insights into challenges and opportunities, leading to more effective resource allocation and employee engagement for continuous improvement.
            </p>

            <div className="mb-4">
                <h2>Main focus is on communication and collaboration with the key technologies:</h2>
                <ol className="list-decimal pl-4 text-sm text-gray-500">
                    <li><strong>SCADA System:</strong> Standardized KPIs can be created that are understood by everyone to support Gemba walks.</li>
                    <li><strong>Big Data Analytics:</strong> Data and information can be compiled in such a way that they can be used collaboratively.</li>
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
                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    Want to find out more?
                    Find your perfect partner for free to tackle your problems and be future-proofed! – Click here
                </a>
            </div>
        </div>
    );
};

export default Sidebar9;